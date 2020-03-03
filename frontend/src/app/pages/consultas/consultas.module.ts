import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { ConsultasRoutingModule } from './consultas-routing.module';
import { ConsultasComponent } from './consultas.component';


@NgModule({
  declarations: [ConsultasComponent],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    ButtonModule,
    ToolbarModule,
    TableModule
  ]
})
export class ConsultasModule { }
