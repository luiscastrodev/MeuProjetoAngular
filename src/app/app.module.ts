import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { NavegacaoModule } from './navegacao/navegacao.module';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    ContatoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    NavegacaoModule,
    AppRoutingModule
  ],
  providers: [{
    provide:APP_BASE_HREF,useValue:'/'//
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
