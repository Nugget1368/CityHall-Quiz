import { displayArray } from "../services/arrayManipulation.js";

const buildQuestionsAccordion = (target, header, questionsArr) => {
  let ul = document.querySelector(`${target} .accordion`);
  for (let x = 0; x < questionsArr.length; x++) {
    let li = document.createElement("li");
    let label = document.createElement("label");
    let question = document.createElement("p");
    let correctAnswer = document.createElement("p");
    label.innerText = header + (x + 1);

    question.innerText = questionsArr[x].question;
    let answer = questionsArr[x].answers;
    let correctAlt = "";
    if (answer.length > 1) {
      for (let index = 0; index < answer.length; index++) {
        correctAlt +=
          "\n" + (index + 1) + ". " + questionsArr[x].alternatives[index] + " ";
        console.log(questionsArr[x].alternatives[index]);
      }
      correctAnswer.innerText = "Rätt Svar: " + correctAlt;
    } else {
      correctAlt = questionsArr[x].alternatives[answer];
      // console.log(correctAlt);
      correctAnswer.innerText = "Rätt Svar: " + correctAlt;
    }

    li.append(label);
    li.append(question, correctAnswer);
    ul.append(li);
  }
  toggleItem();
};

const toggleItem = () => {
  let labels = document.querySelectorAll(".accordion label");
  labels.forEach((label) => {
    label.addEventListener("click", () => label.classList.toggle("active"));
  });
};

export default buildQuestionsAccordion;
