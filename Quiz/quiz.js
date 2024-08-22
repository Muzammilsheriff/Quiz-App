export const questions = [
  {
    question: "What is ES6?",
    answers: ["A car", "A version of JavaScript"],
    correctAnswer: "A version of JavaScript",
  },
  {
    question: "What is ES6?",
    answers: ["A car", "A version of JavaScript"],
    correctAnswer: "A car",
  },
  // more questions
];

export const checkAnswer = (selectedAnswer, correctAnswer) => {
  console.log(selectedAnswer);
  console.log(correctAnswer);

  if(selectedAnswer == correctAnswer){
    return true
  } else {
    return false
  };
};
