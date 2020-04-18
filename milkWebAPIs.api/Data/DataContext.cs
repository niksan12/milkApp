using Microsoft.EntityFrameworkCore;
using milkWebAPIs.api.Models;

namespace milkWebAPIs.api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}
        public DbSet<Value> Values {get;set;}

    }
}