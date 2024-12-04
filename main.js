import buildQuestion from "./builders/questionBuilder.js";
import questions from "./models/questions.js";
import {
  correct,
  showDescription,
  hideDescription,
} from "./services/correct-answer.js";
import buildResult from "./builders/resultBuilder.js";

let questionIndex = 0;
let playerScore = 0;
// buildQuestion(questionIndex);
///DELETE
buildResult(3, questions);

//Next question
let nextBtn = document.querySelector("button#next-question");
nextBtn.addEventListener("click", () => {
  hideDescription();
  nextBtn.disabled = true;
  answerBtn.disabled = false;
  if (questionIndex < questions.length -1) {
    questionIndex++;
    buildQuestion(questionIndex);
  } else {
    //Show Result-page
    buildResult(playerScore, questions);
  }
});

let answerBtn = document.querySelector("button#answer-question");
answerBtn.addEventListener("click", () => {
  nextBtn.disabled = false;
  answerBtn.disabled = true;
  let isCorrect = correct(questionIndex);
  if (isCorrect) {
    playerScore++;
  }
  showDescription(questionIndex, isCorrect);
});
