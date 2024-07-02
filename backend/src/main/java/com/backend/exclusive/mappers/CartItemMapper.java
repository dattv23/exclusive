package com.backend.exclusive.mappers;

import com.backend.exclusive.dtos.CartItemDTO;
import com.backend.exclusive.models.CartItem;
import com.backend.exclusive.services.ProductService;
import org.bson.types.ObjectId;
import org.mapstruct.*;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;

@Mapper(componentModel = "spring")
@Configurable
public abstract class CartItemMapper {

    public static final CartItemMapper INSTANCE = Mappers.getMapper(CartItemMapper.class);

    @Autowired
    private ProductService productService;

    @Mapping(source = "product.id", target = "productId")
    public abstract CartItemDTO toCartItemDTO(CartItem cartItem);

    @Mapping(source = "productId", target = "product.id")
    public abstract CartItem toCartItem(CartItemDTO cartItemDTO);

    @BeforeMapping
    protected void enrichCartItemDTO(CartItem cartItem, @MappingTarget CartItemDTO cartItemDTO) {
        if (cartItem.getProduct() != null) {
            cartItemDTO.setProductId(cartItem.getProduct().getId().toHexString());
        }
    }

    @AfterMapping
    protected void enrichCartItem(CartItemDTO cartItemDTO, @MappingTarget CartItem cartItem) {
        if (cartItemDTO.getProductId() != null) {
            productService.getById(new ObjectId(cartItemDTO.getProductId())).ifPresent(cartItem::setProduct);
        }
    }

    public String map(ObjectId value) {
        return value != null ? value.toHexString() : null;
    }

    public ObjectId map(String value) {
        return value != null ? new ObjectId(value) : null;
    }
}
