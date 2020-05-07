package br.unibh.backend.rest;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import br.unibh.backend.entities.Categoria;

@CrossOrigin(origins = "*")
@RepositoryRestResource(collectionResourceRel = "categorias", path = "categorias")
public interface CategoriaCRUD2 extends CrudRepository<Categoria, Long> {

	
}
