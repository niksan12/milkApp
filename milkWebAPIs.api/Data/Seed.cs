using System.Collections.Generic;
using System.Linq;
using milkWebAPIs.api.Models;
using Newtonsoft.Json;

namespace milkWebAPIs.api.Data
{
    public class Seed
    {
        public static void SeedUsers(DataContext context){
            if (!context.Users.Any()){
                var userData = System.IO.File.ReadAllText("Data/UserSeedData.json");
                var users = JsonConvert.DeserializeObject<List<User>>(userData); //take the data inside userdata and convert into user objects to loop through
                //Now you have the list of users that you can loop through
                foreach(var user in users){
                    byte[] passwordHash, passwordSalt;
                    CreatePasswordHash("password", out passwordHash, out passwordSalt); //out operator for passign the arguments to methods as a reference type
                    user.PasswordHash = passwordHash;
                    user.PasswordSalt = passwordSalt;
                    user.Username = user.Username.ToLower();
                    context.Users.Add(user);
                }
                context.SaveChanges();
                       

            }
        }

         private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
            
        }
    }
}