import { Produto } from './../models/produto';
import { ProdutoService } from './../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  produto:Produto | undefined;

  constructor(private route:ActivatedRoute, private produtoService:ProdutoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.produto = this.produtoService.obterPorId(params['id']);
    });
  }

}
