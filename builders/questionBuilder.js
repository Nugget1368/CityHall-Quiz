import questions from "../models/questions.js";
import { removeElements, addImage } from "../builders/builder.js";
const buildQuestion = (question, index = 0) => {
  const header = document.querySelector("article section header h2");
  const p = document.querySelector("p.content");
  const ul = document.querySelector("ul.alternatives");
  const inputType = question.question.alternatives.answers.length > 1 ? "checkbox" : "radio";
  let figure = document.querySelector("article section figure");
  removeElements(figure);

  ul.innerHTML = "";
  // header.innerText = `Fråga #${index + 1}`;
  header.innerText = `Fråga #${index + 1}`;
  p.innerText = `${question.question.question}`;
  let alternativesIndex = 0;
  question.question.alternatives.alternatives.forEach((alt) => {
    let li = document.createElement("li");
    li.innerHTML = `<input type="${inputType}" value="${alternativesIndex}" id="${alt}" class="alternative" name="answer"/><label for="${alt}">${alt}</label>`;
    alternativesIndex++;
    ul.append(li);
  });
  if (question.question.image != "") {
    addImage("article section .row", question.question.image.url, question.question.image.alternativeText);
  }
};

export default buildQuestion;
