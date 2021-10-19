using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities.Order
{
    public class DeliveryMethod : BaseEntity
    {
        public string ShortName {set; get;}
        public string DeliveryTime { get; set; }
        public string Description { get; set; }
        public decimal Price {set; get;}
    }
}