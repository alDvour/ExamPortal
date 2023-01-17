package com.exam.model;

import java.util.HashSet;
import java.util.Set;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
@Entity
public class Quiz {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long qId;
	private String title;
	private int numOfQuestions;
	private int maxMarks;
	
	@ManyToOne(fetch = FetchType.EAGER)
	private Category category;
	
	@OneToMany(mappedBy = "quiz",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	@JsonIgnore
	
	private Set<Questions> questions = new HashSet<>();
	public Quiz(Long qId, int numOfQuestions, int maxMarks) {
		super();
		this.qId = qId;
		this.numOfQuestions = numOfQuestions;
		this.maxMarks = maxMarks;
		
		
	}
	public Quiz() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getqId() {
		return qId;
	}
	public void setqId(Long qId) {
		this.qId = qId;
	}
	public int getNumOfQuestions() {
		return numOfQuestions;
	}
	public void setNumOfQuestions(int numOfQuestions) {
		this.numOfQuestions = numOfQuestions;
	}
	public int getMaxMarks() {
		return maxMarks;
	}
	public void setMaxMarks(int maxMarks) {
		this.maxMarks = maxMarks;
	}
	public Set<Questions> getQuestions() {
		return questions;
	}
	public void setQuestions(Set<Questions> questions) {
		this.questions = questions;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	
	
	
}
