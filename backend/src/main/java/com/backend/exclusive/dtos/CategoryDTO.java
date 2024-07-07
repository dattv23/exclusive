package com.backend.exclusive.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document
public class CategoryDTO {
    private String id;

    private String parentId;

    @NotBlank(message = "Name is mandatory")
    private String name;

    private String description;

    private String slug;

    private List<ProductDTO> productDTOList;
}
