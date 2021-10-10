using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos.Account
{
    public class UserDto
    {
        public string UserName {set; get;}
        public string Email {set; get;}
        public string Token {set; get;}
    }
}