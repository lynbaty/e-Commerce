using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Specifications
{
    public class ProductCountSpecification : BaseSpecification<Product>
    {
        public ProductCountSpecification(ProductSpecParams productSpecParams) : base(x => 
        (string.IsNullOrEmpty(productSpecParams.Search) || x.Name.ToLower().Contains(productSpecParams.Search))
         &&(!productSpecParams.BrandId.HasValue || x.ProductBrandId == productSpecParams.BrandId) 
         && (!productSpecParams.TypeId.HasValue || x.ProductTypeId == productSpecParams.TypeId)) 
        {
            
        }
    }
}