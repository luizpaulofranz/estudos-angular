import { Component, OnInit } from "@angular/core";
import { ContatoService } from "./contato.service";
import { ActivatedRoute, Params } from "@angular/router";
import {Location} from "@angular/common";
import { Contato } from "./contato.model";

@Component({
    moduleId:module.id,
    selector:'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html',
    styles: [`
        .ng-valid[required]{
            border: 1px solid green;
        }
        /*dirty eh quando o campo ja foi visitado*/
        .ng-dirty.ng-invalid:not(form){
            border: 1px solid red;
        }
    `]
})

//implementamos o método de callback OnInit nesse component
export class ContatoDetalheComponent implements OnInit{

    //quando nao temos um provider, nao vai no construtor
    contato:Contato
    //variavel que trata se é um novo contato ou edição de um existente
    private isNew = true;

    //o Angular faz a injeção de dependências aqui, simples assim, so declarando no construtor,
    //para isso, os injetados devem estar declarados nos providers do seu component
    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location,
    ){}

    ngOnInit(): void {
        //apenas inicializamos um contato para exibirmos na View
        //depois seu valor sera substituido 
        this.contato = new Contato('','','');
        //assim percorremos todos os parametros da URL (rota)
        this.route.params.forEach((params:Params) => {
            //o "id" eh definido lá nas rotas, o "+" é para fazer ficar um inteiro
            let id:number = +params['id'];
            
            if(id){
                this.isNew = false;
            //agora chamamos nosso service para recuperar o objeto a partir do id
            this.contatoService.find(id)
                //retorna um promisse
                .then((contato:Contato) => {
                    this.contato = contato;
                })
            }
        })
    
    }

    /* Método para validação dos campos
     */
    getFormGroupCssClass(isValid:boolean, isPristine:boolean):{}{
        return {
            'form-group':true,
            'has-danger':!isValid && !isPristine,
            'has-success':isValid && !isPristine
        };
    }

    getForminputCssClass(isValid:boolean, isPristine:boolean):{}{
        return {
            'form-control':true,
            'form-control-danger':!isValid && !isPristine,
            'form-control-success':isValid && !isPristine
        };
    }

    /* Metodo que vai tratar o submit do form contato-detalhe-component.html*/
    onSubmit():void{
        let promise;

        if(this.isNew){
            promise = this.contatoService.create(this.contato);
            console.log("Cadastrar");
        }else{
            console.log("Alterar");
            promise = this.contatoService.update(this.contato);
        }

        //essa arrow function é o mesmo que
        //function(contato){return this.location.back()}
        promise.then((contato) => this.goBack());
    }

    //metodo responsavel por fazer o voltar
    goBack():void {
        this.location.back();
    }

}