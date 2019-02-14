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

            Pessoa p1 = new Pessoa() { Nome = "Thomas", Email = "Thomas@gmail.com", Telefone = "94444-4444" };
            Pessoa p2 = new Pessoa() { Nome = "Ana", Email = "Ana@gmail.com", Telefone = "95555-4444" };
            Pessoa p3 = new Pessoa() { Nome = "Gabriel", Email = "Gabriel@gmail.com", Telefone = "96666-4444" };
            Pessoa p4 = new Pessoa() { Nome = "Helena", Email = "Helena@gmail.com", Telefone = "97777-4444" };
            Pessoa p5 = new Pessoa() { Nome = "João", Email = "João@gmail.com", Telefone = "98888-4444" };
            Pessoa p6 = new Pessoa() { Nome = "Maria", Email = "Maria@gmail.com", Telefone = "99999-4444" };
            Pessoa p7 = new Pessoa() { Nome = "Pedro", Email = "Pedro@gmail.com", Telefone = "99999-5555" };
            Pessoa p8 = new Pessoa() { Nome = "José", Email = "Jose@gmail.com", Telefone = "96666-4465" };
            Pessoa p9 = new Pessoa() { Nome = "Manoel", Email = "Manoel@gmail.com", Telefone = "96666-4444" };
            Pessoa p10 = new Pessoa() { Nome = "Carlos", Email = "Carlos@gmail.com", Telefone = "96666-4014" };
            Pessoa p11 = new Pessoa() { Nome = "Marcos", Email = "Marcos@gmail.com", Telefone = "96666-4104" };
            Pessoa p12 = new Pessoa() { Nome = "Maria", Email = "Maria@gmail.com", Telefone = "96666-4432" };
            Pessoa p13 = new Pessoa() { Nome = "Daniela", Email = "Daniela@gmail.com", Telefone = "96666-4784" };
            Pessoa p14 = new Pessoa() { Nome = "Rafael", Email = "Rafael@gmail.com", Telefone = "96666-4491" };
            Pessoa p15 = new Pessoa() { Nome = "Mateus", Email = "Mateus@gmail.com", Telefone = "96666-4400" };

            _context.AddRange(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15);
            _context.SaveChanges();
        }
    }
}
