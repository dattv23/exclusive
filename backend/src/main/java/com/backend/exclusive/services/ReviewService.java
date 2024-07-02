package com.backend.exclusive.services;

import com.backend.exclusive.dtos.ReviewDTO;
import com.backend.exclusive.models.Review;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Optional;

public interface ReviewService {
    List<Review> getAllReviews();

    Optional<Review> getReviewById(ObjectId id);

    Review createReview(ReviewDTO review);

    Review updateReview(ObjectId id, ReviewDTO reviewDetails);

    void deleteReview(ObjectId id);
}
