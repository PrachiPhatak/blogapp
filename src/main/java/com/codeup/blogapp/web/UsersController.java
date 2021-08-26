package com.codeup.blogapp.web;

import com.codeup.blogapp.data.User.User;
import com.codeup.blogapp.data.User.UsersRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping(value = "/api/users", headers = "Accept=application/json")
public class UsersController {

    private final UsersRepository usersRepository;
    private final PasswordEncoder passwordEncoder;

    UsersController(UsersRepository usersRepository, PasswordEncoder passwordEncoder) {
        this.usersRepository = usersRepository;
        this.passwordEncoder = passwordEncoder;
    }


    @GetMapping
    private Collection<User> getUser() {
        return usersRepository.findAll();
    }

    @GetMapping("/{id}")
    private User getUser(@PathVariable long id) {
        return usersRepository.findById(id).get();
    }

    @GetMapping("/findByUsername")
    private User findByUserName(@RequestParam String userName) {
        return usersRepository.findByUserName(userName);
    }

    @GetMapping("findByEmail")
    private User findByUserEmail(@RequestParam String email) {
        return usersRepository.findByEmail(email).get();
    }

    @PostMapping("/create")
    private void createUser(@RequestBody User user) {
        System.out.println(user.getId());
        System.out.println(user.getUserName());
        System.out.println(user.getEmail());
        System.out.println(user.getPassword());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        usersRepository.save(user);
    }

    @PutMapping
    private void updateUser(@RequestBody User user) {
        usersRepository.save(user);
    }

    @DeleteMapping("/{id}")
    private void deleteUser(@PathVariable long id) {
        usersRepository.deleteById(id);

    }

}
