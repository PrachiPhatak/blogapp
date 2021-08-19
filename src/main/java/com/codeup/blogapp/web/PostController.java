package com.codeup.blogapp.web;

import com.codeup.blogapp.data.Category;
import com.codeup.blogapp.data.Post;
import com.codeup.blogapp.data.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api/posts", headers = "Accept=application/json")
public class PostController {

    private final ArrayList<Post> posts;
    private final User user;
    private final User user1;
    private final User user2;
    private final ArrayList<Category> categories;
    private final ArrayList<Category> categories1;
    private final ArrayList<Category> categories2;

    PostController() {
        categories = new ArrayList<>() {
            {
                add(new Category(1, "minimalism"));

            }
        };
        categories1 = new ArrayList<>() {
            {
                add(new Category(1, "habits"));

            }
        };
        categories2 = new ArrayList<>() {
            {
                add(new Category(1, "mindset"));

            }
        };
        user = new User(1L, "Marie", "marie@kondo.com", "authorPassword");
        user1 = new User(1L, "James Clear", "james@atomic.com", "authorPassword");
        user2 = new User(1L, "Carol Dweck", "carol@mindset.com", "authorPassword");
        posts = new ArrayList<>() {
            {
                add(new Post(0L, "Minimalism",
                        "Minimalism is all about living with less.", user, categories));
                add(new Post(1L, "Atomic Habits",
                        "Build a system for getting 1% better every day.", user1, categories1));
                add(new Post(2L, "Mindset",
                        "An example of a mindset is abundance versus scarcity", user2, categories2));

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
