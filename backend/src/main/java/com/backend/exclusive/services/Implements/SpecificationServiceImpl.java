package com.backend.exclusive.services.Implements;

import com.backend.exclusive.models.Specification;
import com.backend.exclusive.repositories.SpecificationRepository;
import com.backend.exclusive.services.SpecificationService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SpecificationServiceImpl implements SpecificationService {

    private final SpecificationRepository specificationRepository;

    @Autowired
    public SpecificationServiceImpl(SpecificationRepository specificationRepository) {
        this.specificationRepository = specificationRepository;
    }

    @Override
    public List<Specification> getAll() {
        return specificationRepository.findAll();
    }

    @Override
    public Optional<Specification> getById(ObjectId id) {
        return specificationRepository.findById(id);
    }

    @Override
    public Specification create(Specification specification) {
        Specification newSpecification = new Specification();
        newSpecification.setWidth(specification.getWidth());
        newSpecification.setHeight(specification.getHeight());
        newSpecification.setDepth(specification.getDepth());
        newSpecification.setQualityChecking(specification.isQualityChecking());
        newSpecification.setFreshnessDuration(specification.getFreshnessDuration());
        newSpecification.setWhenPacketing(specification.getWhenPacketing());
        return specificationRepository.save(specification);
    }

    @Override
    public Specification update(ObjectId id, Specification specificationDetails) {
        Optional<Specification> optionalSpecification = specificationRepository.findById(id);
        if (optionalSpecification.isPresent()) {
            Specification specification = optionalSpecification.get();
            specification.setWidth(specificationDetails.getWidth());
            specification.setHeight(specificationDetails.getHeight());
            specification.setDepth(specificationDetails.getDepth());
            specification.setWeight(specificationDetails.getWeight());
            specification.setQualityChecking(specificationDetails.isQualityChecking());
            specification.setFreshnessDuration(specificationDetails.getFreshnessDuration());
            specification.setWhenPacketing(specificationDetails.getWhenPacketing());
            return specificationRepository.save(specification);
        } else {
            throw new RuntimeException("Specification not found");
        }
    }

    @Override
    public void delete(ObjectId id) {
        specificationRepository.deleteById(id);
    }
}
