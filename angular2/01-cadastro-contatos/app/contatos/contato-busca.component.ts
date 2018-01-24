import { Component, EventEmitter, Input, OnInit, OnChanges, Output, SimpleChanges, SimpleChange  } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

import { Contato } from "./contato.model";
import { ContatoService } from "./contato.service";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: 'contato-busca.component.html',
    styles:[`
        .cursor-pointer:hover {
            cursor: pointer
        }
    `]
})

//OnChanges eh para lidar com o @Input, implementa o "Event Binding"
export class ContatoBuscaComponent implements OnInit, OnChanges {
    //o Input permite transferirmos dados entre components, esse 
    //esta sendo usado no app.component.html
    @Input() public busca:string;
    //o output emite um evento para fora do nosso component
    //o nome com "change" eh um padrao recomendado para codificar um two way data binding
    //nesse caso, o "buscaChange" esta relacionado ao "busca"
    @Output() buscaChange:EventEmitter<string> = new EventEmitter<string>();
    public contatos: Observable<Contato[]>;
    //subject tem a ver com o padrao de projeto observer
    private termosBusca: Subject<string> = new Subject<string>();

    //assim eh a injecao de dependencia
    constructor(
        private contatoService: ContatoService,
        private router: Router 
    ) { }

    /*Aqui é feita a linkagem entre o array de contatos (observable) e o subject
    os subjects controlam as requisicoes ao servidor, e possuem metodos para
    controlar as requisicoes, para cancelar as requisicoes, mantendo apenas uma, ex:
    no caso da busca, quando o usuario digita um tecla, a busca ja eh inicializada no
    servidor, porém se ele digitar outra, uma nova busca, contendo as duas teclas, é
    inicializada, os subjects controlam isso, cancelando as requisicoes anteriores,
    e mantem apenas a ultima requisicao, com o metodo switchMap*/
    ngOnInit():void { 
        this.contatos = this.termosBusca
            .debounceTime(300) //aguardar 300 milisec antes de fazer a requisicao
            .distinctUntilChanged()//ignorar termos de busca iguais aos da ultima requisicao
            .switchMap(term => {
                console.log("Enviou: "+term);
                //isso eh um if
                return term ? this.contatoService.search(term) : Observable.of<Contato[]>([]);
            }).catch(err => {
                console.log(err);
                return Observable.of<Contato[]>([]);                
            });
    }

    //Esse metodo observa as mudancas que ocorreram nas propriedades marcadas com @Input
    ngOnChanges(changes: SimpleChanges): void {
        //recuperamos as alteracoes no campo busca
        let busca: SimpleChange = changes['busca'];
        //e chamamos o metodo de busca com o valor vindo de fora do nosso component
        this.search(busca.currentValue);
    }


    search(term:string):void{
        //adicionamos na "pilha" de buscas realizadas
        this.termosBusca.next(term);
        //aqui emitimos o nosso evento para o two way data binding
        this.buscaChange.emit(term);
    }

    //quando clicamos em um resultado da busca
    public verContato(c : Contato):void{
        let link = ['contato/save', c.id];
        this.router.navigate(link);
        //esvaziamos a nossa busca, emitindo esse evento
        this.buscaChange.emit("");
    }

}