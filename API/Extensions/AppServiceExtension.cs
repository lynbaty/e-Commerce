using System.Linq;
using System.Text;
using API.Errors;
using API.Helpers;
using Core.Entities.Identity;
using Core.Interfaces;
using Infrastructure.Data;
using Infrastructure.Identity;
using Infrastructure.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace API.Extensions
{
    public static class AppServiceExtension
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services,IConfiguration config)
        {
            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
            services.AddScoped<IBasketRepository,BasketRepository>();
            services.AddScoped<ITokenService,TokenService>();
            
            services.AddAutoMapper(typeof(MapperProfile));
            services.Configure<ApiBehaviorOptions>(option => 
                    option.InvalidModelStateResponseFactory = actionContext => {
                        var errors = actionContext.ModelState
                            .Where(e => e.Value.Errors.Count() > 0)
                            .SelectMany( e => e.Value.Errors)
                            .Select(e => e.ErrorMessage).ToArray();
 
                        var errorResponse = new ApiValidationErrorResponse(){
                            Errors = errors
                        };
                        return new BadRequestObjectResult(errorResponse);

                    });
            services.AddIdentity<AppUser,IdentityRole>()
                        .AddEntityFrameworkStores<AppIdentityDbContext>();
                    
            services.AddAuthentication(x =>  
                {  
                    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;  
                    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;  
                })
                    .AddJwtBearer(x =>  
                {  
                    x.TokenValidationParameters = new TokenValidationParameters  
                    {  
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Token:Key"])),  
                        ValidateIssuer = true,  
                        ValidateIssuerSigningKey = true,  
                        ValidIssuer = config["Token:Issuer"], 
                        ValidateAudience = false
                    };  
                });  
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                                builder =>
                                {
                                    builder.AllowAnyHeader()
                                            .AllowAnyMethod()
                                            .WithOrigins("https://localhost:4200");
                                });
            });
            return services;
        }
    }
}