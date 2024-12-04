import questions from "../models/questions.js";
import { compareArrays, displayArray } from "./arrayManipulation.js";

export const correct = (index) => {
  const answers = document.querySelectorAll("input:checked");
  const arrayAnswers = [];
  answers.forEach((answer) => arrayAnswers.push(Number(answer.value)));
  if (compareArrays(arrayAnswers, questions[index].answers)) {
    return true;
  }
  return false;
};

export const hideDescription = () => {
  const aside = document.querySelector("aside");
  aside.classList = "";
  aside.style.display = "none";
};

export const showDescription = (index, isCorrect) => {
  const aside = document.querySelector("aside");
  let p = document.querySelector("aside p.description");
  let h3 = document.querySelector("aside header h3");
  p.innerHTML = "";
  p.innerHTML = `${displayArray(questions[index].description)}`;
  aside.style.display = "flex";
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
