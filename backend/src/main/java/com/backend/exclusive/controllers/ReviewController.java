package com.backend.exclusive.controllers;

import com.backend.exclusive.dtos.ReviewDTO;
import com.backend.exclusive.models.Review;
import com.backend.exclusive.services.ReviewService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    /**
     * Get all Reviews.
     *
     * @return a ResponseEntity containing a list of all Reviews.
     */
    @GetMapping("/all")
    public ResponseEntity<List<Review>> allReviews() {
        List<Review> Reviews = reviewService.getAllReviews();
        return ResponseEntity.ok(Reviews);
    }

    /**
     * Get a Review by its ID.
     *
     * @param id the ID of the Review to retrieve.
     * @return a ResponseEntity containing the Review, or a 404 status if not found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Review> getReviewById(@PathVariable String id) {
        Optional<Review> Review = reviewService.getReviewById(new ObjectId(id));
        return Review.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    /**
     * Create a new Review.
     *
     * @param Review the Review to create.
     * @return a ResponseEntity containing the created Review.
     */
    @PostMapping("/add")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Review> createReview(@Validated @RequestBody ReviewDTO Review) {
        Review createdReview = reviewService.createReview(Review);
        return ResponseEntity.ok(createdReview);
    }

    /**
     * Update an existing Review.
     *
     * @param id        the ID of the product to update.
     * @param reviewDTO the new details for the product.
     * @return a ResponseEntity containing the updated product.
     */
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Review> updateProduct(@PathVariable String id, @Validated @RequestBody ReviewDTO reviewDTO) {
        Review updatedReivew = reviewService.updateReview(new ObjectId(id), reviewDTO);
        return ResponseEntity.ok(updatedReivew);
    }
}
