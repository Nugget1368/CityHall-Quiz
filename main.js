import buildQuestion from "./builders/questionBuilder.js";
import questions from "./models/questions.js";
import {
  correct,
  showDescription,
  hideDescription,
} from "./services/correct-answer.js";

let questionIndex = 0;
let playerScore = 0;
buildQuestion(0);

//Next question
document.querySelector("button#next-question").addEventListener("click", () => {
  hideDescription();
  if (questionIndex < questions.length) {
    questionIndex++;
    buildQuestion(questionIndex);
  } else {
    //Show Result-page
  }
});

document
  .querySelector("button#answer-question")
  .addEventListener("click", () => {
    let isCorrect = correct(questionIndex);
    if (isCorrect) {
      playerScore++;
    }
    showDescription(questionIndex, isCorrect);
  });
