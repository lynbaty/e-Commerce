using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.Account;

namespace API.Dtos
{
    public class OrderDto
    {
        public int DeliveryMethodId { get; set; }

        public AddressDto ShiptoAddress { get; set; }

        public string BasketId {set; get;}
    }
}