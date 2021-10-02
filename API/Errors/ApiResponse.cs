using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string messenger = null)
        {
            StatusCode = statusCode;
            Messenger = messenger ?? DefaultMessengerForStatus(statusCode);
        }

        public int StatusCode { get; set; }
        public string Messenger { get; set; }
        private string DefaultMessengerForStatus(int statusCode)
        {
            return statusCode switch
            {
                400 => "Not found page you want",
                401 => "You must authentication",
                500 => "Server is error by Client",
                404 => "Bad request, so regret",
                _ => null
            };
        }

    }
}