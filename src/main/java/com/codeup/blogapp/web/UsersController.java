package com.codeup.blogapp.web;

import com.codeup.blogapp.data.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/users", headers = "Accept=application/json")
public class UsersController {

    private final Map<Integer, User> users;

    UsersController(){
        users = new HashMap<>();
        users.put(1,new User(1L, "Prachi", "prachi@codeup.com","*****"));
    }

    @GetMapping("/{id}")
    private User findById(@PathVariable int id){
        System.out.println(users.get(id).getUserName());
        return users.get(id);
    }

//    @GetMapping("/{userName}")
//    private User findByUserName(@PathVariable String userName){
//        User user = new User();
//        for(Map.Entry<Integer, User>userEntry : users.entrySet()){
//            user = userEntry.getValue();
//            if(user.getUserName().equals(userName))
//                return user;
//        }
//        return user;
//    }
//
//    @GetMapping("/{email}")
//    private User findByUserEmail(@PathVariable String email){
//        User user = new User();
//        for(Map.Entry<Integer, User>userEntry : users.entrySet()){
//            user = userEntry.getValue();
//            if(user.getEmail().equals(email))
//                return user;
//        }
//        return user;
//    }


}
