import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SobreComponent,
    ContatoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],  
  exports:[
    SobreComponent,
    ContatoComponent,  ]
})
export class InstitucionalModule { }
