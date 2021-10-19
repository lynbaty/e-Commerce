using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Entities.Order;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class OrderService : IOrderService
    {
        private readonly IBasketRepository _basketRepository;
        private readonly IUnitOfWork _unitOfWork;

        public OrderService(IBasketRepository basketRepository,
                           IUnitOfWork unitOfWork)
        {
            _basketRepository = basketRepository;
            _unitOfWork = unitOfWork;
        }
        public async Task<Order> CreateOrderAsync(string buyerEmail, int deliveryMethod, string basketId, Address shippingAddress)
        {
            //get basket from repo
            var basket = await _basketRepository.GetBasketAsync(basketId);
            
            // get items from product repo
            var products = await _unitOfWork.Repository<Product>().ListAllAsync();
            var orderItems = (from i in basket.Items
                        join p in products on i.ProductName equals p.Name
                        select new OrderItem{
                            Price = p.Price,
                            Quantity = i.Quantity,
                            ItemOrdered = new ProductItemOrdered{
                                ProductItemId = p.Id,
                                ProductName = p.Name,
                                PictureUrl = p.PictureUrl
                            }
                        }).ToList();
            // get delivery method from repo
            var delivery =await _unitOfWork.Repository<DeliveryMethod>().GetByIdAsync(deliveryMethod);
            // calc subtatal
            decimal subtotal = orderItems.Sum(x => x.Price*x.Quantity);
            // create order
            Order order = new Order(orderItems,buyerEmail,shippingAddress,delivery,subtotal);
            //saveto db
           _unitOfWork.Repository<Order>().Add(order);
            //returen order
           var result =await _unitOfWork.Complete();
            if(result <= 0 ) return null;
            await _basketRepository.DeleteBasketAsync(basketId);
            return order;
        }

        public async Task<IReadOnlyList<DeliveryMethod>> GetDeliveryMethodAsync()
        {
            return await _unitOfWork.Repository<DeliveryMethod>().ListAllAsync();
        }

        public async Task<Order> GetOrderByIdAsync(int id, string buyerEmail)
        {
            var spec = new OrderWithItemSpecification(id,buyerEmail);
            return await _unitOfWork.Repository<Order>().GetEntityWithSpec(spec);
        }

        public async Task<IReadOnlyList<Order>> GetOrdersForUserAsync(string buyerEmail)
        {
            var spec = new OrderWithItemSpecification(buyerEmail);
            return await _unitOfWork.Repository<Order>().ListAsync(spec);
        }
    }
}