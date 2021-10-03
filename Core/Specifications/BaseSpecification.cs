using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Core.Specifications
{
    public class BaseSpecification<T> : ISpecification<T>
    {
        public BaseSpecification(Expression<Func<T, bool>> criteria)
        {
            Criteria = criteria;
        }

        public BaseSpecification()
        {

        }

        public Expression<Func<T, bool>> Criteria { get; }

        public List<Expression<Func<T, object>>> Includes { get; } = new List<Expression<Func<T, object>>>();
        public Expression<Func<T, object>> Orderby { get; private set; }
        public Expression<Func<T, object>> OrderbyDesc { get; private set; }
        public Expression<Func<T, bool>> Filter { get; private set; }

        public int Take { get; private set; }

        public int Skip { get; private set; }

        public bool IsPaging { get; private set; }

        protected void AddInclude(Expression<Func<T, object>> includeExpression)
        {
            Includes.Add(includeExpression);
        }
        protected void AddOrderby(Expression<Func<T, object>> OrderbyExpression)
        {
            Orderby = OrderbyExpression;
        }
        protected void AddOrderbyDesc(Expression<Func<T, object>> OrderbyDescExpression)
        {
            OrderbyDesc = OrderbyDescExpression;
        }
        protected void AddPaging(int take, int skip){
            Take = take;
            Skip = skip;
            IsPaging = true;
        }
    }
}
