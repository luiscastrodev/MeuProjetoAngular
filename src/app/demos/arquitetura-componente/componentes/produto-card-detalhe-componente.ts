import { Produto } from './../models/produto';
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'produto-card-detalhe',
    templateUrl: '../componentes/produto-card-detalhe-componente.html'
  })
  export class ProdutoDetalheComponent implements OnInit {
  
    @Input()
    produto : Produto | undefined;
    
    constructor() { }
  
    ngOnInit(): void {
     
    }
  
  }
  