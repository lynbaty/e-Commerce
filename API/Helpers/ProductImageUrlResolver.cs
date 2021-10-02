using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.Products;
using AutoMapper;
using Core.Entities;
using Microsoft.Extensions.Configuration;

namespace API.Helpers
{
    public class ProductImageUrlResolver : IValueResolver<Product, ProductReadDto, string>
    {
        private readonly IConfiguration _config;
        public ProductImageUrlResolver(IConfiguration config)
        {
            _config = config;

        }
        public string Resolve(Product source, ProductReadDto destination, string destMember, ResolutionContext context)
        {
            if(!string.IsNullOrEmpty(source.PictureUrl))
            {
                return _config["ApiUrl"] + source.PictureUrl;
            }
            else return null;
        }
    }
}