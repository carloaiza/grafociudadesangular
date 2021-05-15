import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DjisktraComponent } from './djisktra/djisktra.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  {
    path: '',        
     children: [
       {
         path: 'djisktra',
         component: DjisktraComponent,
         data: {
           title: 'Algoritmo Djisktra'
         }
       },
       {
        path: 'carrusel',
        component: CarouselComponent,
        data: {
          title: 'Carrusel'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrafoRoutingModule { }
