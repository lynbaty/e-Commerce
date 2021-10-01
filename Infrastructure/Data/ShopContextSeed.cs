using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Data
{
    public class ShopContextSeed
    {
        public static async Task SeedAsync(ShopContext context, ILoggerFactory loggerFactory)
        {
            try{
                if(!context.ProductBrands.Any()){
                    var brandData = File.ReadAllText("../Infrastructure/Data/SeedData/brands.json");
                    var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandData);
                    context.ProductBrands.AddRange(brands);
                }
                if(!context.ProductTypes.Any()){
                    var typeData = File.ReadAllText("../Infrastructure/Data/SeedData/types.json");
                    var types = JsonSerializer.Deserialize<List<ProductType>>(typeData);
                    context.ProductTypes.AddRange(types);
                }
                if(!context.Products.Any()){
                    var productData = File.ReadAllText("../Infrastructure/Data/SeedData/products.json");
                    var products = JsonSerializer.Deserialize<List<Product>>(productData);
                    context.Products.AddRange(products);
                }
                await context.SaveChangesAsync();
            }catch(Exception ex)
            {
                var logger = loggerFactory.CreateLogger<ShopContextSeed>();
                logger.LogError(ex.Message);
            }
        }
    }
}