using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Order;

namespace Core.Specifications
{
    public class OrderWithItemSpecification : BaseSpecification<Order>
    {
        public OrderWithItemSpecification( string buyerEmail) : base(o => o.BuyerEmail == buyerEmail)
        {
            AddInclude(o => o.DeliveryMethod);
            AddInclude(o => o.OrderItem);
            AddOrderbyDesc(o => o.OrderDate);
        }
         public OrderWithItemSpecification(int id, string buyerEmail): base(o => o.Id == id && o.BuyerEmail == buyerEmail)
        {
            AddInclude(o => o.DeliveryMethod);
            AddInclude(o => o.OrderItem);
        }
    }
}