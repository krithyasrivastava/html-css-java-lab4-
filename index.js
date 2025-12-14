// Quiz Questions Array
const quizQuestions = [
  {
    question: "What does HTML stand for?",
    answer: "hypertext markup language"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answer: "let"
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    answer: "//"
  },
  {
    question: "What method converts text to lowercase in JavaScript?",
    answer: "tolowercase"
  },
  {
    question: "Which function is used to take user input in the browser?",
    answer: "prompt"
  }
];

// Function to run the quiz
function runQuiz() {
  let score = 0;

  for (let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(quizQuestions[i].question);

    if (userAnswer === null) {
      alert("Quiz cancelled.");
      return;
    }

    // Normalize input
    userAnswer = userAnswer.trim().toLowerCase();

    // Check answer
    if (userAnswer === quizQuestions[i].answer) {
      alert("✅ Correct!");
      score++;
    } else {
      alert(
        "❌ Wrong!\nCorrect answer is: " + quizQuestions[i].answer
      );
    }
  }

  // Final score
  alert(
    "🎉 Quiz Completed!\nYour Score: " +
    score +
    " out of " +
    quizQuestions.length
  );
}

// Start the quiz
runQuiz();