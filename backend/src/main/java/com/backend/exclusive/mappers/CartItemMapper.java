package com.backend.exclusive.mappers;

import com.backend.exclusive.dtos.CartItemDTO;
import com.backend.exclusive.models.CartItem;
import org.bson.types.ObjectId;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface CartItemMapper {
    CartItemMapper INSTANCE = Mappers.getMapper(CartItemMapper.class);

    @Mapping(source = "product.id", target = "productId")
    CartItemDTO toCartItemDTO(CartItem cartItem);

    @Mapping(source = "productId", target = "product.id")
    CartItem toCartItem(CartItemDTO cartItemDTO);

    default String map(ObjectId value) {
        return value != null ? value.toHexString() : null;
    }

    default ObjectId map(String value) {
        return value != null ? new ObjectId(value) : null;
    }
}
