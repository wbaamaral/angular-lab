import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {

  ultimoId = 0;
  nome = 'Amaral';


  // funcionarios = [] as any;
  funcionarios: Array<any> = [];

  adicionado = false;

  adicionar() {
    console.log(`Adicionando ${this.nome}`);
    this.adicionado = true;

    this.funcionarios.push({
      id: ++this.ultimoId,
      nome: this.nome
    });
  }
}
