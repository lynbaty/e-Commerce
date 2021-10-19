using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.Order;
using AutoMapper;
using Core.Entities.Order;

namespace API.Helpers
{
    public class OrderItemResolver : IValueResolver<Order, OrdertoReturnDto, List<OrderItemDto>>
    {
        private readonly IMapper _mapper;
        public OrderItemResolver(IMapper mapper)
        {
            _mapper = mapper;

        }
        public List<OrderItemDto> Resolve(Order source, OrdertoReturnDto destination, List<OrderItemDto> destMember, ResolutionContext context)
        {
            return _mapper.Map<List<OrderItem>,List<OrderItemDto>>(source.OrderItem);
            
        }
    }
}