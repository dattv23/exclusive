package com.backend.exclusive.controllers;

import com.backend.exclusive.common.ApiResponse;
import com.backend.exclusive.common.ResponseUtil;
import com.backend.exclusive.dtos.PaymentMethodDTO;
import com.backend.exclusive.mappers.PaymentMethodMapper;
import com.backend.exclusive.models.PaymentMethod;
import com.backend.exclusive.services.PaymentMethodService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/payments")
public class PaymentController {

    @Autowired
    private PaymentMethodService paymentMethodService;

    @Autowired
    private PaymentMethodMapper paymentMethodMapper;

    /**
     * Get all PaymentMethods.
     *
     * @return a ResponseEntity containing a list of all PaymentMethods.
     */
    @GetMapping("/all")
    public ResponseEntity<ApiResponse<List<PaymentMethodDTO>>> getAllPaymentMethods() {
        List<PaymentMethod> paymentMethods = paymentMethodService.getAllPaymentMethods();

        List<PaymentMethodDTO> paymentMethodDTOS = new ArrayList<>();
        for (var item : paymentMethods) {
            paymentMethodDTOS.add(paymentMethodMapper.toPaymentMethodDTO(item));
        }

        return ResponseUtil.success(paymentMethodDTOS);
    }

    /**
     * Get all deleted PaymentMethods.
     *
     * @return a ResponseEntity containing a list of all deleted PaymentMethods.
     */
    @GetMapping("/deleted")
    public ResponseEntity<ApiResponse<List<PaymentMethodDTO>>> getAllDeletedPaymentMethods() {
        List<PaymentMethod> paymentMethods = paymentMethodService.getDeletedPaymentMethods();

        List<PaymentMethodDTO> paymentMethodDTOS = new ArrayList<>();
        for (var item : paymentMethods) {
            paymentMethodDTOS.add(paymentMethodMapper.toPaymentMethodDTO(item));
        }

        return ResponseUtil.success(paymentMethodDTOS);
    }

    /**
     * Get a PaymentMethod by its ID.
     *
     * @param id the ID of the PaymentMethod to retrieve.
     * @return a ResponseEntity containing the PaymentMethod, or a 404 status if not found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<PaymentMethodDTO>> getPaymentMethodById(@PathVariable String id) {
        Optional<PaymentMethod> paymentMethod = paymentMethodService.getPaymentMethodById(new ObjectId(id));

        if (paymentMethod.isPresent()) {
            PaymentMethodDTO paymentMethodDTO = paymentMethodMapper.toPaymentMethodDTO(paymentMethod.get());
            return ResponseUtil.success(paymentMethodDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Create a new PaymentMethod.
     *
     * @param paymentMethodDTO the PaymentMethod to create.
     * @return a ResponseEntity containing the created PaymentMethod.
     */
    @PostMapping("/add")
    public ResponseEntity<ApiResponse<PaymentMethodDTO>> createPaymentMethod(@Validated @RequestBody PaymentMethodDTO paymentMethodDTO) {
        PaymentMethod createdPaymentMethod = paymentMethodService.createPaymentMethod(paymentMethodDTO);
        return ResponseUtil.success(paymentMethodMapper.toPaymentMethodDTO(createdPaymentMethod));
    }

    /**
     * Update an existing PaymentMethod.
     *
     * @param id               the ID of the PaymentMethod to update.
     * @param paymentMethodDTO the new details for the PaymentMethod.
     * @return a ResponseEntity containing the updated PaymentMethod.
     */
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<PaymentMethodDTO>> updatePaymentMethod(@PathVariable String id, @Validated @RequestBody PaymentMethodDTO paymentMethodDTO) {
        Optional<PaymentMethod> updatedMethod = paymentMethodService.updatePaymentMethod(new ObjectId(id), paymentMethodDTO);

        if (updatedMethod.isPresent()) {
            return ResponseUtil.success(paymentMethodMapper.toPaymentMethodDTO(updatedMethod.get()));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Delete an existing PaymentMethod.
     *
     * @param id the ID of the PaymentMethod to delete.
     * @return a ResponseEntity indicating the outcome of the deletion.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deletePaymentMethod(@PathVariable String id) {
        try {
            paymentMethodService.deletePaymentMethod(new ObjectId(id));
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
