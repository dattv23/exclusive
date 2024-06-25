package com.backend.exclusive.controllers;

import com.backend.exclusive.models.Specification;
import com.backend.exclusive.services.SpecificationService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing specifications.
 */
@RestController
@RequestMapping("/api/v1/specifications")
public class SpecificationsController {

    private final SpecificationService specificationService;

    @Autowired
    public SpecificationsController(SpecificationService specificationService) {
        this.specificationService = specificationService;
    }

    /**
     * Get all specifications.
     *
     * @return a ResponseEntity containing a list of all specifications.
     */
    @GetMapping("/all")
    public ResponseEntity<List<Specification>> allSpecifications() {
        List<Specification> specifications = specificationService.getAll();
        return ResponseEntity.ok(specifications);
    }

    /**
     * Get a specification by its ID.
     *
     * @param id the ID of the specification to retrieve.
     * @return a ResponseEntity containing the specification, or a 404 status if not found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Specification> getSpecificationById(@PathVariable String id) {
        Optional<Specification> specification = specificationService.getById(new ObjectId(id));
        return specification.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    /**
     * Create a new specification.
     *
     * @param specification the specification to create.
     * @return a ResponseEntity containing the created specification.
     */
    @PostMapping("/add")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Specification> createSpecification(@Validated @RequestBody Specification specification) {
        Specification createdSpecification = specificationService.create(specification);
        return ResponseEntity.ok(createdSpecification);
    }

    /**
     * Update an existing specification.
     *
     * @param id                the ID of the specification to update.
     * @param specificationDetails the new details for the specification.
     * @return a ResponseEntity containing the updated specification.
     */
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Specification> updateSpecification(@PathVariable String id, @Validated @RequestBody Specification specificationDetails) {
        Specification updatedSpecification = specificationService.update(new ObjectId(id), specificationDetails);
        return ResponseEntity.ok(updatedSpecification);
    }

    /**
     * Delete a specification by its ID.
     *
     * @param id the ID of the specification to delete.
     * @return a ResponseEntity with no content status.
     */
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteSpecification(@PathVariable String id) {
        specificationService.delete(new ObjectId(id));
        return ResponseEntity.noContent().build();
    }
}
