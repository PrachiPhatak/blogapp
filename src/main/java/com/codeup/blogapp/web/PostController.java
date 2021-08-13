package com.codeup.blogapp.web;

import com.codeup.blogapp.data.Post;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api/posts", headers = "Accept=application/json")
public class PostController {

    private final ArrayList<Post> posts;

    PostController() {
        posts = new ArrayList<Post>() {
            {
                add(new Post(0L, "Minimalism", "Minimalism is all about living with less."));
                add(new Post(1L, "Atomic Habits", "Build a system for getting 1% better every day."));
                add(new Post(2L, "Mindset", "An example of a mindset is abundance versus scarcity"));

            }
        };
    }

    @GetMapping
    private List<Post> getPosts() {
        return posts;
    }

    @GetMapping("/{id}")
    private Post getPostById(@PathVariable int id) {
        return posts.get(id);
    }

    @PostMapping(produces = "application/json")
    private void createPost(@RequestBody Post post) {
        int id = posts.size();
        post.setId((long) id);
        posts.add(post);
        System.out.println(post.getTitle());
    }

    @PutMapping
    private void updatePost(@RequestBody Post post) {
        posts.set(Math.toIntExact(post.getId()), post);
    }

    @DeleteMapping("/{id}")
    private void deletePost(@PathVariable int id) {
        posts.removeIf(post -> post.getId() == id);
    }
}
