import { Component, OnInit } from '@angular/core';
import { UniversidadService } from '../universidad.service'
import {
  ColumnMode,
  DatatableComponent,
  SelectionType
} from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent implements OnInit {
  estudiantes:[]
  reorderable: boolean = true
  public ColumnMode = ColumnMode


  constructor( private universidadService:UniversidadService) { }

  ngOnInit(): void {
    this.obtenerEstudiantes();

  }


  public obtenerEstudiantes()
  {
    this.universidadService.obtenerEstudiantes().subscribe(
        dataFinal =>{
          console.log(dataFinal)
          this.estudiantes = dataFinal
        }
    );
  }


  public crearEstudiante()
  {
    let canion={"codigo":"82201918272","nombre":"Sebastián Cañón Jiménez", 
    "universidad":"UMANIZALES" }

    this.universidadService.crearEstudiante(canion).subscribe(
      dataFinal =>{
        console.log(dataFinal)        
        this.estudiantes = dataFinal
      }
    );
  }

}
