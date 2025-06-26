// UserCustomerRepository.java
package com.magniship.backend.repository;

import com.magniship.backend.entity.UserCustomer;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserCustomerRepository extends JpaRepository<UserCustomer, Long> {
  Optional<UserCustomer> findByEmail(String email); // Cari user by email

  Optional<UserCustomer> findByNoHp(String noHp); // Cari user by noHp
}
