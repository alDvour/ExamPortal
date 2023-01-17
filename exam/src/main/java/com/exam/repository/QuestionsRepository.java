package com.exam.repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.model.Questions;
import com.exam.model.Quiz;

public interface QuestionsRepository extends JpaRepository<Questions, Long>{

	Set<Questions> findByQuiz(Quiz quiz);

	
	

}
 