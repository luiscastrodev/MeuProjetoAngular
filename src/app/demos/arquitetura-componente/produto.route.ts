import { ProdutoAppcomponent } from './produto.app.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';

const produtoRouterConfig: Routes = [
    { path: '', component: ProdutoAppcomponent,
        children:[
        { path: '', component: ProdutoDashboardComponent },
        { path: 'editar/:id', component: EditarProdutoComponent }//rota filha no modulos produtos
    ] },
    
];


@NgModule({
    imports: [
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})

export class ProdutoRoutingModule { }