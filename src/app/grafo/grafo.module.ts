import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GrafoRoutingModule } from './grafo-routing.module';
import { DjisktraComponent } from './djisktra/djisktra.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [DjisktraComponent,CarouselComponent],
  imports: [
    CommonModule,
    GrafoRoutingModule,NgbModule, FormsModule, ReactiveFormsModule
    
  ]
})
export class GrafoModule { }
