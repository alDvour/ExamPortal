package com.exam.model;

import java.util.LinkedHashSet;
import java.util.Set;



import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
@Entity
@Table
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int cid;
	private String title; 
	private String description;
	
	
	@OneToMany(mappedBy = "category",fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JsonIgnore
	private Set<Quiz> quizz = new LinkedHashSet<>();
	public Category() {
		// TODO Auto-generated constructor stub
		
	}
	public Category( String title, String description) {
		super();
		this.title = title;
		this.description = description;
	}
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
}
