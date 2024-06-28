package com.backend.exclusive.mappers;

import com.backend.exclusive.dtos.OrderDTO;
import com.backend.exclusive.models.Order;
import org.bson.types.ObjectId;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;

@Mapper(uses = {OrderItemMapper.class})
public interface OrderMapper {
    OrderMapper INSTANCE = Mappers.getMapper(OrderMapper.class);

    @Mapping(source = "user.id", target = "userId", qualifiedByName = "objectIdToString")
    @Mapping(source = "coupon.id", target = "couponId", qualifiedByName = "objectIdToString")
    OrderDTO toOrderDTO(Order order);

    @Mapping(source = "userId", target = "user.id", qualifiedByName = "stringToObjectId")
    @Mapping(source = "couponId", target = "coupon.id", qualifiedByName = "stringToObjectId")
    Order toOrder(OrderDTO orderDTO);

    @Named("objectIdToString")
    default String map(ObjectId value) {
        return value != null ? value.toHexString() : null;
    }

    @Named("stringToObjectId")
    default ObjectId map(String value) {
        return value != null ? new ObjectId(value) : null;
    }
}
