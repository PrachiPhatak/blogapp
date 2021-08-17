package com.codeup.blogapp.web;

import com.codeup.blogapp.data.User;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/users", headers = "Accept=application/json")
public class UsersController {

    private final Map<Integer, User> users;

    UsersController(){
        users = new HashMap<>();
        users.put(1,new User(1L, "Prachi", "prachi@codeup.com","*****"));
        users.put(2,new User(2L, "Casey", "casey@codeup.com","*****"));
    }

    @GetMapping("/{id}")
    private User findById(@PathVariable int id){
        System.out.println(users.get(id).getUserName());
        return users.get(id);
    }

    @GetMapping("findByUsername/{userName}")
    private User findByUserName(@PathVariable String userName){
        User user = new User();
        for(Map.Entry<Integer, User>userEntry : users.entrySet()){
            user = userEntry.getValue();
            System.out.println(userName);
            System.out.println(user.getUserName());
            System.out.println(user.getUserName().equals(userName));
            if(user.getUserName().equals(userName))
                return user;
        }
        return new User();
    }

    @GetMapping("findByEmail/{email}")
    private User findByUserEmail(@PathVariable String email){
        User user = new User();
        for(Map.Entry<Integer, User>userEntry : users.entrySet()){
            user = userEntry.getValue();
            if(user.getEmail().equals(email))
                return user;
        }
        return user;
    }

    @PostMapping
    private void createUser(@RequestBody User user){
        int id = users.size();
        user.setId(id);
        users.put(id, user);
    }

    @PutMapping
    private void updateUser(@RequestBody User user){
        users.replace((int) user.getId(), user);
    }

    @DeleteMapping("/{id}")
    private void deleteUser(@PathVariable int id){
        users.remove(id);
    }

}
