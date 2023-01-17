package com.exam.service;

import java.util.List;
import java.util.Set;

import com.exam.model.Quiz;

public interface QuizService {

	public Quiz addQuiz(Quiz quiz);
	public Quiz updateQuiz(Quiz quiz);
	public Set<Quiz> getQuizs();
	public Quiz getQuiz(Long quizId);
	public void deleteQuiz(Long quizId);
	
}
