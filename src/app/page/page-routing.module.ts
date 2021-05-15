import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import { GrafoComponent } from './grafo/grafo.component';
import { GrafodirigidoComponent } from './grafodirigido/grafodirigido.component';


const routes: Routes = [
  {
    path: '',
    component: GrafoComponent,
    data: {
      title: 'Page'
    },
     children: [
       {
         path: 'dirigido',
         component: GrafodirigidoComponent,
         data: {
           title: 'Grafo Dirigido'
         }
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule { }
