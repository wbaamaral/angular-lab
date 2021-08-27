import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {

  funcionarios: any[] = [];

  aoAdicionar(funcionario :  any){
    this.funcionarios.push(funcionario);
  }
}
