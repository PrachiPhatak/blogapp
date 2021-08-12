package com.codeup.blogapp;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {

    @GetMapping("/hello")
    @ResponseBody
    public String hello() {
        return "Hello, from Spring!";
    }


    @GetMapping("/person")
    @ResponseBody
    public Person getPerson() {
        return new Person("Prachi", "Mom");
}

    @GetMapping("/hello/{name}")
    @ResponseBody
    public String sayHello(@PathVariable String name) {
        return "Hello, " + name  + "!";
    }

    @GetMapping("/hello/{name}/{lastName}")
    @ResponseBody
    public String sayHello(@PathVariable String name, @PathVariable String lastName) {
        return "Hello, " + name + " " + lastName + "!";
    }

    @GetMapping("/hello/{name}{lastName}")
    @ResponseBody
    public String sayHelloWithNoBackslash(@PathVariable String name, @PathVariable String lastName) {
        return "Hello, " + name + " " + lastName + "!";
    }

//    @GetMapping("/home")
//    public String welcome(){
//        return "home";
//    }

}
