using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using milkWebAPIs.api.Models;

namespace milkWebAPIs.api.Data {
    public class MilkRepository : IMilkRepository {
        private readonly DataContext _context;

        public MilkRepository (DataContext context) {
            _context = context;

        }
        public void Add<T> (T entity) where T : class {
            _context.Add(entity);
        }

        public void Delete<T> (T entity) where T : class {
            _context.Remove(entity);
        }

        public async Task<User> GetUser (int id) {
            var user = await _context.Users.Include(p => p.Photos).FirstOrDefaultAsync(u => u.Id == id);
            return user;
             //Add a variable to store users in. Include photos to return as well. Photos are navigational properties. 
             //We have in our user class photos collection but that will not be automatically included because it is a navigation property and we will need to tell EF to include
             //passing id is used to extract first or default from the DB
            
        }

        public async Task<IEnumerable<User>> GetUsers () {
            var users = await _context.Users.Include(p => p.Photos).ToListAsync();
            return users;

        }

        public async Task<bool> SaveAll () {
            return await _context.SaveChangesAsync() > 0;
            
        }
    }
}