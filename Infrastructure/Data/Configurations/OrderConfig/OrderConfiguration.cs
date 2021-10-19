
using System;
using Core.Entities.Order;
using Microsoft.EntityFrameworkCore;


namespace Infrastructure.Data.Configurations.OrderConfig
{
    public class OrderConfiguration : IEntityTypeConfiguration<Order>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<Order> builder)
        {
            builder.OwnsOne(o => o.ShipToAddress);
            builder.Property(s => s.Status).HasConversion(o => o.ToString(), o => (OrderStatus) Enum.Parse(typeof(OrderStatus),o));
            builder.HasMany(o => o.OrderItem).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}