using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Core.Specifications
{
    public interface ISpecification<T>
    {
        Expression<Func<T,bool>> Criteria {get; }

        List<Expression<Func<T,Object>>> Includes {get;}

        Expression<Func<T,Object>> Orderby {get;}

        Expression<Func<T,Object>> OrderbyDesc {get; }

        int Take {get;}
        int Skip {get; }
        bool IsPaging {get;}
    }
}