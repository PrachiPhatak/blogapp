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
