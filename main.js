import buildQuestion from "./builders/questionBuilder.js";
import questions from "./models/questions.js";
import {
  correct,
  showDescription,
  hideDescription,
} from "./services/correct-answer.js";
import buildResult from "./builders/resultBuilder.js";
import switchMode from "./services/darkMode.js";

if(localStorage.getItem("theme")){
  switchMode(localStorage.getItem("theme"));
}
let questionIndex = 0;
let playerScore = 0;
let questionsCopy = [...questions];
buildQuestion(questionIndex);

//Next question
let nextBtn = document.querySelector("button#next-question");
nextBtn.addEventListener("click", () => {
  hideDescription();
  nextBtn.disabled = true;
  answerBtn.disabled = false;
  if (questionIndex < questionsCopy.length - 1) {
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

let darkModeBox = document.querySelector("input#dark-mode");
darkModeBox.addEventListener("change", () => switchMode("dark"));
