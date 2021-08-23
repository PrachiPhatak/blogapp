package com.codeup.blogapp.web;

import com.codeup.blogapp.data.Post.Post;
import com.codeup.blogapp.data.Post.PostsRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/posts", headers = "Accept=application/json")
public class PostController {

    private final PostsRepository postsRepository;

    PostController(PostsRepository postsRepository) {
        this.postsRepository = postsRepository;
    }

    @GetMapping
    private List<Post> getPosts() {
        return postsRepository.findAll();
    }

    @GetMapping("/{id}")
    private Post getPostById(@PathVariable long id) {
        return postsRepository.findById(id).get();
    }

    @PostMapping
    private void createPost(@RequestBody Post post) {
        System.out.println(post.getTitle());
        System.out.println(post.getContent());
        System.out.println(post.getUser().getUserName());
       postsRepository.save(post);
    }

    @PutMapping
    private void updatePost(@RequestBody Post post) {
        postsRepository.save(post);
    }

    @DeleteMapping("/{id}")
    private void deletePost(@PathVariable long id) {
        postsRepository.deleteById(id);
    }
}
