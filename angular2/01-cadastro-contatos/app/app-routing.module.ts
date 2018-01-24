/*
Essa classe é quem gerencia as rotas do Angular, podemos criar rotas para cada modulo
aqui são definidas as rotas partindo da raiz, e para cada módulo criado, criamos novas classes de rotas
*/

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
    //aqui temos a definicao de um objeto do tipo Route
    {
        path: '', //URL raiz
        redirectTo: '/contato', //redireciona pra essa aqui
        pathMatch: 'full',
    }
];

@NgModule({
    imports:[
        //precisamos importar esse módulo
        //passamos nosso conjunto de rotas para esse outro módulo
        RouterModule.forRoot(appRoutes) 
        //o root indica que essa é a classe de rotas principal
        //as outras classes de rotas dos outros módulos usam o forChild, indicando 
        //é filho dessas rotas definidas aqui
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}