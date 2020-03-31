package br.unibh.backend.rest;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import br.unibh.backend.entities.Produto;

@RepositoryRestResource(collectionResourceRel = "produtos", path = "produtos")
public interface ProdutoCRUD extends CrudRepository<Produto, Long> {

	
}
