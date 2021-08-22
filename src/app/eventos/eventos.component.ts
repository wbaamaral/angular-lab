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
    const numero = Math.round(Math.random() * 100);
    this.nome = 'João' + numero;
  }

  alterarNome( evento: any){
    /*
    * console.log(evento)
    * lista todas as propriedades do evento.
    * dentro dela vamos pegar target e value
    * para fazer a atualização da variável.
    *
    */
    this.nome = evento.target.value;
  }
}
