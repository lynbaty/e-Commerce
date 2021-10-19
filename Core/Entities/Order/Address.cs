using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities.Order
{
    public class Address
    {
        public Address()
        {
        }

        public Address(string firstName, string lastName, string state, string street, string city, string zipCode)
        {
            FirstName = firstName;
            LastName = lastName;
            State = state;
            Street = street;
            City = city;
            ZipCode = zipCode;
        }

        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string State { set; get; }
        public string Street { set; get; }
        public string City { set; get; }
        public string ZipCode { set; get; }
    }
}