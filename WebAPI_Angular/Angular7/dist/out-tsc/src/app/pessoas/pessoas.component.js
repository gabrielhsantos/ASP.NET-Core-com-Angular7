import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { Validators, FormBuilder } from '@angular/forms';
import { PessoaService } from '../_services/pessoa.service';
var PessoasComponent = /** @class */ (function () {
    function PessoasComponent(pessoaService, modalService, fb) {
        this.pessoaService = pessoaService;
        this.modalService = modalService;
        this.fb = fb;
        this.baseURL = 'https://localhost:44383/api/Pessoas';
    }
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
    PessoasComponent.prototype.salvarAlteracao = function () {
    };
    PessoasComponent.prototype.ngOnInit = function () {
        this.validation();
        this.getPessoas();
    };
    PessoasComponent.prototype.getPessoas = function () {
        var _this = this;
        this.pessoaService.getAllPessoa().subscribe(function (_pessoas) {
            _this.pessoas = _pessoas;
            console.log(_pessoas);
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
            BsModalService,
            FormBuilder])
    ], PessoasComponent);
    return PessoasComponent;
}());
export { PessoasComponent };
//# sourceMappingURL=pessoas.component.js.map