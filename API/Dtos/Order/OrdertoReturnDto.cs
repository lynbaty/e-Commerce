using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Order;

namespace API.Dtos.Order
{
    public class OrdertoReturnDto
    {
        public int Id {set; get;}
        public string BuyerEmail { get; set; }
        public DateTimeOffset OrderDate {set; get;}
        public Address ShipToAddress {set; get;}

        public List<OrderItemDto> OrderItemDto {set;get;}
        public string Status {set; get;}
        public string DeliveryMethod {set; get;}
        public decimal ShippingPrice {set; get;}
        public decimal SubTotal {set ; get;}
        public decimal Total {set ; get;}
    }
}