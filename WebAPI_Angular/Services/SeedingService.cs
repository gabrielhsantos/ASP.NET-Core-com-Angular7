using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI_Angular.Data;
using WebAPI_Angular.Models;

namespace WebAPI_Angular.Services
{
    public class SeedingService
    {
        private readonly WebApiContext _context;

        public SeedingService(WebApiContext context)
        {
            _context = context;
        }

        public void Seed()
        {
            if (_context.Pessoas.Any())
            {
                return;
            }

            Pessoa p1 = new Pessoa() { Nome = "Thomas", Email = "thomas@gmail.com", Telefone = "94444-4444" };
            Pessoa p2 = new Pessoa() { Nome = "Ana", Email = "ana@gmail.com", Telefone = "95555-4444" };
            Pessoa p3 = new Pessoa() { Nome = "Gabriel", Email = "gabriel@gmail.com", Telefone = "96666-4444" };

            _context.AddRange(p1, p2, p3);
            _context.SaveChanges();
        }
    }
}
