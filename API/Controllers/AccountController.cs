using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using API.Dtos.Account;
using API.Errors;
using API.Extensions;
using AutoMapper;
using Core.Entities.Identity;
using Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly IMapper _mapper;
        private readonly ITokenService _tokenService;
        public AccountController(UserManager<AppUser> userManager, 
                                SignInManager<AppUser> signInManager,
                                IMapper mapper,
                                ITokenService tokenService)
        {
            _tokenService = tokenService;
            _userManager = userManager;
            _signInManager = signInManager;
            _mapper = mapper;
        }
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<UserDto>> GetUser(){
            var email = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email).Value;

            var user =await _userManager.FindByEmailAsync(email);
            return new UserDto()
            {
                UserName = user.UserName,
                Email = user.Email,
                Token = _tokenService.CreateToken(user)
            };
        }
        [HttpGet("emailexist")]
        public async Task<ActionResult<bool>> EmailExist([FromQuery]string email){
            return await _userManager.FindByEmailAsync(email) != null;
        }
        [Authorize]
        [HttpPut("address")]
        public async Task<ActionResult<AddressDto>> EditAddress(AddressDto newAddress){
            var claim = HttpContext.User;

            var user =await _userManager.GetAddressByEmailAsync(claim);
            user.Address = _mapper.Map<AddressDto,Address>(newAddress);
            var result = await _userManager.UpdateAsync(user);
            if(result.Succeeded) 
                    return Ok(_mapper.Map<Address,AddressDto>(user.Address));
            return BadRequest(new ApiResponse(400));
        }

        [Authorize]
        [HttpGet("address")]
        public async Task<ActionResult<AddressDto>> GetAddress(){
            var claim = HttpContext.User;

            var user =await _userManager.GetAddressByEmailAsync(claim);
            return _mapper.Map<Address,AddressDto>(user.Address);
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);

            if (user == null) return Unauthorized(new ApiResponse(401));
            var result = await _signInManager.PasswordSignInAsync(user, loginDto.Password, loginDto.Remember, false);
            if (!result.Succeeded) return Unauthorized(new ApiResponse(401));

            return new UserDto()
            {
                UserName = user.UserName,
                Email = user.Email,
                Token = _tokenService.CreateToken(user)
            };
        }
        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            var check =await EmailExist(registerDto.Email);
            if(check.Value){
                ModelState.AddModelError("","Email has used, you must use another email!");
                return BadRequest(new ApiResponse(400,"trung email"));
            }
            var user = new AppUser()
            {
                UserName = registerDto.UserName,
                Email = registerDto.Email
            };
            var result = await _userManager.CreateAsync(user, registerDto.Password);
            if (!result.Succeeded) return BadRequest(new ApiResponse(400));

            return new UserDto()
            {
                UserName = registerDto.UserName,
                Email = registerDto.Email,
                Token = _tokenService.CreateToken(user)
            };
        }
    }
}