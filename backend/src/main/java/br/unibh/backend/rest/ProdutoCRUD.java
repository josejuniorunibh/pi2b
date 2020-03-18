package br.unibh.backend.rest;

import org.springframework.data.repository.CrudRepository;

import br.unibh.backend.entities.Produto;

public interface ProdutoCRUD extends CrudRepository<Produto, Long> {

	
}
