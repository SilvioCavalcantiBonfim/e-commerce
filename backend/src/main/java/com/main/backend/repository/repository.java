package com.main.backend.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import com.main.backend.model.product;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "product", path = "products")
public interface repository extends PagingAndSortingRepository<product, Long> {
  @Query("SELECT c.NAME, c.PRICE, c.IMG, c.DISCOUNT FROM product p where p.CODE = :code")
  product findByCode(@Param("code") Long code);
}
