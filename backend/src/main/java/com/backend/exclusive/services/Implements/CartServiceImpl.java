package com.backend.exclusive.services.Implements;

import com.backend.exclusive.dtos.CartDTO;
import com.backend.exclusive.dtos.CartItemDTO;
import com.backend.exclusive.models.Cart;
import com.backend.exclusive.models.CartItem;
import com.backend.exclusive.models.Product;
import com.backend.exclusive.models.User;
import com.backend.exclusive.repositories.CartItemRepository;
import com.backend.exclusive.repositories.CartRepository;
import com.backend.exclusive.repositories.ProductRepository;
import com.backend.exclusive.repositories.UserRepository;
import com.backend.exclusive.services.CartService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class CartServiceImpl implements CartService {
    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Cart addItemToCart(ObjectId cartId, CartItemDTO cartItemDTO) {
        Optional<Cart> cartOpt = cartRepository.findById(cartId);
        Optional<Product> productOpt = productRepository.findById(new ObjectId(cartItemDTO.getProductId()));

        if (cartOpt.isEmpty()) throw new RuntimeException("Invalid Cart");

        if (productOpt.isEmpty()) throw new RuntimeException("Invalid Product");

        Cart cart = cartOpt.get();
        Product product = productOpt.get();

        List<CartItem> cartItems = cart.getCartItems();

        // Check if the product is already in the cart item in cart
        Optional<CartItem> existingItemOpt = cartItems.stream().filter(item -> item.getProduct().getId().equals(product.getId())).findFirst();

        if (existingItemOpt.isPresent()) {
            // Item already in cart, increase its quantity
            CartItem existingItem = existingItemOpt.get();
            existingItem.setQuantity(existingItem.getQuantity() + cartItemDTO.getQuantity());
            cartItemRepository.save(existingItem);
        } else {
            // Item not in cart, add new item
            CartItem newItem = new CartItem();
//            newItem.setCart(cart);
            newItem.setProduct(product);
            newItem.setQuantity(cartItemDTO.getQuantity());
            cartItems.add(newItem);
            cartItemRepository.save(newItem);
        }

        cart.setCartItems(cartItems);
        cartRepository.save(cart);
        return cart;
    }

    @Override
    public Cart removeItemFromCart(ObjectId cartId, CartItemDTO cartItemDTO) {
        Optional<Cart> cartOpt = cartRepository.findById(cartId);
        Optional<Product> productOpt = productRepository.findById(new ObjectId(cartItemDTO.getProductId()));

        if (cartOpt.isEmpty()) throw new RuntimeException("Invalid Cart");

        if (productOpt.isEmpty()) throw new RuntimeException("Invalid Product");

        Cart cart = cartOpt.get();
        Product product = productOpt.get();

        List<CartItem> cartItems = cart.getCartItems();

        // Check if the item is already in the cart
        Optional<CartItem> existingItemOpt = cartItems.stream().filter(item -> item.getProduct().getId().equals(product.getId())).findFirst();

        if (existingItemOpt.isPresent()) {
            CartItem existingItem = existingItemOpt.get();
            int currentQuantity = existingItem.getQuantity();
            int quantityToRemove = cartItemDTO.getQuantity();

            if (quantityToRemove >= currentQuantity) {
                // Remove item from cart if quantity to remove is greater than or equal to existing quantity
                cartItems.remove(existingItem);
            } else {
                // Update the quantity of the item in the cart
                existingItem.setQuantity(currentQuantity - quantityToRemove);
                cartItemRepository.save(existingItem);
            }

            cart.setCartItems(cartItems);
            // Update the cart in the repository
            cartRepository.save(cart);
            return cart;
        } else {
            // Handle the case where the item is not in the cart
            throw new RuntimeException("Item not found in cart");
        }
    }

    @Override
    public Cart createCart(CartDTO cartDTO) {
        Optional<User> userOpt = userRepository.findById(new ObjectId(cartDTO.getUserId()));

        if (userOpt.isEmpty()) throw new RuntimeException("User invalid");

        Cart cart = new Cart();
        cart.setUser(userOpt.get());
        if (cartDTO.getCartItems() != null) {
            List<CartItem> cartItems = new ArrayList<>();
            for (CartItemDTO cartItemDTO : cartDTO.getCartItems()) {
                CartItem cartItem = mapToCartItem(cartItemDTO);
//                cartItem.setCart(cart);
                cartItems.add(cartItem);
                cartItemRepository.save(cartItem);
            }
            cart.setCartItems(cartItems);
        } else {
            cart.setCartItems(null);
        }
        cart.setCreatedAt(new Date());

        cartRepository.save(cart);
        return cart;
    }

    private CartItem mapToCartItem(CartItemDTO cartItemDTO) {
        CartItem cartItem = new CartItem();
        cartItem.setProduct(productRepository.findById(new ObjectId(cartItemDTO.getProductId())).get());
        cartItem.setQuantity(cartItemDTO.getQuantity());
        return cartItem;
    }

    @Override
    public List<Cart> getAllCarts() {
        return cartRepository.findAll();
    }

    @Override
    public Optional<Cart> getCartById(ObjectId id) {
        return cartRepository.findById(id);
    }

    @Override
    public Optional<Cart> updateCart(ObjectId id, CartDTO cartDTO) {
        return cartRepository.findById(id).map(cart -> {

            List<CartItem> cartItems = new ArrayList<>();
            for (CartItemDTO cartItemDTO : cartDTO.getCartItems()) {
                CartItem cartItem = mapToCartItem(cartItemDTO);
//                cartItem.setCart(cart);
                cartItems.add(cartItem);
                cartItemRepository.save(cartItem);
            }
            cart.setCartItems(cartItems);

            cart.setUpdatedAt(new Date());
            return cartRepository.save(cart);
        });
    }

    @Override
    public void deleteCart(ObjectId id) {
        cartRepository.deleteById(id);
    }

    // Addition
    @Override
    public List<CartItem> getAllItemsInCart(ObjectId id) {
        Optional<Cart> optionalCart = cartRepository.findById(id);
        if (optionalCart.isEmpty()) {
            throw new RuntimeException("Invalid Cart");
        }
        return optionalCart.get().getCartItems();
    }

    @Override
    public Optional<Cart> getCartByUserId(ObjectId userId) {
        return cartRepository.findAll().stream().filter(item -> item.getUser().getId().equals(userId)).findFirst();
    }

    @Override
    public void removeAllItems(ObjectId id) {
        // Fetch the cart by its ID
        Optional<Cart> cartOpt = cartRepository.findById(id);

        // Check if the cart exists
        if (cartOpt.isEmpty()) {
            throw new RuntimeException("Invalid Cart");
        }

        Cart cart = cartOpt.get();

        // Clear all items from the cart
        List<CartItem> cartItems = cart.getCartItems();
        for (var item : cartItems) {
            cartItemRepository.deleteById(item.getId());
        }
        cartItems.clear();

        // Save the updated cart to the repository
        cart.setCartItems(cartItems);
        cartRepository.save(cart);
        System.out.println(cart);
    }
}
