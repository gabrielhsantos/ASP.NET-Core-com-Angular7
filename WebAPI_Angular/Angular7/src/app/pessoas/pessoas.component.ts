import { Component, OnInit, TemplateRef } from '@angular/core';
import { Pessoa } from '../_models/Pessoa';
import { BsModalService } from 'ngx-bootstrap';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { template } from '@angular/core/src/render3';
import { PessoaService } from '../_services/pessoa.service';
import { concat } from 'rxjs';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styles: []
})
export class PessoasComponent implements OnInit {
  pessoasFiltradas: Pessoa[];
  pessoa: Pessoa;
  pessoas: Pessoa[];

  registerForm: FormGroup;
  modoSalvar = 'post';
  bodyDeletarPessoa = '';

  _filtroLista = '';

  get filtroLista(): string {
    return this._filtroLista;
  }

  set filtroLista(value: string) {
    this._filtroLista = value;
    this.pessoasFiltradas = this.filtroLista ? this.filtrarPessoas(this.filtroLista) : this.pessoas;
  }

  filtrarPessoas(filtrarPor: string): Pessoa[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.pessoas.filter(
      pessoa => pessoa.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  openModal(template: any) {
    this.registerForm.reset();
    template.show();
  }

  validation() {
    this.registerForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.maxLength(16)]]
    });
  }

  constructor(
    private pessoaService: PessoaService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.validation();
    this.getPessoas();
  }

  getPessoas() {
    this.pessoaService.getAllPessoa().subscribe(
      (_pessoas: Pessoa[]) => {
        this.pessoas = _pessoas;
        console.log(_pessoas);
      }, error => {
        console.log(error);
      });
  }

  novaPessoa(template: any) {
    this.modoSalvar = 'post';
    this.openModal(template);
  }

  editarPessoa(pessoa: Pessoa, template: any) {
    this.modoSalvar = 'put';
    this.openModal(template);
    this.pessoa = pessoa;
    this.registerForm.patchValue(pessoa);
  }

  salvarAlteracao(template: any) {
    if (this.registerForm.valid) {
      if (this.modoSalvar === 'post') {
        this.pessoa = Object.assign({}, this.registerForm.value);
        this.pessoaService.postPessoa(this.pessoa).subscribe(
          (novaPessoa: Pessoa) => {
            console.log(novaPessoa);
            template.hide();
            this.getPessoas();
          }, error => {
            console.log(error);
          });
      } else {
        this.pessoa = Object.assign({ id: this.pessoa.id }, this.registerForm.value);
        this.pessoaService.putPessoa(this.pessoa).subscribe(
          (novaPessoa: Pessoa) => {
            console.log(novaPessoa);
            template.hide();
            this.getPessoas();
          }, error => {
            console.log(error);
          });
      }
    }
  }

  excluirPessoa(pessoa: Pessoa, template: any) {
    this.openModal(template);
    this.pessoa = pessoa;
    this.bodyDeletarPessoa = `ID: ${pessoa.id} - ${pessoa.nome}`;
  }

  confirmeDelete(template: any) {
    this.pessoaService.deletePessoa(this.pessoa.id).subscribe(
      () => {
        template.hide();
        this.getPessoas();
      }, error => {
        console.log(error);
      }
    );
  }
}

