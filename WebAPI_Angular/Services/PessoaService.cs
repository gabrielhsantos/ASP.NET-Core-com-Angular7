using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI_Angular.Data;
using WebAPI_Angular.Models;

namespace WebAPI_Angular.Services
{
    public class PessoaService
    {
        private readonly WebApiContext _context;

        public PessoaService(WebApiContext context)
        {
            _context = context;
        }

        public List<Pessoa> FindAll()
        {
            return _context.Pessoas.ToList();
        }

        public void Insert(Pessoa pessoa)
        {
            _context.Pessoas.Add(pessoa);
            _context.SaveChanges();
        }

        public Pessoa FindById(int id)
        {
           return _context.Pessoas.FirstOrDefault(p => p.Id == id);            
        }

        public Pessoa[] FindByNome(string nome)
        {
            return _context.Pessoas.AsNoTracking().Where(p => p.Nome.ToLower().Contains(nome.ToLower())).ToArray();
        }

        public void Update(Pessoa pessoa)
        {
            bool hasAny = _context.Pessoas.Any(p => p.Id == pessoa.Id);
            if (!hasAny)
            {
                throw new KeyNotFoundException();
            }
            try
            {
                _context.Entry(pessoa).State = EntityState.Modified;
                _context.SaveChanges();
            }
            catch (ApplicationException e)
            {
                throw new ApplicationException(e.Message);
            }
        }

        public void Remove(int id)
        {
            try
            {
                var person = _context.Pessoas.Find(id);
                _context.Pessoas.Remove(person);
                _context.SaveChanges();
            }
            catch (ApplicationException e)
            {
                throw new ApplicationException(e.Message);
            }
        }

    }
}
