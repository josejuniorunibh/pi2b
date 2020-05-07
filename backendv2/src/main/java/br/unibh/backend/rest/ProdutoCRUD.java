package br.unibh.backend.rest;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import br.unibh.backend.entities.Produto;

@CrossOrigin(origins = "*")
@RepositoryRestResource(collectionResourceRel = "produtos", path = "produtos")
public interface ProdutoCRUD extends CrudRepository<Produto, Long> {

	
}
