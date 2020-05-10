using System.Collections.Generic;
using System.Threading.Tasks;
using milkWebAPIs.api.Models;

namespace milkWebAPIs.api.Data
{
    public interface IMilkRepository
    {
        void Add<T>(T entity) where T: class; //Generic method - Add type of T, user or photo, takes entity as a parameter, constraint limited to the class. So instead of creating two methods one for photo and other for user, we can specify a type and save that resource to the DB(Entity)
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll(); //More than one save returns true if not returns false
        Task<IEnumerable<User>> GetUsers(); //All Users
        Task<User> GetUser(int id); //Individual users
        

        
        
         
    }
}