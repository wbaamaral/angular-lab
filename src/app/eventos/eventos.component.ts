import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  nome = 'Amaral';

  constructor() { }

  ngOnInit(): void {
  }

  alterarNome( parametro: string){
     this.nome = parametro;
  }
}
