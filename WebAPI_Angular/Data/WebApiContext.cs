using Microsoft.EntityFrameworkCore;
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
