package com.backend.exclusive.mappers;

import com.backend.exclusive.dtos.OrderItemDTO;
import com.backend.exclusive.models.OrderItem;
import org.bson.types.ObjectId;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface OrderItemMapper {
    OrderItemMapper INSTANCE = Mappers.getMapper(OrderItemMapper.class);

    @Mapping(source = "product.id", target = "productId")
    OrderItemDTO toOrderItemDTO(OrderItem orderItem);

    @Mapping(source = "productId", target = "product.id")
    OrderItem toOrderItem(OrderItemDTO orderItemDTO);

    default String map(ObjectId value) {
        return value != null ? value.toHexString() : null;
    }

    default ObjectId map(String value) {
        return value != null ? new ObjectId(value) : null;
    }
}
