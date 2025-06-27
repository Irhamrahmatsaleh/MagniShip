package com.magniship.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.magniship.backend.entity.Customer;
import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
  Optional<Customer> findByNama(String nama);
}
