using System.Collections.Generic;
using System.Threading.Tasks;

using Core.Entities;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ShopContext _shopContext;

        public ProductsController(ShopContext shopContext)
        {
            _shopContext = shopContext;

        }
        [HttpGet]
        public async Task<ActionResult<List<Product>>> Getall()
        {
            var products =await _shopContext.Products.ToListAsync();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetId(int id)
        {
            return await _shopContext.Products.FindAsync(id);
        }

    }
}