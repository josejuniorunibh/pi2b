package br.unibh.backend.rest;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import br.unibh.backend.entities.Categoria;

@RepositoryRestResource(collectionResourceRel = "categorias", path = "categorias")
public interface CategoriaCRUD2 extends CrudRepository<Categoria, Long> {

	
}
