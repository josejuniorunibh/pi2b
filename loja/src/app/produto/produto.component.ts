import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria'
import axios from "axios";
@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  categorias: Categoria[] = [];
  constructor() { 
    this.consultaCategorias();
  }

  ngOnInit(): void {
  }

  consultaCategorias() {  
    axios
      .get("http://localhost:8080/loja/categorias")
      .then(response => {
        console.log(response);
        for (let t of response.data._embedded.categorias) {
          console.log(t);
          this.categorias.push(new Categoria(t.id, t.descricao));
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {});
  }

}
