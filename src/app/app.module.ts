import { InstitucionalModule } from './institucional/institucional.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { NavegacaoModule } from './navegacao/navegacao.module';
import { AppRoutingModule } from './app.routes';
import { ProdutoModule } from './demos/arquitetura-componente/produto.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    NavegacaoModule,
    InstitucionalModule,
    AppRoutingModule
  ],
  providers: [
    //{
    //provide:APP_BASE_HREF,useValue:'/'//
    //}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
