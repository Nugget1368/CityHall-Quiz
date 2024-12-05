
export const buildAccordionQuestions = (targetSelector, questionsArray) => {
  questionsArray.forEach((question, index) => {
    const correctAnswers = question.answers;
    const correctAlternatives = `Rätt Svar: ${correctAnswers.map((answer) => "\n" + (answer+1) + ". " + question.alternatives[answer])}`;
    const paragraphs = [question.question, correctAlternatives];
    buildAccordion(targetSelector, `Fråga #${index + 1}`, paragraphs);
  });
  toggleItem();
};

const buildAccordion = (targetSelector, header, paragraphs) =>{
    const ul = document.querySelector(`${targetSelector} .accordion`);
    const label = document.createElement("label");
    const li = document.createElement("li");
    label.innerText = header;
    li.append(label);
    paragraphs.forEach(pargraph =>{
        let p = document.createElement("p");
        p.innerText = pargraph;
        li.append(p);
    })
    ul.append(li);
}

const toggleItem = () => {
  let labels = document.querySelectorAll(".accordion label");
  labels.forEach((label) => {
    label.addEventListener("click", () => label.classList.toggle("active"));
  });
};