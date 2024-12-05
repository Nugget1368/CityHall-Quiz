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
let questionsCopy = [...questions]
console.log(questionsCopy);
 buildQuestion(questionIndex);

//Next question
let nextBtn = document.querySelector("button#next-question");
nextBtn.addEventListener("click", () => {
  hideDescription();
  nextBtn.disabled = true;
  answerBtn.disabled = false;
  if (questionIndex < questionsCopy.length -1) {
    questionIndex++;
    buildQuestion(questionIndex);
  } else {
    buildResult(playerScore, questionsCopy);
    //TODO Byt ut knappar till avsluta knapp/starta om.
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