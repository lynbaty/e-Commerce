using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.Account;
using API.Dtos.Products;
using AutoMapper;
using Core.Entities;
using Core.Entities.Identity;

namespace API.Helpers
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<Product, ProductReadDto>()
                .ForMember(d => d.ProductBrand,o => o.MapFrom(s => s.ProductBrand.Name))
                .ForMember(d => d.ProductType,o => o.MapFrom(s => s.ProductType.Name))
                .ForMember(d => d.PictureUrl, o => o.MapFrom<ProductImageUrlResolver>());
            CreateMap<Address,AddressDto>().ReverseMap();
        }   
    }
}