package com.backend.exclusive.dtos;

import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SpecificationDTO {

    @Min(value = 0, message = "Width must be positive")
    private int width;

    @Min(value = 0, message = "Height must be positive")
    private int height;

    @Min(value = 0, message = "Depth must be positive")
    private int depth;

    @Min(value = 0, message = "Weight must be positive")
    private int weight;

    private boolean qualityChecking;
    private int freshnessDuration;
    private Date whenPacketing;
}
