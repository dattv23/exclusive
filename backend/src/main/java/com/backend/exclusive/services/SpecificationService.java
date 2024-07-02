package com.backend.exclusive.services;

import com.backend.exclusive.models.Specification;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Optional;

public interface SpecificationService {
    List<Specification> getAll();
    Optional<Specification> getById(ObjectId id);
    Specification create(Specification specification);
    Specification update(ObjectId id, Specification specificationDetails);
    void delete(ObjectId id);
}
