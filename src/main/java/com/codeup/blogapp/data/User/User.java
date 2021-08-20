package com.codeup.blogapp.data.User;

import com.codeup.blogapp.data.Post.Post;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.Collection;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable=false, length = 100)
    private String userName;

    @Email
    @Column(nullable=false, length = 100)
    private String email;

    @Column(nullable=false, length = 100)
    private String password;

    private enum Role{USER, ADMIN};

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    public Role role = Role.USER;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "post")
    private Collection<Post> posts;

    public User() {
    }

    public User(long id, String userName, String email, String password) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    public User(long id, String userName, String email, String password, Collection<Post>posts) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.posts = posts;
    }

    public Long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
