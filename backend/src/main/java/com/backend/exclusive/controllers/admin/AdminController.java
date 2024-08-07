package com.backend.exclusive.controllers.admin;

import com.backend.exclusive.dtos.CategoryDTO;
import com.backend.exclusive.dtos.OrderDTO;
import com.backend.exclusive.dtos.ProductDTO;
import com.backend.exclusive.dtos.UserDTO;
import com.backend.exclusive.mappers.CategoryMapper;
import com.backend.exclusive.mappers.OrderMapper;
import com.backend.exclusive.mappers.ProductMapper;
import com.backend.exclusive.mappers.UserMapper;
import com.backend.exclusive.models.OrderItem;
import com.backend.exclusive.models.Product;
import com.backend.exclusive.models.User;
import com.backend.exclusive.models.UserRole;
import com.backend.exclusive.repositories.CategoryRepository;
import com.backend.exclusive.repositories.OrderRepository;
import com.backend.exclusive.repositories.ProductRepository;
import com.backend.exclusive.services.*;
import jakarta.validation.Valid;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/api/v1/admin")
public class AdminController {

    @Autowired
    private ProductService productService;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private CloudinaryService cloudinaryService;

    @Autowired
    private ProductMapper productMapper;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryMapper categoryMapper;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private OrderService orderService;

    @Autowired
    private OrderMapper orderMapper;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private PaymentService paymentService;

    @Autowired
    private UserMapper userMapper;

    @GetMapping
    public String index(Model model) {
        model.addAttribute("ordersCount", orderService.ordersPending().stream().count());
        model.addAttribute("categories", categoryService.getAllCategories());

        // Define the color array and add it to the model
        String[] colors = {"#4e73df", "#1cc88a", "#36b9cc", "#f6c23e", "#e74a3b", "#858796", "#5a5c69", "#f8f9fc"};
        model.addAttribute("colors", colors);

        model.addAttribute("earningThisMonth", paymentService.getThisMonthEarnings().intValue());
        model.addAttribute("earningAnnual", paymentService.getAnnualEarnings().intValue());
        return "admin/index";
    }

    //    user part
    @GetMapping("/user")
    public String listUsers(Model model) {
        model.addAttribute("users", userService.getAll());
        return "admin/user/index";
    }

    @GetMapping("/login")
    public String login() {
        return "admin/login";
    }

//    @GetMapping("/users/new")
//    public String showCreateUserForm(Model model) {
//        model.addAttribute("user", new UserDTO());
//        return "admin/user/create";
//    }
//
//    @PostMapping("/users")
//    public String createUser(@ModelAttribute("user") @Valid UserDTO userDTO, BindingResult result) {
//        if (result.hasErrors()) {
//            return "admin/user/create";
//        }
//        userService.create(userDTO);
//        return "redirect:/api/v1/admin/user";
//    }

    @GetMapping("/users/edit/{id}")
    public String showUpdateUserForm(@PathVariable("id") String id, Model model) {
        User user = userService.getById(new ObjectId(id));
        UserDTO userDTO = userMapper.convertToUserDto(user);
        model.addAttribute("user", userDTO);

        model.addAttribute("roles", new String[]{"USER", "ADMIN"});
        return "admin/user/edit";
    }


    @PostMapping("/users/edit/{id}")
    public String updateUser(@PathVariable("id") String id,
                             @ModelAttribute("user") @Valid UserDTO userDTO,
                             BindingResult result,
                             @RequestParam("role") String role) {
        UserRole userRole = UserRole.valueOf(role.toUpperCase());

        userService.update(new ObjectId(id), userDTO);
        userService.assignRole(new ObjectId(id), userRole);
        return "redirect:/api/v1/admin/user";
    }

    @GetMapping("/users/delete/{id}")
    public String deleteUser(@PathVariable("id") String id) {
        userService.delete(new ObjectId(id));
        return "redirect:/api/v1/admin/user";
    }

    //    product part
    // list
    @GetMapping("/product")
    public String listProducts(Model model) {
        model.addAttribute("products", productService.getAll());
        return "admin/product/index";
    }

    // create
    @GetMapping("/products/new")
    public String showCreateProductForm(Model model) {
        model.addAttribute("product", new ProductDTO());
        model.addAttribute("categories", categoryService.getAllCategories());
        return "admin/product/create";
    }

    @PostMapping("/products")
    public String createProduct(@ModelAttribute("product") @Valid ProductDTO productDTO,
                                BindingResult result, Model model,
                                @RequestParam("imageFile") MultipartFile image) throws IOException {
        System.out.println(result);
        if (result.hasErrors()) {
            return "admin/product/create";
        }
        productDTO.setImageUrl(cloudinaryService.uploadImage(image));
        productDTO.setCategoryName(categoryService.getCategoryById(new ObjectId(productDTO.getCategoryId())).get().getName());
        productService.create(productDTO, productDTO.getImageUrl());
        return "redirect:/api/v1/admin/product";
    }

    // edit
    @GetMapping("/products/edit/{id}")
    public String showUpdateProductForm(@PathVariable("id") String id, Model model) {
        Product product = productService.getById(new ObjectId(id)).get();
        ProductDTO productDTO = productMapper.toProductDTO(product);
        productDTO.setRate(product.getRate());
        productDTO.setNumberOfRate(product.getNumberOfRate());
        productDTO.setStatus(product.getStatus());
        model.addAttribute("product", productDTO);
        model.addAttribute("categories", categoryService.getAllCategories());
        return "admin/product/edit";
    }

    @PostMapping("/products/edit/{id}")
    public String updateProduct(@PathVariable("id") String id,
                                @ModelAttribute("product") @Valid ProductDTO productDTO,
                                BindingResult result,
                                Model model,
                                @RequestParam("imageFile") MultipartFile image) throws IOException {
        System.out.println(result);
        System.out.println(productDTO);
        if (result.hasErrors()) {
            return "admin/product/edit";
        }

        if (!image.isEmpty()) {
            productDTO.setImageUrl(cloudinaryService.uploadImage(image));
            productDTO.setCategoryName(categoryService.getCategoryById(new ObjectId(productDTO.getCategoryId())).get().getName());
            productService.update(new ObjectId(id), productDTO, productDTO.getImageUrl());
        } else {
            productDTO.setCategoryName(categoryService.getCategoryById(new ObjectId(productDTO.getCategoryId())).get().getName());
            productService.update(new ObjectId(id), productDTO);
        }
        return "redirect:/api/v1/admin/product";
    }

    // delete
    @GetMapping("/products/delete/{id}")
    public String deleteProduct(@PathVariable("id") String id) {
        productService.delete(new ObjectId(id));
        return "redirect:/api/v1/admin/product";
    }

    // set discount
    @GetMapping("/products/discount")
    public String discountProducts(Model model) {
        model.addAttribute("categories", categoryService.getAllCategories());
        return "admin/product/discount";
    }

    @PostMapping("/products/discount")
    public String discountProducts(@RequestParam(required = false) String category,
                                   @RequestParam(required = false) String status,
                                   @RequestParam double discount) {
        System.out.println(category + status + discount);
        if (category.isEmpty() && status.isEmpty()) {
            System.out.println(1);
            productService.setDiscountAll(discount);
        } else if (category.isEmpty()) {
            System.out.println(2);
            productService.setDiscountForStatus(status, discount);
        } else if (status.isEmpty()) {
            System.out.println(3);
            productService.setDiscountForCategoryName(category, discount);
        } else {
            System.out.println(4);
            productService.setDiscountForCategoryNameAndStatus(category, status, discount);
        }
        return "redirect:/api/v1/admin/product";
    }

    //    category part
    @GetMapping("/category")
    public String listCategories(Model model) {
        model.addAttribute("categorise", categoryService.getAllCategories());
        System.out.println(categoryService.getAllCategories());
        return "admin/category/index";
    }

    // create
    @GetMapping("/categories/new")
    public String showCreateCategoryForm(Model model) {
        model.addAttribute("category", new CategoryDTO());
        return "admin/category/create";
    }

    @PostMapping("/categories")
    public String createCategory(@ModelAttribute("category") @Valid CategoryDTO categoryDTO, BindingResult result, Model model) {
        System.out.println(result);
        if (result.hasErrors()) {
            return "admin/category/create";
        }
        categoryRepository.save(categoryMapper.toCategory(categoryDTO));
        return "redirect:/api/v1/admin/category";
    }

    // edit
    @GetMapping("/categories/edit/{id}")
    public String showUpdateCategoryForm(@PathVariable("id") String id, Model model) {
        CategoryDTO categoryDTO = categoryMapper.toCategoryDTO(categoryService.getCategoryById(new ObjectId(id)).get());
        model.addAttribute("category", categoryDTO);
        return "admin/category/edit";
    }

    @PostMapping("/categories/edit/{id}")
    public String updateCategory(@PathVariable("id") String id, @ModelAttribute("category") @Valid CategoryDTO categoryDTO, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "admin/category/edit";
        }
        categoryService.updateCategory(new ObjectId(id), categoryDTO);
        return "redirect:/api/v1/admin/category";
    }

    // delete
    @GetMapping("/categories/delete/{id}")
    public String deleteCategory(@PathVariable("id") String id) {
        categoryService.deleteCategory(new ObjectId(id));
        return "redirect:/api/v1/admin/category";
    }

    //    order part
    @GetMapping("/order")
    public String listOrders(Model model) {
        model.addAttribute("orders", orderService.getAllOrders());
        return "admin/order/index";
    }

    // show items
    @GetMapping("/orders/view/{id}")
    public String showOrderItems(@PathVariable("id") String id, Model model) {
        List<OrderItem> orderItemDTOList = orderService.getAllItemsInOrder(new ObjectId(id));
        model.addAttribute("orderItems", orderItemDTOList);
        return "admin/order/view";
    }

    // create
    @GetMapping("/orders/new")
    public String showCreateOrderForm(Model model) {
        model.addAttribute("order", new OrderDTO());
        return "admin/order/create";
    }

    @PostMapping("/orders")
    public String createOrder(@ModelAttribute("order") @Valid OrderDTO orderDTO, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "admin/order/create";
        }
        orderRepository.save(orderMapper.toOrder(orderDTO));
        return "redirect:/api/v1/admin/order";
    }

    // edit
    @GetMapping("/orders/edit/{id}")
    public String showUpdateOrderForm(@PathVariable("id") String id, Model model) {
        OrderDTO orderDTO = orderMapper.toOrderDTO(orderService.getOrderById(new ObjectId(id)).get());
        model.addAttribute("order", orderDTO);
        model.addAttribute("status", new String[]{"Pending", "Delivering", "Completed", "Cancelled"});
        return "admin/order/edit";
    }

    @PostMapping("/orders/edit/{id}")
    public String updateOrder(@PathVariable("id") String id, @ModelAttribute("order") @Valid OrderDTO orderDTO, BindingResult result, Model model) {
        orderService.updateStatus(new ObjectId(id), orderDTO.getStatus());
        return "redirect:/api/v1/admin/order";
    }

    // delete
    @GetMapping("/orders/delete/{id}")
    public String deleteOrder(@PathVariable("id") String id) {
        orderService.deleteOrder(new ObjectId(id));
        return "redirect:/api/v1/admin/order";
    }
}
