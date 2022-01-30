import { ProdutoRoutingModule } from './produto.route';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";


@NgModule({
    declarations: [
        ProdutoDashboardComponent,
    ],
    imports: [
      CommonModule,
      RouterModule,
      ProdutoRoutingModule
    ]
  })
  export class ProdutoModule { }
  