using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos.Account
{
    public class AddressDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string State {set; get;}
        public string Street {set; get;}
        public string City {set; get;}
        public string ZipCode {set; get;}
    }
}