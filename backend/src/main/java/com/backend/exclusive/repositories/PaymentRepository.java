package com.backend.exclusive.repositories;

import com.backend.exclusive.models.Payment;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Date;
import java.util.List;

public interface PaymentRepository extends MongoRepository<Payment, ObjectId> {
    @Query("{ 'status': 'Success', 'createdAt': { $gte: ?0, $lt: ?1 } }")
    List<Payment> findSuccessfulPaymentsBetweenDates(Date startDate, Date endDate);

    @Aggregation(pipeline = {
            "{ $match: { 'order.orderItems.product.category.id': ?0, 'status': 'Success' } }",
            "{ $group: { _id: null, totalRevenue: { $sum: '$amount' } } }"
    })
    Double calculateTotalRevenueByCategory(ObjectId categoryId);

    List<Payment> findByStatus(String status);
}
