using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI_Angular.Models;

namespace WebAPI_Angular.Data
{
    public class WebApiContext : DbContext
    {
        public WebApiContext(DbContextOptions<WebApiContext>options): base(options)
        {
        }

        public DbSet<Pessoa> Pessoas { get; set; }
    }
}
