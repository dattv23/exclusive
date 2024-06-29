package com.backend.exclusive.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FeeRequestDTO {
    private String pick_province = "Thủ Đức";

    private String pick_district = "Hiệp Phú";

    @NotBlank
    private String province;

    @NotBlank
    private String district;

    @NotBlank
    private String address;

    private Integer weight = 1000;

    @NotNull
    private Integer value;

    private String transport = "road";
}
