package com.backend.exclusive.mappers;

import com.backend.exclusive.dtos.CartDTO;
import com.backend.exclusive.models.Cart;
import org.bson.types.ObjectId;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;

@Mapper(uses = {CartItemMapper.class})
public interface CartMapper {
    CartMapper INSTANCE = Mappers.getMapper(CartMapper.class);

    @Mapping(source = "user.id", target = "userId", qualifiedByName = "objectIdToString")
    CartDTO toCartDTO(Cart cart);

    @Mapping(source = "userId", target = "user.id", qualifiedByName = "stringToObjectId")
    Cart toCart(CartDTO cartDTO);

    @Named("objectIdToString")
    default String map(ObjectId value) {
        return value != null ? value.toHexString() : null;
    }

    @Named("stringToObjectId")
    default ObjectId map(String value) {
        return value != null ? new ObjectId(value) : null;
    }
}
