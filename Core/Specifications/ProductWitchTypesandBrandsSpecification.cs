using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Specifications
{
    public class ProductWitchTypesandBrandsSpecification : BaseSpecification<Product>
    {
        public ProductWitchTypesandBrandsSpecification(ProductSpecParams productSpecParams) : base(x => 
        (string.IsNullOrEmpty(productSpecParams.Search) || x.Name.ToLower().Contains(productSpecParams.Search))
         &&(!productSpecParams.BrandId.HasValue || x.ProductBrandId == productSpecParams.BrandId) 
         && (!productSpecParams.TypeId.HasValue || x.ProductTypeId == productSpecParams.TypeId)) 
        {
            Includes.Add(p => p.ProductType);
            Includes.Add(p => p.ProductBrand);
            AddPaging(productSpecParams._pageSize,(productSpecParams.PageIndex-1)*productSpecParams.PageSize);
            if(!string.IsNullOrEmpty(productSpecParams.Sort)){
                switch (productSpecParams.Sort)
                {
                    case "price": 
                        AddOrderby(p => p.Price);
                        break;
                    case "priceDesc": 
                        AddOrderbyDesc(p => p.Price);
                        break;
                    case "name": 
                        AddOrderby(p => p.Name);
                        break;
                    case "nameDesc": 
                        AddOrderbyDesc(p => p.Name);
                        break;
                    default: break;
                }
            }
        }
        public ProductWitchTypesandBrandsSpecification(int id) : base(x => x.Id == id)
        {
             Includes.Add(p => p.ProductType);
            Includes.Add(p => p.ProductBrand);
        }
    }
}