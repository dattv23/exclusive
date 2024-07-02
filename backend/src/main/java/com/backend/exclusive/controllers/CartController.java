package com.backend.exclusive.controllers;

import com.backend.exclusive.common.ApiResponse;
import com.backend.exclusive.common.ResponseUtil;
import com.backend.exclusive.dtos.CartDTO;
import com.backend.exclusive.dtos.CartItemDTO;
import com.backend.exclusive.dtos.CartItemReqDTO;
import com.backend.exclusive.mappers.CartItemMapper;
import com.backend.exclusive.mappers.CartMapper;
import com.backend.exclusive.mappers.UserMapper;
import com.backend.exclusive.models.Cart;
import com.backend.exclusive.models.CartItem;
import com.backend.exclusive.models.User;
import com.backend.exclusive.services.CartService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/carts")
public class CartController {

    @Autowired
    private CartService cartService;

    @Autowired
    private CartMapper cartMapper;

    @Autowired
    private CartItemMapper cartItemMapper;

    @Autowired
    private UserMapper userMapper;

//    @PostMapping("/add")
//    public ResponseEntity<Cart> createCart(@RequestBody CartDTO cartDTO) {
//        Cart createdCart = cartService.createCart(cartDTO);
//        return ResponseEntity.ok(createdCart);
//    }

//    @GetMapping("/all")
//    public ResponseEntity<ApiResponse<List<CartDTO>>> getAllCarts() {
//        List<Cart> carts = cartService.getAllCarts();
//        List<CartDTO> cartDTOs = new ArrayList<>();
//        for (var item : carts) {
//            cartDTOs.add(cartMapper.toCartDTO(item));
//        }
//        return ResponseUtil.success(cartDTOs);
//    }
//
//    @GetMapping("/get/{id}")
//    public ResponseEntity<ApiResponse<CartDTO>> getCartById(@PathVariable String id) {
//        Optional<Cart> cart = cartService.getCartById(new ObjectId(id));
//        CartDTO cartDTO = cartMapper.toCartDTO(cart.get());
//        return ResponseUtil.success(cartDTO);
//    }

//    @PutMapping("/update/{id}")
//    public ResponseEntity<ApiResponse<Cart>> updateCart(@PathVariable ObjectId id, @RequestBody CartDTO cartDTO) {
//        Optional<Cart> updatedCart = cartService.updateCart(id, cartDTO);
//        return updatedCart.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
//    }

//    @DeleteMapping("/delete/{id}")
//    public ResponseEntity<ApiResponse<Void>> deleteCart(@PathVariable ObjectId id) {
//        cartService.deleteCart(id);
//        return ResponseEntity.noContent().build();
//    }

    //    @GetMapping("/all/{id}/items")
//    public ResponseEntity<ApiResponse<List<CartItemDTO>>> getAllItemsInCart(@PathVariable String id) {
//        List<CartItem> items = cartService.getAllItemsInCart(new ObjectId(id));
//        List<CartItemDTO> itemDTOS = new ArrayList<>();
//        for (var item : items) {
//            itemDTOS.add(cartItemMapper.toCartItemDTO(item));
//        }
//        return ResponseUtil.success(itemDTOS);
//    }
//
//    @GetMapping("/getByUser/{userId}")
//    public ResponseEntity<ApiResponse<CartDTO>> getCartByUserId(@PathVariable String userId) {
//        Optional<Cart> cart = cartService.getCartByUserId(new ObjectId(userId));
//        CartDTO cartDTO = cartMapper.toCartDTO(cart.get());
//        return ResponseUtil.success(cartDTO);
//    }
//
//    @PutMapping("/addItem/{cartId}")
//    public ResponseEntity<ApiResponse<CartDTO>> addItemToCart(@PathVariable String cartId, @RequestBody CartItemDTO cartItemDTO) {
//        Cart updatedCart = cartService.addItemToCart(new ObjectId(cartId), cartItemDTO);
//        CartDTO cartDTO = cartMapper.toCartDTO(updatedCart);
//        return ResponseUtil.success(cartDTO);
//    }
//
//    @PutMapping("/removeItem/{cartId}")
//    public ResponseEntity<ApiResponse<CartDTO>> removeItemFromCart(@PathVariable String cartId, @RequestBody CartItemDTO cartItemDTO) {
//        Cart updatedCart = cartService.removeItemFromCart(new ObjectId(cartId), cartItemDTO);
//        CartDTO cartDTO = cartMapper.toCartDTO(updatedCart);
//        return ResponseUtil.success(cartDTO);
//    }
//

    @DeleteMapping
    public ResponseEntity<ApiResponse<CartDTO>> removeAllItemsInCart() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();
        Optional<Cart> cartOptional = cartService.getCartByUserId(currentUser.getId());
        if (cartOptional.isEmpty()) {
            throw new RuntimeException("User don't have any cart");
        }

        cartService.removeAllItems(cartOptional.get().getId());
        return ResponseUtil.success(HttpStatus.OK, "Completed remove all items in cart", null);
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<CartItemDTO>>> getItems() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();
        Optional<Cart> cartOptional = cartService.getCartByUserId(currentUser.getId());
        if (cartOptional.isEmpty()) {
            throw new RuntimeException("User don't have any cart");
        }

        List<CartItem> cartItems = cartService.getAllItemsInCart(cartOptional.get().getId());
        List<CartItemDTO> cartItemDTOS = cartItems.stream().map(cartItemMapper::toCartItemDTO).toList();
        return ResponseUtil.success(cartItemDTOS);
    }

    @PostMapping
    public ResponseEntity<ApiResponse<List<CartItemDTO>>> addItem(@RequestBody CartItemReqDTO cartItemReqDTO) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();
        Optional<Cart> cartOptional = cartService.getCartByUserId(currentUser.getId());
        if (cartOptional.isEmpty()) {
            throw new RuntimeException("User don't have any cart");
        }

        CartItemDTO cartItemDTO = new CartItemDTO();
        cartItemDTO.setProductId(cartItemReqDTO.getProductId());
        cartItemDTO.setQuantity(cartItemReqDTO.getQuantity());
        Cart cart = cartService.addItemToCart(cartOptional.get().getId(), cartItemDTO);
        List<CartItemDTO> cartItemDTOS = cart.getCartItems().stream().map(cartItemMapper::toCartItemDTO).toList();
        return ResponseUtil.success(cartItemDTOS);
    }

    @PutMapping
    public ResponseEntity<ApiResponse<List<CartItemDTO>>> update(@RequestBody List<CartItemReqDTO> cartItemReqDTOS) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();
        Optional<Cart> cartOptional = cartService.getCartByUserId(currentUser.getId());
        if (cartOptional.isEmpty()) {
            throw new RuntimeException("User don't have any cart");
        }

        CartDTO cartDTO = cartMapper.toCartDTO(cartOptional.get());
        List<CartItemDTO> cartItemDTOS = new ArrayList<>();
        for (var item : cartItemReqDTOS) {
            cartItemDTOS.add(mapToCartItemDTO(item));
        }
        cartDTO.setCartItems(cartItemDTOS);
        Cart cart = cartService.updateCart(new ObjectId(cartDTO.getId()), cartDTO);

        return ResponseUtil.success(cartMapper.toCartDTO(cart).getCartItems());
    }

    public CartItemDTO mapToCartItemDTO(CartItemReqDTO cartItemReqDTO) {
        CartItemDTO cartItemDTO = new CartItemDTO();
        cartItemDTO.setProductId(cartItemReqDTO.getProductId());
        cartItemDTO.setQuantity(cartItemReqDTO.getQuantity());
        return cartItemDTO;
    }
}
