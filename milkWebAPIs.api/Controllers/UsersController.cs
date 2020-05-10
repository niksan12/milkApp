using milkWebAPIs.api.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using AutoMapper;
using milkWebAPIs.api.Dtos;
using System.Collections.Generic;

namespace milkWebAPIs.api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IMilkRepository _repo;
        private readonly IMapper _mapper;
        public UsersController(IMilkRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;

        }
        //[AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repo.GetUsers();
            var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);
            return Ok(usersToReturn);

        }
        //[AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);
            var userToReturn = _mapper.Map<UserForDetailedDto>(user); //Destination and then source (user)
            return Ok(userToReturn);

        }


    }
}