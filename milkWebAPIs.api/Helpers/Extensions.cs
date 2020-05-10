using System;
using Microsoft.AspNetCore.Http;

namespace milkWebAPIs.api.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message){
            
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Access-Control-Expose-Headers","Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            

        }

        //every day of the year has got a value, an extra check is required to see if the current Day is less than the day the person was born in, 
        //for example, if today is 15th of March and the person was born 1st of March, you have to subtract an extra year
        public static int CalculateAge(this DateTime theDateTime){
            var age = DateTime.Today.Year - theDateTime.Year;
            if (theDateTime.AddYears(age) > DateTime.Today)
            age--;
            return age;
        }
        
    }
}