import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    ContatoComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,  
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })]
  ],
  providers: [{
    provide:APP_BASE_HREF,useValue:'/'//
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
