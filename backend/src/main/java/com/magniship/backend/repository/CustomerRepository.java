package com.magniship.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.magniship.backend.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
