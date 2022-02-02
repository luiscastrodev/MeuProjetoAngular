import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  nav: Nav[] = [
    {
      link: '/home',
      name: 'Home',
      exact: true,
      admin: false
    },
    {
      link: '/contato',
      name: 'contato',
      exact: true,
      admin: false
    },
    {
      link: '/sobre',
      name: 'sobre',
      exact: true,
      admin: false
    },
    {
      link: '/produtos',
      name: 'produtos',
      exact: true,
      admin: false
    }
  ];
}

interface Nav {
  link: string;
  name: string;
  exact: boolean;
  admin: boolean;
}
