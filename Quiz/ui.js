import { questions } from './quiz.js';

export const loadNextQuestion = (currentQuestionIndex) => {
  const question = questions[currentQuestionIndex];
  displayQuestion(question.question, question.answers);
};

const displayQuestion = (question, answers) => {
  const questionHTML = `
    <h2>${question}</h2>
    <ul>
      ${answers.map(answer => `<li>${answer}</li>`).join('')}
    </ul>
  `;
  document.getElementById('quiz-container').innerHTML = questionHTML;
};
