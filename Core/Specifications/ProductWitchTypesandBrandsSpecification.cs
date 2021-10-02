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
        public ProductWitchTypesandBrandsSpecification()
        {
            Includes.Add(p => p.ProductType);
            Includes.Add(p => p.ProductBrand);
        }

        public ProductWitchTypesandBrandsSpecification(int id) : base(x => x.Id == id)
        {
             Includes.Add(p => p.ProductType);
            Includes.Add(p => p.ProductBrand);
        }
    }
}