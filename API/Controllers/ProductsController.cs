using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.Products;
using API.Errors;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
  
    public class ProductsController : BaseApiController
    {
        private readonly IGenericRepository<Product> _productRepo;
        private readonly IGenericRepository<ProductType> _productTypeRepo;
        private readonly IGenericRepository<ProductBrand> _productBrandRepo;
        private readonly IMapper _mapper;

        public ProductsController(IGenericRepository<Product> productRepo,
                                  IGenericRepository<ProductType> productTypeRepo,
                                  IGenericRepository<ProductBrand> productBrandRepo,
                                  IMapper mapper)
        {
            _productRepo = productRepo;
            _productTypeRepo = productTypeRepo;
            _productBrandRepo = productBrandRepo;
            _mapper = mapper;
        }
        [HttpGet]
        public async Task<ActionResult<Pagination<IReadOnlyList<ProductReadDto>>>> Getall([FromQuery]ProductSpecParams productParams)
        {
            var spec = new ProductWitchTypesandBrandsSpecification(productParams);
            var speccount = new ProductCountSpecification(productParams);
            var products = await _productRepo.ListAsync(spec);
            var count = await _productRepo.CountAsync(speccount);
            var data = _mapper.Map<IReadOnlyList<Product>,IReadOnlyList<ProductReadDto>>(products);
            return Ok(new Pagination<IReadOnlyList<ProductReadDto>>(productParams.PageIndex,productParams.PageSize,count,data));
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<ProductReadDto>> GetId(int id)
        {
            if(!ModelState.IsValid) return BadRequest(new ApiResponse(400));
            var spec = new ProductWitchTypesandBrandsSpecification(id);
            var product = await _productRepo.GetEntityWithSpec(spec);
            if(product==null) return BadRequest(new ApiResponse(400));
            return Ok(_mapper.Map<Product,ProductReadDto>(product));
        }

        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<ProductBrand>>> GetBrands()
        {
            return Ok(await _productBrandRepo.ListAllAsync());
        }

        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<ProductType>>> GetTypes()
        {
            return Ok(await _productTypeRepo.ListAllAsync());
        }

    }
}