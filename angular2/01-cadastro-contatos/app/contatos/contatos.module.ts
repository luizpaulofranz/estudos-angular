import { NgModule } from '@angular/core';
//esse eh o modulo nativo que oferece as diretivas pro html, como o ngFor por exemplo
import { CommonModule } from '@angular/common';
//para usarmos no 2 way data binding no formulario
import { FormsModule } from '@angular/forms';

import { ContatoBuscaComponent } from "./contato-busca.component";
import { ContatosListaComponent } from "./contatos-lista.component";
import { ContatosRoutingModule } from "./contatos-routing.module";
import { ContatoDetalheComponent } from "./contato-detalhe.component";
import { ContatoService } from "./contato.service";

@NgModule({
    //devemos informar quais modulos externos vamos usar nesse modulo
    imports:[
        //esse eh o modulo que oferce as diretivas pro html
        //devemos importar os modulos do proprio angular como esse
        CommonModule,
        ContatosRoutingModule,
        FormsModule //para usar o ngModule
    ],
    declarations:[
        //esse modulo declara esses component, ou seja, usa esses components
        ContatoBuscaComponent,
        ContatosListaComponent,
        ContatoDetalheComponent,
    ],
    exports:[
        ContatosListaComponent,//e exporta esse component para que outros modulos possa usar
        ContatoBuscaComponent
    ],
    providers:[ 
        //assim que injetamos nossos serviços nesse módulo, assim todos os components da aplicacao tem acesso a esse serviço
        //ContatosService deve ter o @Injectable        
        ContatoService
    ]
})

//declaramos a classe enfim
export class ContatosModule{}