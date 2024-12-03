import questions from "../models/questions.js";
console.log(questions);

const buildQuestion = (index) => {
    const question = questions[index];
    const header = document.querySelector("article section header h2");
    console.log(header);
    const p = document.querySelector("p.question");
    const ul = document.querySelector("ul.alternatives")
    const inputType = question.answers.length > 1 ? "checkbox" : "radio";
    
    ul.innerHTML = "";
    header.innerHTML = `Fråga #${index + 1}`;
    p.innerHTML = `${question.question}`;
    question.alternatives.forEach(alt =>{
        let li = document.createElement("li");
        li.innerHTML = `<input type="${inputType}" id="${alt}" name="answer"/><label for="${alt}">${alt}</label>`;
        console.log(li);
        ul.append(li);
        console.log(ul);
    });
}

export default buildQuestion;