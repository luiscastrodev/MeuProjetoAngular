import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { ProdutoRoutingModule } from './produto.route';
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";


@NgModule({
    declarations: [
        ProdutoDashboardComponent,
    ],
    imports: [
      CommonModule,
      ProdutoRoutingModule
    ]
  })
  export class ProdutoModule { }
  