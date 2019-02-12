import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule, BsDropdownModule, ModalModule } from 'ngx-bootstrap';
import { PessoaService } from './_services/pessoa.service';
import { AppComponent } from './app.component';
import { PessoasComponent } from './pessoas/pessoas.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                PessoasComponent
            ],
            imports: [
                BrowserModule,
                BsDropdownModule.forRoot(),
                TooltipModule.forRoot(),
                ModalModule.forRoot(),
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule
            ],
            providers: [
                PessoaService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map