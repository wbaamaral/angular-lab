import { Component, OnInit, NgModule, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {
  ultimoId = 0;
  nome = 'Amaral';

  @Output() funcionarioAdicionado = new EventEmitter();

  // funcionarios = [] as any;
  funcionarios: Array<any> = [];

  adicionado = false;

  adicionar() {
    this.adicionado = true;

    const funcionario = {
      id: ++this.ultimoId,
      nome: this.nome
    };

    this.funcionarioAdicionado.emit(funcionario)
  }
}
