import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria'
import axios from "axios";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias: Categoria[] = [];
  categoria: Categoria;

  constructor() {}
  
  ngOnInit() {
    this.limpaECarrega();
  }

  limpaECarrega(){
    this.categoria = new Categoria(-2, "");
    this.consultaCategorias();
  }
  novo() {
    this.categoria.id = -1;
    this.categoria.descricao = "";
  }
  consultaCategorias() {  
    axios
      .get("http://192.168.99.102:8080/loja/categorias")
      .then(response => {
        this.categorias = []
        for (let c of response.data._embedded.categorias) {
          this.categorias.push(new Categoria(c.id, c.descricao));
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {});
  }
  gravar() {
    if (this.categoria.id == -1) {
      axios
        .post("http://192.168.99.102:8080/loja/categorias/", {
          id: null,
          descricao: this.categoria.descricao
        })
        .then(response => {
          this.limpaECarrega();
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {});
    } else {
      axios
        .put("http://192.168.99.102:8080/loja/categorias/" + this.categoria.id, {
          id: this.categoria.id,
          descricao: this.categoria.descricao
        })
        .then(response => {
          this.limpaECarrega();
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {});
    }
  }
  editar(c: Categoria) {
    this.categoria.id = c.id;
    this.categoria.descricao = c.descricao;
  }
  excluir(index: number) {
    axios
      .delete("http://192.168.99.102:8080/loja/categorias/" + index)
      .then(response => {
        this.limpaECarrega();
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {});
  }
  
  
}
