import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { DataBingComponent } from './demos/data-bing/data-bing.component';
//import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'contato', component: ContatoComponent},
    { path: 'sobre', component: SobreComponent },
    { path: 'feature-data-binding', component: DataBingComponent },

    //{ path: 'cadastro', component: CadastroComponent },
    //{ path: 'produtos', 
    //        loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
    //        .then(m => m.ProdutoModule)}
];
