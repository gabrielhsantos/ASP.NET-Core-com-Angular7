# Angular7

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 7.3.1 e com
[ASP.NET Core](https://docs.microsoft.com/pt-br/aspnet/index?view=aspnetcore-2.2#pivot=core) versão 2.1.

## Development server

PASSOS:

1° Atualize seu [NodeJs](https://nodejs.org/en/); 

2° Instale o [Angular](https://cli.angular.io/) de forma global com `npm install -g @angular/cli`;

3° Pelo cmd, siga até o diretório Angular7 e digite `npm i` para instalar as dependências;

3° Dê um RUN no projeto pelo Visual Studio;

4° Ainda no diretório Angular7, digite `ng serve -o`;

5° Será Redirecionado automaticamente para `http://localhost:4200/`.

OBS: Caso esteja em uma versão menor que a 2.1 do ASP.NET Core, recorte o diretório
     Angular7 da solução e o utilize em outro local, ele irá funcionar normalmente.

## Code scaffolding

Execute  `ng generate component component-name` para gerar um novo componente. Você também pode usar o `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Execute `ng build` para dar um build no projeto. Os build artifacts serão armazenados no diretório `dist/`. 
Use a flag `--prod` para uma build de produção.

## Running unit tests

Execute `ng test` para executar testes unitários com [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Execute `ng e2e` para executar o teste end-to-end via [Protractor](http://www.protractortest.org/).

## Further help

Para mais ajuda com Angular CLI use `ng help` ou confira pelo site [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).