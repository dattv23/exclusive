package com.backend.exclusive.controllers.api;

import com.backend.exclusive.common.ApiResponse;
import com.backend.exclusive.common.ResponseUtil;
import com.backend.exclusive.dtos.FeeRequestDTO;
import com.backend.exclusive.services.GhtkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/shipping")
public class ShippingController {

    @Autowired
    private GhtkService ghtkService;

    @PostMapping("/fee")
    public ResponseEntity<ApiResponse<String>> calculateShippingFee(@RequestBody FeeRequestDTO feeRequest) {

        String jsonString = ghtkService.calculateShippingFee(feeRequest);
        String feeShip = null;
        // Find the index of "shipMoney"
        int index = jsonString.indexOf("\"shipMoney\":");
        if (index != -1) {
            // Extract the substring starting from "shipMoney"
            String remaining = jsonString.substring(index + "\"shipMoney\":".length());

            // Find the end of the number
            int endIndex = remaining.indexOf(',');
            if (endIndex == -1) {
                endIndex = remaining.indexOf('}');
            }

            if (endIndex != -1) {
                String shipMoneyValue = remaining.substring(0, endIndex).trim();
                System.out.println("Ship Money Value: " + shipMoneyValue);
                feeShip = shipMoneyValue;
            }
        } else {
            System.out.println("No shipMoney found in the string.");
            feeShip = null;
        }
        return ResponseUtil.success(feeShip);
    }
}
