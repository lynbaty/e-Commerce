using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.Account;
using API.Dtos.Order;
using API.Dtos.Products;
using AutoMapper;
using Core.Entities;
using Core.Entities.Identity;
using Core.Entities.Order;

namespace API.Helpers
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<Product, ProductReadDto>()
                .ForMember(d => d.ProductBrand,o => o.MapFrom(s => s.ProductBrand.Name))
                .ForMember(d => d.ProductType,o => o.MapFrom(s => s.ProductType.Name))
                .ForMember(d => d.PictureUrl, o => o.MapFrom<ProductImageUrlResolver>());
            CreateMap<Core.Entities.Identity.Address,AddressDto>().ReverseMap();
            CreateMap<AddressDto,Core.Entities.Order.Address>();
            
            CreateMap<Order, OrdertoReturnDto>()
                .ForMember(d => d.DeliveryMethod,o => o.MapFrom(s => s.DeliveryMethod.ShortName))
                .ForMember(d => d.ShippingPrice,o => o.MapFrom(s => s.DeliveryMethod.Price))
                .ForMember(d => d.OrderItemDto,o => o.MapFrom<OrderItemResolver>());
            CreateMap<OrderItem, OrderItemDto>()
                .ForMember(d => d.ProductId, o => o.MapFrom(s => s.ItemOrdered.ProductItemId))
                .ForMember(d => d.ProductName, o => o.MapFrom(s => s.ItemOrdered.ProductName))
                .ForMember(d => d.PictureUrl, o => o.MapFrom<OrderItemPictureUrlResolver>());
        }   
    }
}