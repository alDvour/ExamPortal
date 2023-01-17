package com.exam.service;

import java.util.List;
import java.util.Set;

import com.exam.model.Questions;
import com.exam.model.Quiz;

public interface QuestionsService {

	public Questions addQuestions(Questions questions);
	public Questions updateQuestions(Questions questions);
	public Set<Questions> getQuestions();
	public Questions getQuestion(Long questionId);
	public Set<Questions> getQuestionOfQuiz(Quiz quiz);
	public void deleteQuestion(Long quesId);
	
}
