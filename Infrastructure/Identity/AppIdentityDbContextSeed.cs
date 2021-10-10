using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedAsync(UserManager<AppUser> userManager){
            if(!userManager.Users.Any()){
                var user = new AppUser(){
                    UserName = "lynbaty",
                    Email ="danateashop@gmail.com",
                    DisplayName = "LYNBATY",
                    Address = new Address(){
                        FirstName = "Thien",
                        LastName = "An",
                        City = "Danang",
                        State = "DN",
                        ZipCode = "550000",
                        Street = "87A Ly Tu Tan"
                    }
                };
                await userManager.CreateAsync(user,"Pa$$w0rd");
            }
        }
    }
}