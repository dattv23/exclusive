$(document).ready(function() {
        loadProducts();
        $("#productForm").on('submit', function(e) {
            e.preventDefault();
            saveProduct();
        });
    });

    function loadProducts() {
        // Fetch categories first
        $.ajax({
            url: '/api/v1/categories/all',
            type: 'GET',
            success: function(categoryResponse) {
                // Create a lookup object for category IDs to names
                let categoryLookup = {};
                $.each(categoryResponse.data, function(index, category) {
                    categoryLookup[category.id] = category.name;
                });

                // Fetch products next
                $.ajax({
                    url: '/api/v1/products/all',
                    type: 'GET',
                    success: function(productResponse) {
                        let productList = '';
                        $.each(productResponse.data, function(index, product) {
                            let categoryName = categoryLookup[product.categoryId] || 'Unknown';
                            productList += `<tr>
                                                <td>${product.id}</td>
                                                <td>${product.name}</td>
                                                <td>${product.regularPrice}</td>
                                                <td>${product.shortDescription}</td>
                                                <td>${categoryName}</td>
                                                <td>
                                                    <button onclick="editProduct(${product.id})" class="btn btn-warning">Edit</button>
                                                    <button onclick="deleteProduct(${product.id})" class="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>`;
                        });
                        $('#productList').html(productList);
                    }
                });
            }
        });
    }


    function saveProduct() {
    debugger;
        const productData = {
            id: $('#productId').val(),
            name: $('#name').val(),
            price: $('#price').val(),
            description: $('#description').val()
        };
        const apiUrl = productData.id ? `/api/products/${productData.id}` : '/api/products/add';
        const apiType = productData.id ? 'PUT' : 'POST';

        $.ajax({
            url: apiUrl,
            type: apiType,
            contentType: 'application/json',
            data: JSON.stringify(productData),
            success: function() {
                resetForm();
                loadProducts();
            }
        });
    }

    function editProduct(id) {
        $.ajax({
            url: `/api/products/${id}`,
            type: 'GET',
            success: function(product) {
                $('#productId').val(product.id);
                $('#name').val(product.name);
                $('#price').val(product.price);
                $('#description').val(product.description);
            }
        });
    }

    function deleteProduct(id) {
        if (confirm('Are you sure you want to delete this product?')) {
            $.ajax({
                url: `/api/products/${id}`,
                type: 'DELETE',
                success: function() {
                    loadProducts();
                }
            });
        }
    }

    function resetForm() {
        $('#productId').val('');
        $('#name').val('');
        $('#price').val('');
        $('#description').val('');
    }