import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bing',
  templateUrl: './data-bing.component.html',
  styleUrls: ['./data-bing.component.css']
})
export class DataBingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public contadorClique: number = 0;
  public minhaImagem: String = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";

  adicionarCliqueMais() {
    this.contadorClique++;
  }

  adicionarCliqueMenos() {
    this.contadorClique--;
  }

  public nome :String = "";

  Keyup() {
    //sthis.nome = event.target.value;
  }
}
