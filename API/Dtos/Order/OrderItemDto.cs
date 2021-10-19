using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos.Order
{
    public class OrderItemDto
    {
         public int ProductId {set; get;}
         public string PictureUrl {set; get;}
         public string ProductName {set; get;}
        public decimal Price { get; set; }
        public int Quantity {set; get;}
    }
}