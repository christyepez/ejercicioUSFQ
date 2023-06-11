using backendUSFQ.Entity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backendUSFQ.Domain.Interfaces
{
    public interface IUser
    {

        Task<string> Register(EUser user, string password);
        Task<string> Login(string userName, string password);
        Task<bool> UserExiste(string username);
    }
}
