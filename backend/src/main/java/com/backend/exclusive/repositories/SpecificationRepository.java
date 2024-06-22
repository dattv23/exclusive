package com.backend.exclusive.repositories;

import com.backend.exclusive.models.Specification;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SpecificationRepository extends MongoRepository<Specification, ObjectId> {
}
