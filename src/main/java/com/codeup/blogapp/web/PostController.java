package com.codeup.blogapp.web;

import com.codeup.blogapp.data.Post;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api/posts", headers = "Accept=application/json")
public class PostController {

    @GetMapping
    private List<Post> getPosts() {
        return new ArrayList<>() {
            {
                add(new Post(1L, "Minimalism", "Marie Kondo"));
                add(new Post(2L, "Atomic Habits", "James Clear"));
                add(new Post(3L, "Mindset", "Carol Dwek"));

            }
        };
    }

    @GetMapping("/{id}")
    private Post getPostById(@PathVariable int id){
        ArrayList<Post> posts = new ArrayList<>() {
            {
                add(new Post(1L, "Minimalism", "Marie Kondo"));
                add(new Post(2L, "Atomic Habits", "James Clear"));
                add(new Post(3L, "Mindset", "Carol Dwek"));

            }
        };

        return posts.get(id);
    }

}
