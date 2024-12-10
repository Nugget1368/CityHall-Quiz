import questions from "../models/questions.js";
import { removeElements, addImage } from "../builders/builder.js";
const buildQuestion = (index) => {
  const question = questions[index];
  const header = document.querySelector("article section header h2");
  const p = document.querySelector("p.content");
  const ul = document.querySelector("ul.alternatives");
  const inputType = question.answers.length > 1 ? "checkbox" : "radio";
  let figure = document.querySelector("article section figure");
  removeElements(figure);

  ul.innerHTML = "";
  header.innerText = `Fråga #${index + 1}`;
  p.innerText = `${question.question}`;
  let alternativesIndex = 0;
  question.alternatives.forEach((alt) => {
    let li = document.createElement("li");
    li.innerHTML = `<input type="${inputType}" value="${alternativesIndex}" id="${alt}" class="alternative" name="answer"/><label for="${alt}">${alt}</label>`;
    alternativesIndex++;
    ul.append(li);
  });
  if (question.image != "") {
    addImage("article section .row", question.image, question.alt);
  }
};

export default buildQuestion;
