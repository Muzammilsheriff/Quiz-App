import { checkAnswer, questions } from './quiz.js';
import { loadNextQuestion } from './ui.js';
import { calculateScore } from './score.js';

let currentQuestionIndex = 0;
let correctAnswers = 0;

loadNextQuestion(currentQuestionIndex);

document.getElementById('quiz-container').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const isCorrect = checkAnswer(e.target.innerText, questions[currentQuestionIndex].correctAnswer);
    if (isCorrect) correctAnswers++;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadNextQuestion(currentQuestionIndex);
    } else {
      document.getElementById('quiz-container').innerHTML = calculateScore(correctAnswers, questions.length);
    }
  }
});
