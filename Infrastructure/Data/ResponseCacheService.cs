using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Interfaces;
using StackExchange.Redis;

namespace Infrastructure.Data
{
    public class ResponseCacheService : IResponseCacheService
    {
        private readonly IDatabase _database;
        public ResponseCacheService(IConnectionMultiplexer redis)
        {
            _database = redis.GetDatabase();
        }

        public async Task<string> GetResponseCacheAsync(string cacheKey)
        {
            return await _database.StringGetAsync(cacheKey);
        }

        public async Task ResponseCacheAsync(string cacheKey, object obj, TimeSpan timeToLive)
        {
            var objJson = JsonSerializer.Serialize(obj);
            await _database.StringSetAsync(cacheKey,objJson,timeToLive);
        }
    }
}