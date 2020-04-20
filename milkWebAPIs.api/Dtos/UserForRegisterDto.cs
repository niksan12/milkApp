using System.ComponentModel.DataAnnotations;

namespace milkWebAPIs.api.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }



        [Required]
        [StringLength(9, MinimumLength = 4, ErrorMessage ="You must specified password between 4 and 9 characters")]
        public string Password { get; set; }
    }
}