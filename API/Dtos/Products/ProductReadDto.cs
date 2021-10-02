using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos.Products
{
    public class ProductReadDto
    {
        public int Id { set; get;}
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string PictureUrl { get; set; }
        public string ProductType { set; get; }
        public string ProductBrand { get; set; }
    
    }
}