import buildQuestion from "./builders/questionBuilder.js";
import questions from "./models/questions.js";

let questionIndex = 0;
buildQuestion(0);

//Next question
document.querySelector("button#next-question").addEventListener("click", () => {
  if (questionIndex < questions.length) {
    questionIndex++;
    buildQuestion(questionIndex);
  }
  else{
    //Show Result-page
  }
});
