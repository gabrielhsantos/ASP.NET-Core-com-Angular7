using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI_Angular.Models;
using WebAPI_Angular.Services;

namespace WebAPI_Angular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PessoasController : ControllerBase
    {
        private readonly PessoaService _pessoaService;

        public PessoasController(PessoaService pessoaService)
        {
            _pessoaService = pessoaService;
        }       

        [HttpGet]
        public IActionResult Get()
        {
            var list = _pessoaService.FindAll();
            return Ok(list);
        }

        [HttpGet("{id}", Name = "PessoaCriada")]
        public IActionResult Get(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var person = _pessoaService.FindById(id.Value);
            if (person == null)
            {
                return NotFound();
            }

            return Ok(person);
        }

        [HttpGet("getByNome/{nome}")]
        public IActionResult Get(string nome)
        {

            var person = _pessoaService.FindByNome(nome);

            return Ok(person);

        }

        [HttpPost]
        public IActionResult Post([FromBody] Pessoa pessoa)
        {
            if (ModelState.IsValid)
            {
                _pessoaService.Insert(pessoa);
                return new CreatedAtRouteResult("PessoaCriada", new { id = pessoa.Id }, pessoa);
            }

            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult Put([FromBody] Pessoa pessoa, int id)
        {
            if (id != pessoa.Id)
            {
                return BadRequest();
            }
            try
            {
                _pessoaService.Update(pessoa);
                return Ok();
            }
            catch (ApplicationException e)
            {
                throw new ApplicationException(e.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _pessoaService.Remove(id);
                return Ok();
            }
            catch (ApplicationException e)
            {
                throw new ApplicationException(e.Message);
            }
        }
    }
}