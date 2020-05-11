import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'loja2';
  
  imprime = (title) => {
    return 'Bem vindo à nossa ' + title;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
