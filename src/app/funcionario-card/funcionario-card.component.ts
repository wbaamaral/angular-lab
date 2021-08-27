import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent  {

  @Input() funcionario : any ;
  defEstilo(){
    return{
      backgroundColor : this.funcionario.id % 2 === 0 ? '#C1CDC1' : '#F0FFFF' ,
      'text-transform' : 'uppercase full-width'
    };
  }
}
