using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos.Account
{
    public class LoginDto
    {
        public string Email {set; get;}
        public string Password {set; get;}
        public bool Remember {set; get;}
    }
}