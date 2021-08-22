import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  nome = 'Thiago';
  constructor() { }

  ngOnInit(): void {
  }
  adicionar(){
    console.log(`Adicionando ${this.nome}`);
  }
}
