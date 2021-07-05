using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Model
{
    public class User
    {
        [Key]
        public string username { get; set; }
        public string password { get; set; }
        public string role { get; set; }

    }
}
