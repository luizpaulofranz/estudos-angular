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
  }

  excluir(id: number) {
    alert(id);
  }

  atualizar(cidade: any) {
    alert(JSON.stringify(cidade));
  }

}
