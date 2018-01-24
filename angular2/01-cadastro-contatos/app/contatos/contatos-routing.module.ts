/*
 Esse módulo de roteamento deve ser importado no módulo de Contatos.
 */ 


import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContatosListaComponent } from "./contatos-lista.component";
import { ContatoDetalheComponent } from "./contato-detalhe.component";

const contatoRoutes: Routes = [
    //aqui temos a definicao de um objeto do tipo Route
    {
        path: 'contato', //URL raiz
        component: ContatosListaComponent, //qual o componente que será renderizado quando essa URL for chamada
    },
    {
        path: 'contato/save',
        component: ContatoDetalheComponent,//esse componente é rederizado na tag <router-outlet>
    },
    {
        path: 'contato/save/:id', //:id eh o nome do nosso parametro, poderia ser abacaxi
        component: ContatoDetalheComponent
    }
];


@NgModule({
    imports:[
        RouterModule.forChild(contatoRoutes)
    ],
    exports: [RouterModule]
})

export class ContatosRoutingModule{}