package com.backend.exclusive.mappers;

import com.backend.exclusive.dtos.ProductDTO;
import com.backend.exclusive.models.Product;
import org.bson.types.ObjectId;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    ProductMapper INSTANCE = Mappers.getMapper(ProductMapper.class);

    @Mapping(source = "category.id", target = "categoryId")
    @Mapping(source = "category.name", target = "categoryName")
    ProductDTO toProductDTO(Product product);

    @Mapping(source = "categoryId", target = "category.id")
    @Mapping(source = "categoryName", target = "category.name")
    Product toProduct(ProductDTO productDTO);

    default String map(ObjectId value) {
        return value != null ? value.toHexString() : null;
    }

    default ObjectId map(String value) {
        return value != null ? new ObjectId(value) : null;
    }
}
