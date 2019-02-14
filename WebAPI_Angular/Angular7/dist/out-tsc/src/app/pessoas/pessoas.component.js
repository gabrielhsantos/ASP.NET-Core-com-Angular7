import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { PessoaService } from '../_services/pessoa.service';
var PessoasComponent = /** @class */ (function () {
    function PessoasComponent(pessoaService, fb) {
        this.pessoaService = pessoaService;
        this.fb = fb;
        this.modoSalvar = 'post';
        this.bodyDeletarPessoa = '';
        this._filtroLista = '';
    }
    Object.defineProperty(PessoasComponent.prototype, "filtroLista", {
        get: function () {
            return this._filtroLista;
        },
        set: function (value) {
            this._filtroLista = value;
            this.pessoasFiltradas = this.filtroLista ? this.filtrarPessoas(this.filtroLista) : this.pessoas;
        },
        enumerable: true,
        configurable: true
    });
    PessoasComponent.prototype.filtrarPessoas = function (filtrarPor) {
        filtrarPor = filtrarPor.toLocaleLowerCase();
        return this.pessoas.filter(function (pessoa) { return pessoa.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1; });
    };
    PessoasComponent.prototype.openModal = function (template) {
        this.registerForm.reset();
        template.show();
    };
    PessoasComponent.prototype.validation = function () {
        this.registerForm = this.fb.group({
            nome: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
            email: ['', [Validators.required, Validators.email]],
            telefone: ['', [Validators.required, Validators.maxLength(16)]]
        });
    };
    PessoasComponent.prototype.ngOnInit = function () {
        this.validation();
        this.getPessoas();
    };
    PessoasComponent.prototype.getPessoas = function () {
        var _this = this;
        this.pessoaService.getAllPessoa().subscribe(function (_pessoas) {
            _this.pessoas = _pessoas;
            _this.pessoasFiltradas = _pessoas;
            console.log(_pessoas);
        }, function (error) {
            console.log(error);
        });
    };
    PessoasComponent.prototype.novaPessoa = function (template) {
        this.modoSalvar = 'post';
        this.openModal(template);
    };
    PessoasComponent.prototype.editarPessoa = function (pessoa, template) {
        this.modoSalvar = 'put';
        this.openModal(template);
        this.pessoa = pessoa;
        this.registerForm.patchValue(pessoa);
    };
    PessoasComponent.prototype.salvarAlteracao = function (template) {
        var _this = this;
        if (this.registerForm.valid) {
            if (this.modoSalvar === 'post') {
                this.pessoa = Object.assign({}, this.registerForm.value);
                this.pessoaService.postPessoa(this.pessoa).subscribe(function (novaPessoa) {
                    console.log(novaPessoa);
                    template.hide();
                    _this.getPessoas();
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                this.pessoa = Object.assign({ id: this.pessoa.id }, this.registerForm.value);
                this.pessoaService.putPessoa(this.pessoa).subscribe(function (novaPessoa) {
                    console.log(novaPessoa);
                    template.hide();
                    _this.getPessoas();
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    PessoasComponent.prototype.excluirPessoa = function (pessoa, template) {
        this.openModal(template);
        this.pessoa = pessoa;
        this.bodyDeletarPessoa = "ID: " + pessoa.id + " - " + pessoa.nome;
    };
    PessoasComponent.prototype.confirmeDelete = function (template) {
        var _this = this;
        this.pessoaService.deletePessoa(this.pessoa.id).subscribe(function () {
            template.hide();
            _this.getPessoas();
        }, function (error) {
            console.log(error);
        });
    };
    PessoasComponent = tslib_1.__decorate([
        Component({
            selector: 'app-pessoas',
            templateUrl: './pessoas.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [PessoaService,
            FormBuilder])
    ], PessoasComponent);
    return PessoasComponent;
}());
export { PessoasComponent };
//# sourceMappingURL=pessoas.component.js.map