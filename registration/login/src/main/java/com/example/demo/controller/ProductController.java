package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.example.demo.model.Product;
import com.example.demo.model.User;
import com.example.demo.repository.ProductRepository;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins="*")
public class ProductController {

	@Autowired
	ProductRepository productRepository;
	
	@PostMapping("/add")
	public ResponseEntity<Product> createProduct(@RequestBody Product product){
		 try {
    		 Product _product = productRepository.save(new Product(product.getProductName(),product.getProductQty()));
    		 return new ResponseEntity<>(_product,HttpStatus.CREATED); 
    	 }catch(Exception ex) {
    		 return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR); 
    	 } 
	}
	
	 @GetMapping("/fetch")
	   public ResponseEntity<List<Product>> getAllProducts(){
		   try {
			   List<Product> products = new ArrayList<Product>();
	    	   productRepository.findAll().forEach(products::add);
	    	   if(products.isEmpty()) {
	    		   return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    	   }
	    	   return new ResponseEntity<>(products,HttpStatus.OK);
		   }catch(Exception ex) {
			   return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR); 
		   }
		 }
	   
	   @GetMapping("/fetch_product/{id}")
	   public ResponseEntity<Product> getProductById(@PathVariable("id") long id){
		  Optional<Product> productData = productRepository.findById(id);
		  if(productData.isPresent()) {
			  return new ResponseEntity<>(productData.get(),HttpStatus.OK);
		  }else {
			  return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
		  }
	   }   

	   @PutMapping("/update_product/{id}")
	   public ResponseEntity<Product> updateProduct(@PathVariable("id") long id,@RequestBody Product product){
		   Optional<Product> productData = productRepository.findById(id);
		   if(productData.isPresent()) {
			   Product _product = productData.get();
			   _product.setProductName(product.getProductName());
			   _product.setProductQty(product.getProductQty());
			   return new ResponseEntity<>(productRepository.save(_product),HttpStatus.OK);
		   }else {
			   return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		   }
	   }
	   
	   @DeleteMapping("/delete_product/{id}")
	   public ResponseEntity<HttpStatus> deleteProduct(@PathVariable("id") long id){
		   try {			   
			   productRepository.deleteById(id);
			   return new ResponseEntity<>(HttpStatus.NO_CONTENT); 
		   }catch(Exception ex) {
			  return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		   }
	   }
	
}
