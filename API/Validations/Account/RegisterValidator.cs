using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.Account;
using FluentValidation;

namespace API.Validations.Account
{
    public class RegisterValidator : AbstractValidator<RegisterDto>
    {
        public RegisterValidator()
        {
            RuleFor(x => x.UserName).NotNull().WithMessage("Not null field")
                                    .MinimumLength(6).WithMessage("UserName must be greater 6 charater");
        }
    }
}