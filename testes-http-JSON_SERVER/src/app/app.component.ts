import { CidadeService } from './cidade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cidades = [];

  constructor(private cidadeService: CidadeService) {}

  // e aqui no carregamos a lista de cidades
  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.cidadeService.consultar()
      .then(cidades => { this.cidades = cidades } );
  }

  adicionar(nomeCidade: string) {
    // passamos um objeto javascript q sera convertido em Json
    this.cidadeService.adicionar({ nome: nomeCidade })
      .then(cidade => {
        alert(`Cidade "${cidade.nome}" adicionada com código "${cidade.id}".` );
        this.consultar();
      })
      .catch(erro => alert(erro));
  }

  excluir(id: number) {
    this.cidadeService.excluir(id)
      .then(() => {
        alert('Cidade excluída com Sucesso!');
        this.consultar();
      })
      .catch(erro => alert(erro));
  }

  atualizar(cidade: any) {
    this.cidadeService.atualizar(cidade)
      // nesse caso, prefirimos nao pegar os dados retornados pelo backend
      // e nao precisamos recarregar a lista de cidades, pois nossa alteracao
      // ja esta visivel no form
      .then(() => {
        alert('Cidade atualizada com sucesso!');
      })
      .catch(erro => alert(erro));
  }

}
