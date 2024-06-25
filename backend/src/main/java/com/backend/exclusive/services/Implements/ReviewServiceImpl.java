package com.backend.exclusive.services.Implements;

import com.backend.exclusive.dtos.ReviewDTO;
import com.backend.exclusive.models.Review;
import com.backend.exclusive.repositories.ProductRepository;
import com.backend.exclusive.repositories.ReviewRepository;
import com.backend.exclusive.repositories.UserRepository;
import com.backend.exclusive.services.ReviewService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ReviewServiceImpl implements ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    @Override
    public Optional<Review> getReviewById(ObjectId id) {
        return reviewRepository.findById(id);
    }

    @Override
    public Review createReview(ReviewDTO reviewDTO) {
        Review newReview = new Review();
        newReview.setUser(userRepository.findById(new ObjectId(reviewDTO.getUserId())).get());
        newReview.setProduct(productRepository.findById(new ObjectId(reviewDTO.getProductId())).get());
        newReview.setRating(reviewDTO.getRating());
        newReview.setComment(reviewDTO.getComment());
        newReview.setCreatedAt(new Date());
        return reviewRepository.save(newReview);
    }

    @Override
    public Review updateReview(ObjectId id, ReviewDTO reviewDTO) {
        Optional<Review> reviewOpt = this.getReviewById(id);
        if (reviewOpt.isEmpty()) {
            throw new RuntimeException("Review invalid");
        }

        Review updateReview = reviewOpt.get();
        updateReview.setRating(reviewDTO.getRating());
        updateReview.setComment(reviewDTO.getComment());
        updateReview.setUpdatedAt(new Date());

        return reviewRepository.save(updateReview);
    }


    @Override
    public void deleteReview(ObjectId id) {
        reviewRepository.deleteById(id);
    }
}
