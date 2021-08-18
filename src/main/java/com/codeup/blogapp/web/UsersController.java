package com.codeup.blogapp.web;

import com.codeup.blogapp.data.Post;
import com.codeup.blogapp.data.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/users", headers = "Accept=application/json")
public class UsersController {

    private final Map<Integer, User> users;
    private final List<Post> posts;

    UsersController() {
        users = new HashMap<>();
        users.put(1, new User(1L, "Prachi", "prachi@codeup.com", "*****"));
        users.put(2, new User(2L, "Casey", "casey@codeup.com", "*****"));
        users.put(3, new User(3L, "Admin", "admin@codeup.com", "*****"));
        posts = new ArrayList<Post>() {
            {
                add(new Post(0L, "Minimalism",
                        "Minimalism is all about living with less.", users.get(1)));
                add(new Post(1L, "Atomic Habits",
                        "Build a system for getting 1% better every day.", users.get(1)));
                add(new Post(2L, "Mindset",
                        "An example of a mindset is abundance versus scarcity", users.get(2)));

            }
        };

    }

    @GetMapping
    private User getUser() {
        return users.get(3);
    }

    @GetMapping("/{id}")
    private User findById(@PathVariable int id) {
        System.out.println(users.get(id).getUserName());
        return users.get(id);
    }

    @GetMapping("/findByUsername")
    private User findByUserName(@RequestParam String userName) {
        User user;
        for (Map.Entry<Integer, User> userEntry : users.entrySet()) {
            user = userEntry.getValue();
            System.out.println(userName);
            System.out.println(user.getUserName());
            System.out.println(user.getUserName().equals(userName));
            if (user.getUserName().equals(userName))
                return user;
        }
        return new User();
    }

    @GetMapping("findByEmail")
    private User findByUserEmail(@RequestParam String email) {
        User user = new User();
        for (Map.Entry<Integer, User> userEntry : users.entrySet()) {
            user = userEntry.getValue();
            if (user.getEmail().equals(email))
                return user;
        }
        return user;
    }

    @PostMapping
    private void createUser(@RequestBody User user) {
        int id = users.size();
        user.setId(id);
        users.put(id, user);

        System.out.println(user.getId());
        System.out.println(user.getUserName());
        System.out.println(user.getEmail());
        System.out.println(user.getPassword());
    }

    @PutMapping
    private void updateUser(@RequestBody User user) {
        users.replace((int) user.getId(), user);
    }

    @DeleteMapping("/{id}")
    private void deleteUser(@PathVariable int id) {
        users.remove(id);
    }

}
