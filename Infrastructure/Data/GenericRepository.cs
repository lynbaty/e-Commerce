using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class GenericRepository<T> : IGenericRepository<T> where T : BaseEntity
    {
        private readonly ShopContext _context;
        public GenericRepository(ShopContext context)
        {
            _context = context;

        }

        public void Add(T Entity)
        {
            _context.Set<T>().Add(Entity);
        }

        public async Task<int> CountAsync(ISpecification<T> spec)
        {
             return await SpecificationEvaluator<T>.GetQuery(_context.Set<T>().AsQueryable(),spec).CountAsync();
        }

        public void Delete(T Entity)
        {
            _context.Set<T>().Remove(Entity);
        }

        public async Task<T> GetByIdAsync(int id)
        {
            return await _context.Set<T>()
                                 .FindAsync(id);
        }

        public async Task<T> GetEntityWithSpec(ISpecification<T> spec)
        {
            return await ApplySpecification(spec).FirstOrDefaultAsync();
        }

        public async Task<IReadOnlyList<T>> ListAllAsync()
        {
            return await _context.Set<T>()
                                 .ToListAsync();
        }

        public async Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec)
        {
            return await ApplySpecification(spec).ToListAsync();
        }

        public void Update(T Entity)
        {
           _context.Set<T>().Attach(Entity);
           _context.Entry(Entity).State = EntityState.Modified;
        }

        private IQueryable<T> ApplySpecification(ISpecification<T> spec)
        {
            return SpecificationEvaluator<T>.GetQuery(_context.Set<T>().AsQueryable(),spec);
        }
    }
}