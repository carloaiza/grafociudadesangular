import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { PageRoutingModule } from "./page-routing.module";

import { PageComponent } from "./page.component";
import { GrafoComponent } from './grafo/grafo.component';
import { GrafodirigidoComponent } from './grafodirigido/grafodirigido.component';


@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule
  ],
  exports: [],
  declarations: [
    PageComponent,
    GrafoComponent,
    GrafodirigidoComponent
  ],
  providers: [],
})
export class PageModule { }
