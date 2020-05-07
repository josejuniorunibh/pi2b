package br.unibh.backend.rest;

import java.util.Set;

import javax.persistence.Entity;

import org.reflections.Reflections;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

@SuppressWarnings("deprecation")
@Configuration
public class RestConfiguration extends RepositoryRestConfigurerAdapter  {

	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
		Reflections reflections = new Reflections("br.unibh.backend.entities");
        Set<Class<?>> idExposedClasses = reflections.getTypesAnnotatedWith(Entity.class, false);
        idExposedClasses.forEach(config::exposeIdsFor);
	}
}