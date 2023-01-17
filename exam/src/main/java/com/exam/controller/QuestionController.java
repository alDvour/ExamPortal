package com.exam.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

import org.hibernate.grammars.hql.HqlParser.CollateFunctionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.ConditionalOnDefaultWebSecurity;
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
import com.exam.model.Questions;
import com.exam.model.Quiz;
import com.exam.repository.QuestionsRepository;
import com.exam.service.QuestionsService;
import com.exam.service.QuizService;

@RestController
@RequestMapping("/exam/questions")
@CrossOrigin(origins = "*")
public class QuestionController {
	
	@Autowired
	private QuestionsService questionsService;
	
	@Autowired
	private QuizService quizService;
	
	//add question
	@PostMapping("/")
	public ResponseEntity<Questions> add(@RequestBody Questions questions){
		return ResponseEntity.ok(this.questionsService.addQuestions(questions));
	}
	@PutMapping("/")
	public ResponseEntity<Questions> update(@RequestBody Questions questions){
		return ResponseEntity.ok(this.questionsService.updateQuestions(questions));
	}
	
	//get single question
	@GetMapping("/{quesId}")
	public Questions getQuestion(@PathVariable("quesId") Long quesId) {
		return this.questionsService.getQuestion(quesId);
	}
	
	//get all questions of any quiz
	@GetMapping("/quiz/{qId}")
	public ResponseEntity<?> getQuestionsOfQuiz(@PathVariable("qId") Long qID){
//		Quiz quiz = new Quiz();
//		quiz.setqId(qID);
//		List<Questions> questionsOfQuizList = this.questionsService.getQuestionOfQuiz(quiz);
//		return ResponseEntity.ok(this.questionsService.getQuestionOfQuiz(quiz));
		
		Quiz quiz = this.quizService.getQuiz(qID);
		Set<Questions> questions = quiz.getQuestions();
		List list =new ArrayList(questions);
		if(list.size()>quiz.getNumOfQuestions())
		{
			list=list.subList(0, quiz.getNumOfQuestions()+1);
		}
		Collections.shuffle(list);
		return ResponseEntity.ok(list);
	}
	
//	//get single question
//	@GetMapping("/{quesId}")
//	public Questions get(@PathVariable("quesId") Long quesId) {
//		return this.questionsService.getQuestion(quesId);
//	}
//	
	//delete question
	@DeleteMapping("/{quesId}")
	public void delete(@PathVariable("{quesId}") Long quesId) {
		this.questionsService.deleteQuestion(quesId);
	}
}
