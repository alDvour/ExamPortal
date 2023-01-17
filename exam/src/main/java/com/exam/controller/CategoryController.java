package com.exam.controller;

import java.security.PublicKey;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.model.Category;
import com.exam.service.CategoryService;

import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;

@RestController
@RequestMapping("/exam/category")
@CrossOrigin(origins = "*")
public class CategoryController {

	@Autowired
	private  CategoryService categoryService;
	
	
	//add category
	@PostMapping("/")
	public ResponseEntity<Category> addCategory(@RequestBody Category category){
		Category category2 = this.categoryService.addCategory(category);
		return ResponseEntity.ok(category2);
	}
	
	//get category 
	@GetMapping("/{categoryId}")
	public Category getCategory(@PathVariable("categoryId") int categoryId)
	{
		return this.categoryService.getCategory(categoryId);
	}
	
	// get all categories
	@GetMapping("/")
	public ResponseEntity<?> getCategories(){
		return ResponseEntity.ok(this.categoryService.getCategories());
	}
	
	//update category
	@PutMapping("/")
	public Category updateCategory(@RequestBody Category category) {
		return  this.categoryService.updateCategory(category);
	}
	
	//delete category
	@DeleteMapping("/{categoryId}")
	public void deleteCategory(@PathVariable("categoryId") int categoryId){
		
		 this.categoryService.deleteCategory(categoryId);
		
	}
}
