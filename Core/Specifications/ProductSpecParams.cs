using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Specifications
{
    public class ProductSpecParams
    {
        private const int MaxSize = 50;

        public int PageIndex {set; get;} = 1;

        public int _pageSize = 50;

        public int PageSize {
            get => _pageSize;
            set => _pageSize = (value > MaxSize) ? MaxSize : value;
        }
        public int? BrandId {set; get;}
        public int? TypeId {set; get;}

        public string Sort {set; get;}

        public string _search;

        public string Search {
        set => _search = value.ToLower(); 
        get => _search ;}
    }
}