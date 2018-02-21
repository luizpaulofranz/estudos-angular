import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

  ultimoId = 0;
  nome = 'Example';
  adicionado = false;
  // o funcionario criado, eh exposto fora do nosso componente
  // emitimos um objeto do tipo funcionario
  // fazemos isso para armazenar a colacao de funcionarios em outro componente
  // no caso eh armazenado no app.component.ts, passando pelo seu template html
  @Output('criado') funcionarioAdicionado = new EventEmitter();

  adicionar() {
    this.adicionado = true;

    const funcionario = {
      id: ++this.ultimoId,
      nome: this.nome
    };
    // assim enviamos esse objeto para fora do nosso componente
    // que eh capturado pelo app.component.html
    this.funcionarioAdicionado.emit(funcionario);
  }

}
