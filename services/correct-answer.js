import questions from "../models/questions.js";
import { compareArrays, displayArray } from "./arrayManipulation.js";

export const correct = (question) => {
  const answers = document.querySelectorAll("input.alternative:checked");
  const arrayAnswers = [];
  answers.forEach((answer) => arrayAnswers.push(Number(answer.value)));
  return compareArrays(arrayAnswers, question.question.alternatives.answers)
    ? (question.iscorrect = true)
    : (question.iscorrect = false);
};

export const hideDescription = () => {
  const aside = document.querySelector("aside");
  aside.classList = "hide";
};

export const showDescription = (question) => {
  const aside = document.querySelector("aside");
  let p = document.querySelector("aside p.description");
  let h3 = document.querySelector("aside header h3");
  p.innerText = "";
  console.log(question);
  if (question.iscorrect) {
    aside.classList = "green";
    h3.innerText = `Korrekt!`;
  } else {
    aside.classList = "red";
    h3.innerText = `Fel!`;
    p.innerText = "Rätt svar:";
    let correctAnswers = question.question.alternatives.answers.map(
      (answer) => answer + 1 + ". " + question.question.alternatives.alternatives[answer]
    );
    correctAnswers.forEach((answer) => {
      p.innerText += `\nAlternativ: ${answer}\n`;
    });
    p.innerText += "\n";
  }
  p.innerText += `${displayArray(question.question.description)}`;
};
