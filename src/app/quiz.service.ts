import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class QuizService {
    readonly questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
    showScore = false
    currentScore = 0
    currentQuestionIndex = 0
    handleAnswer(isCorrect: boolean) {
        if (isCorrect) {
            this.currentScore++
        }
        if (this.currentQuestionIndex + 1 < this.questions.length) {
            this.currentQuestionIndex++
        } else {
            this.showScore =true
        }
    }
    reset() {
        this.showScore = false
        this.currentScore = 0
        this.currentQuestionIndex = 0
    }
}