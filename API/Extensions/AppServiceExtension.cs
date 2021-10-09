using System.Linq;
using API.Errors;
using API.Helpers;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace API.Extensions
{
    public static class AppServiceExtension
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
            services.AddScoped<IBasketRepository,BasketRepository>();
            
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
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                                builder =>
                                {
                                    builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:4200");
                                });
            });
            return services;
        }
    }
}