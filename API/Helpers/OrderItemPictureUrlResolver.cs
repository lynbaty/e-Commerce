using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.Order;
using AutoMapper;
using Core.Entities.Order;
using Microsoft.Extensions.Configuration;

namespace API.Helpers
{
    public class OrderItemPictureUrlResolver : IValueResolver<OrderItem, OrderItemDto, string>
    {
         private readonly IConfiguration _config;
        public OrderItemPictureUrlResolver(IConfiguration config)
        {
            _config = config;

        }

        public string Resolve(OrderItem source, OrderItemDto destination, string destMember, ResolutionContext context)
        {
            if(!string.IsNullOrEmpty(source.ItemOrdered.PictureUrl))
            {
                return _config["ApiUrl"] + source.ItemOrdered.PictureUrl;
            }
            else return null;
        }
    }
}