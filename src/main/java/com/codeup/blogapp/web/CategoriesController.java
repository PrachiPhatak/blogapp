package com.codeup.blogapp.web;

import com.codeup.blogapp.data.Category;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api/categories", headers = "application/json")
public class CategoriesController {

    List<Category> categories;

    CategoriesController() {
        categories = new ArrayList<>();
        categories.add(new Category(1,"minimal living"));
        categories.add(new Category(2,"self development"));
        categories.add(new Category(3,"money"));
    }

    @GetMapping
    private List<Category> getCategories() {
        return categories;
    }

    private void createCategories(Category category){
        categories.add(category);
    }
}
