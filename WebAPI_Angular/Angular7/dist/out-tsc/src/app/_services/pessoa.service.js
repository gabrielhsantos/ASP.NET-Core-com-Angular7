import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var PessoaService = /** @class */ (function () {
    function PessoaService(http) {
        this.http = http;
        this.baseURL = 'https://localhost:44383/api/Pessoas';
    }
    PessoaService.prototype.getAllPessoa = function () {
        return this.http.get(this.baseURL);
    };
    PessoaService.prototype.getPessoaById = function (id) {
        return this.http.get(this.baseURL + "/" + id);
    };
    PessoaService.prototype.getPessoaByNome = function (nome) {
        return this.http.get(this.baseURL + "/getByNome/" + nome);
    };
    PessoaService.prototype.postPessoa = function (pessoa) {
        return this.http.post(this.baseURL, pessoa);
    };
    PessoaService.prototype.putPessoa = function (pessoa) {
        return this.http.put(this.baseURL + "/" + pessoa.id, pessoa);
    };
    PessoaService.prototype.deletePessoa = function (id) {
        return this.http.delete(this.baseURL + "/" + id);
    };
    PessoaService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PessoaService);
    return PessoaService;
}());
export { PessoaService };
//# sourceMappingURL=pessoa.service.js.map