package com.codeup.blogapp.web;

import com.codeup.blogapp.data.Category.Category;
import com.codeup.blogapp.data.Category.CategoryRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/categories", headers = "Accepts=application/json")
public class CategoriesController {

    private final CategoryRepository categoryRepository;

    CategoriesController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @GetMapping
    private List<Category> getCategories() {
        return categoryRepository.findAll();
    }

    @PostMapping
    private void createCategories(Category category){
        categoryRepository.save(category);
    }

    @PutMapping
    private void updateCategory(Category category){
        categoryRepository.save(category);
    }

    @DeleteMapping
    private void deleteCategory(@PathVariable long id){
        categoryRepository.deleteById(id);
    }
}
