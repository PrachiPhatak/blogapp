package com.codeup.blogapp.data.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UsersRepository extends JpaRepository<User, Long> {
    User findByUserName(String userName);

    Optional<User> findByEmail(String email);
}
