/*
 Essa classe é quem faz o acesso aos dados, é uma repository
 ela é tratada como um service, para que possa ser injetada em vários components do Angular
 
 Esqueça a noção correta de serviços, esses são os serviços do Angular!
 */

import { Contato } from "./contato.model";
import { CONTATOS } from "./contatos-mock"
//para manipular requisicoes http
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from "@angular/core";

import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs";
import { ServiceInterface } from "../interfaces/service.interface";

//essa anotacao ou decorator, ajuda a identificar que eh uma classe de serviço
//possibilita a injeção dessa classe em outros components
// aqui implementamos uma interface que desenvolvemos na pasta "interfaces"
@Injectable()
export class ContatoService implements ServiceInterface<Contato>{

    //essa é a URL da nossa API simulada
    private contatosUrl:string = 'app/contatos';
    private headers:Headers = new Headers({'Content-Type':'application/json'});

    constructor(
        private http:Http
    ){}

    /*
    Promises são para resoler as chamadas assincronas com o servidor Backend
    */
    findAll(): Promise<Contato[]>{
        return this.http.get(this.contatosUrl)
            .toPromise()
            .then(response => response.json().data as Contato[])
            .catch(this.handleError) ;
    }

    find(id:number): Promise<Contato>{
        //recuperamos nossa lista de contatos (contida em um promise)
        return this.findAll()
            //informamos que o retorno dessa primise eh um array
            //jogamos em uma variavel chamada "contatos"
            .then((contatos:Contato[])=>{
                //o find eh tipo um foreach, a variavel contato contem a variavel do loop
                return contatos.find((contato) => {
                    //no find implementamos apenas a busca, quando a busca estiver certa
                    //ele retorna o objeto pra nos
                    return contato.id === id;
                });
            });
    }

    create(contato:Contato):Promise<Contato>{
        return this.http
            .post(this.contatosUrl, JSON.stringify(contato), {'headers': this.headers})
            .toPromise()
            .then((response:Response) => response.json().data as Contato)
            .catch(this.handleError);
    }

    update(contato:Contato):Promise<Contato>{
        //entre acentos permite processar códigos
        //isso eh para montar URLS assim, app.contatos/save/5
        const url = `${this.contatosUrl}/${contato.id}`;
        return this.http
            .put(url, JSON.stringify(contato), {'headers': this.headers})
            .toPromise()
            .then(() => contato as Contato)
            .catch(this.handleError);
    }

    delete(contato:Contato):Promise<Contato>{
        //entre acentos permite processar códigos
        //isso eh para montar URLS assim, app.contatos/save/5
        const url = `${this.contatosUrl}/${contato.id}`;
        return this.http
            .delete(url, {'headers': this.headers})
            .toPromise()
            .then(() => contato as Contato)
            .catch(this.handleError);
    }

    /**
     * 
     * @param err Método que trata os erros para API Http
     */
    private handleError(err:any):Promise<any>{        
        return Promise.reject(err.message || err);
    }

    public search(term: string): Observable<Contato[]>{
        return this.http
            //essa eh a logica implementada pelo servidor, nosso caso API simulada
            .get(`${this.contatosUrl}/?nome=${term}`)
            //converte o response em array de contatos
            .map((res: Response) => res.json().data as Contato[])
    }
}