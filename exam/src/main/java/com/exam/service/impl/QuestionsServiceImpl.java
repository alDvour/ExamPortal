package com.exam.service.impl;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.model.Questions;
import com.exam.model.Quiz;
import com.exam.repository.QuestionsRepository;
import com.exam.service.QuestionsService;

@Service
public class QuestionsServiceImpl implements QuestionsService {

	

	@Autowired
	private QuestionsRepository questionsRepository; 
	@Override
	public Questions addQuestions(Questions questions) {
		// TODO Auto-generated method stub
		return this.questionsRepository.save(questions);
	}

	@Override
	public Questions updateQuestions(Questions questions) {
		// TODO Auto-generated method stub
		return this.questionsRepository.save(questions);
	}

	@Override
	public Set<Questions> getQuestions() {
		// TODO Auto-generated method stub
		return (Set<Questions>)this.questionsRepository.findAll();
	}

	@Override
	public Questions getQuestion(Long questionId) {
		// TODO Auto-generated method stub
		return this.questionsRepository.findById(questionId).get();
	}

	@Override
	public Set<Questions> getQuestionOfQuiz(Quiz quiz) {
		// TODO Auto-generated method stub
		return (Set<Questions>) this.questionsRepository.findByQuiz(quiz);
	}
	@Override
	public void deleteQuestion(Long quesId) {
		// TODO Auto-generated method stub
		Questions questions = new Questions();
		questions.setQuesId(quesId);
		this.questionsRepository.delete(questions);
		
	}

}
