using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Helpers
{
    public class Pagination<T>
    {
        public Pagination(int pageIndex, int pageSize, int count,T data)
        {
            PageIndex = pageIndex;
            PageSize = pageSize;
            Count = count;
            Data = data;
        }

        public int PageIndex { get; set; }
        public int PageSize {set; get;}
        public int Count {set; get;}
        public T Data{set; get;}
    }
}