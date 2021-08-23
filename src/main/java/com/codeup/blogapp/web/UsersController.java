package com.codeup.blogapp.web;

import com.codeup.blogapp.data.User.User;
import com.codeup.blogapp.data.User.UsersRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/users", headers = "Accept=application/json")
public class UsersController {

    private final UsersRepository usersRepository;

    UsersController(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    @GetMapping("/{id}")
    private User getUser(@PathVariable long id) {
        return usersRepository.findById(id).get();
    }

    @GetMapping("/findByUsername")
    private User findByUserName(@RequestParam String userName) {
        return new User();
    }

    @GetMapping("findByEmail")
    private User findByUserEmail(@RequestParam String email) {
        return null;
    }

    @PostMapping
    private void createUser(@RequestBody User user) {
        System.out.println(user.getId());
        System.out.println(user.getUserName());
        System.out.println(user.getEmail());
        System.out.println(user.getPassword());
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
