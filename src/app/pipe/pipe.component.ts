import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent  {

  preco: number = 1300.14159265359;
  dataAniversario :  number = Date.now();
  nome: string = "wélyqrson de bastos do amaral";
  troco: number = 0.532;

  /*
  <h1>{{nome | uppercase}} </h1>
<h1>{{dataAniversario | date:'dd/MM/y' }}</h1>
<h1>{{ preco | number }}</h1>
<h1>{{ troco | currency }}</h1>*/

}
