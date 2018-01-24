import { Component, OnInit } from "@angular/core";

import { Contato } from "./contato.model";
import { ContatoService } from "./contato.service";
import { DialogService } from "../dialog.service";

@Component({
    moduleId: module.id,//usado pelo proprio angular, para fazer as linkagens entre o component e o HTML gerenciado
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html'//indicamos o arquivo q sera manipulado por esse component
})

/*
Esse implements é para usarmos o método de call back
*/
export class ContatosListaComponent implements OnInit{
    
    //Atributo que contem uma lista de Contatos
    contatos: Contato[] = [];
    mensagem:{};
    css:{};
    private currentTimeout : any;

    //e aqui o Angular injeta esse serviço, pois está nos providers do contatos-module
    constructor(
        private contatosService: ContatoService,
        private dialogService: DialogService
    ){}

    /*
     Método de callback, que é chamado assim que esse componente é criado, 
     há vários outros, poderia ser chamado no construtor, mas não é uma boa prática

     PROMISES: Aqui estamos usando uma promise definida no contatos-service
     */
    ngOnInit(): void {
        this.contatosService.findAll()
            //o the trata o retorno da promisse
            .then((cont:Contato[]) => {
                this.contatos = cont;
            }).catch(
                err => {
                    this.mostrarMensagem({
                        tipo: 'danger', 
                        text: 'Erro ao carregar lista de contatos!'
                    });
                }
            );
    }

    onDelete(contato:Contato):void{
        this.dialogService.confirm('Deseja deletar o contato '+contato.nome+'?')
            .then((canDelete:boolean) => {
                if(canDelete){
                    this.contatosService
                        .delete(contato)
                        .then(() => {
                            //reatribuimos o array de contatos, removendo o contato deletado
                            this.contatos = this.contatos.filter((c:Contato) => c.id != contato.id);
                            //exibir feedback ao usuario
                            this.mostrarMensagem({
                                tipo: 'success', 
                                text: 'Contato deletado com sucesso'
                            });

                        }).catch(err => {
                            console.log(err);
                            this.mostrarMensagem({
                                tipo: 'danger', 
                                text: 'Ocorreu um erro ao deletar o contato!'
                            });
                        })
                }
            })
    }

    public mostrarMensagem(msg:{tipo:string, text:string}):void{
        this.mensagem = msg;
        this.montarCss(msg.tipo);
        if(msg.tipo != 'danger'){
            //gerenciamos os timeouts das mensagens,pra ter apenas um timeout ativo por vez
            if(this.currentTimeout){
                clearTimeout(this.currentTimeout);
            }
            //timer, depois de 5 segundos remove a msg
            this.currentTimeout = setTimeout(()=>{
                this.mensagem = undefined;
            }, 5000);
        }
    }

    /** 
    monta o CSS da nossa mensagem de alerta
    */
    private montarCss(tipo:string):void{
        this.css = {
            'alert':true
        };
        this.css['alert-'+tipo] = true; //alert-success ou alert-danger
    }

}