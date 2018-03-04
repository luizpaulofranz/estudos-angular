import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CidadeService {

  constructor(private http: Http) { }

  consultar(): Promise<any> {
    // aqui usamos a url do nosso json server
    // retorna um observable, convertemos para promise, usando rxjs
    return this.http.get('http://localhost:3000/cidades')
      .toPromise()
      // apenas retornamos em formato json
      // lembrando que cada then retorna uma promise
      .then(response => response.json());
  }

  // retorna o objeto adicionado, incluindo o ID
  adicionar(cidade: any): Promise<any> {
    // o segundo parametro eh o corpo da requisicao
    return this.http.post('http://localhost:3000/cidades', cidade)
      .toPromise()
      .then(response => response.json());
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`http://localhost:3000/cidades/${id}`)
      .toPromise()
      // delete nao retorna nada
      .then(() => null);
  }

}
