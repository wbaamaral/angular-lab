import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  nome = 'Amaral';

  adicionar() {
    console.log(`Adicionando ${this.nome}`);

    const numero = Math.round(Math.random() * 100);
    this.nome = 'João ' + numero;
  }
}
