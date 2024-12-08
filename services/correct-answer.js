import questions from "../models/questions.js";
import { compareArrays, displayArray } from "./arrayManipulation.js";

export const correct = (index) => {
  const answers = document.querySelectorAll("input.alternative:checked");
  const arrayAnswers = [];
  answers.forEach((answer) => arrayAnswers.push(Number(answer.value)));
  return compareArrays(arrayAnswers, questions[index].answers) ? questions[index].iscorrect = true : questions[index].iscorrect = false;
};

export const hideDescription = () => {
  const aside = document.querySelector("aside");
  aside.classList = "hide";
};

export const showDescription = (index, isCorrect) => {
  const aside = document.querySelector("aside");
  let p = document.querySelector("aside p.description");
  let h3 = document.querySelector("aside header h3");
  p.innerHTML = "";
  p.innerHTML = `${displayArray(questions[index].description)}`;
  if (isCorrect) {
    aside.classList = "green";
    h3.innerHTML = `Korrekt!`;
  } else {
    aside.classList = "red";
    h3.innerHTML = `Fel!`;
    p.innerHTML = `<strong>Rätt Svar:</strong> Alternativ ${displayArray(
      questions[index].answers.map(
        (i) => i + 1 + ". " + questions[index].alternatives[i]
      )
    )}
        <br/>
        <br/>
        ${displayArray(questions[index].description)}`;
  }
};
