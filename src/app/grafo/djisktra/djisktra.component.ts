import { Component, OnInit } from '@angular/core';
import { Parser } from 'expr-eval';

@Component({
  selector: 'app-djisktra',
  templateUrl: './djisktra.component.html',
  styleUrls: ['./djisktra.component.scss']
})



export class DjisktraComponent implements OnInit {

  informacion:string="Hola campeones";  
  numero:number=0;
  persona:any;



  constructor() { 
    this.persona={"nombre":"Carlos","apellido":"Loaiza"};
  }

  ngOnInit(): void {
    console.log("numero "+this.numero);
    if(this.numero == undefined)
    {
      this.informacion="Aún no hay un número";
    }
  }

  public calcular()
  {
    let parser = new Parser();
    var expr = parser.parse('2 * x + 1');
    this.numero=expr.evaluate({ x: 3 }); // 7

  }

}
