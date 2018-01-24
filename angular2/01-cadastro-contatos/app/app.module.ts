/*
Toda aplicacao Angular deve ter um modulo principal, eh esse.
 */
//esse eh um arquivo com varios imports uteis da rxjs
import './util/rxjs-extensions' ;

//esse estilo de import, eh nativo do JavaScript puro, um arquivo JS pode conter várias "classes"
//declaradas, usamos esse {} para indicar qual delas queremos importar.
//assim importamos a classe para esse arquivo, mas pra importar no Angular, usamos os metadados
//na instrucao "import" dentro do @NgModule
//OU SEJA, USAMOS IMPORTS JAVASCRIPT E ANGULAR JUNTOS!
import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from "./app.component";
import { ContatosModule } from "./contatos/contatos.module";
import { AppRoutingModule } from "./app-routing.module";
import { DialogService } from "./dialog.service";
import { FormsModule } from "@angular/forms";

//essa anotacao informa ao angular q esse eh um modulo
/*Esse decorator chama uma funcao JS (por isso os parenteses) e recebe como parametro um objeto JS*/ 
@NgModule({
    //ISSO AQUI EH CHAMADO DE METADADOS
    //importamos os modulos necessarios a esse nosso modulo
    //os módulos por sua vez tem seus próprios componentes, mas para acessá-los, eles devem ser
    //expotados
    imports:[
        AppRoutingModule,
        BrowserModule,
        ContatosModule,    
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    declarations: [AppComponent],//isso indica quais sao os componentes desse modulo
    //indicamos qual o principal component da aplicacao, componente root, tipo a main function no Java
    //somente o modulo root deve ter essa propriedade, e para apenas um "component"
    bootstrap: [AppComponent],
    providers: [DialogService] //isso eh necessario para injecao de dependencia, 
    //todos os components desse modulo tem acesso a ele agr, e esta disponivel para toda a aplicacao
})
export class AppModule{

}