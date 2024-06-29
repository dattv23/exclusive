package com.backend.exclusive.services;

import com.backend.exclusive.dtos.CartDTO;
import com.backend.exclusive.dtos.CartItemDTO;
import com.backend.exclusive.models.Cart;
import com.backend.exclusive.models.CartItem;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Optional;

public interface CartService {
    Cart createCart(CartDTO cartDTO);

    List<Cart> getAllCarts();

    Optional<Cart> getCartById(ObjectId id);

    Optional<Cart> updateCart(ObjectId id, CartDTO cartDTO);

    void deleteCart(ObjectId id);

    // Addition
    List<CartItem> getAllItemsInCart(ObjectId id);

    Optional<Cart> getCartByUserId(ObjectId userId);

    Cart addItemToCart(ObjectId cartId, CartItemDTO item);

    Cart removeItemFromCart(ObjectId cartId, CartItemDTO item);
}
