package com.shipbigger.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shipbigger.backend.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
