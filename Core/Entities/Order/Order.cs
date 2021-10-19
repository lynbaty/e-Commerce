using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities.Order
{
    public class Order :BaseEntity
    {
        public Order()
        {
            
        }
        public Order( List<OrderItem> orderItem, string buyerEmail,Address shipToAddress, DeliveryMethod deliveryMethod, decimal subTotal)
        {
            BuyerEmail = buyerEmail;
            ShipToAddress = shipToAddress;
            OrderItem = orderItem;
            DeliveryMethod = deliveryMethod;
            SubTotal = subTotal;
        }

        public string BuyerEmail { get; set; }
        public DateTimeOffset OrderDate {set; get;} = DateTimeOffset.Now;
        public Address ShipToAddress {set; get;}

        public List<OrderItem>  OrderItem {set;get;}
        public OrderStatus Status {set; get;} = OrderStatus.Pending;
        public DeliveryMethod DeliveryMethod {set; get;}
        public decimal SubTotal {set; get;}
        public string PaymentIntentId {set; get;}
        public decimal GetTotal(){
            return SubTotal + DeliveryMethod.Price;
        }

    }
}