using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IResponseCacheService
    {
        Task ResponseCacheAsync(string cacheKey,object Obj,TimeSpan timeToLive);
        
        Task<string> GetResponseCacheAsync(string cacheKey);
    }
}