
import questions from "../models/questions.js";

const compareArrays = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

const displayArray = (arr) =>{
    return JSON.stringify(arr).replaceAll(`","`, ", ").replaceAll(`["`, "").replaceAll(`"]`, "").replaceAll(/(?<=\.)\,/g, "<br><br>");
}

export const correct = (index) => {
    const answers = document.querySelectorAll("input:checked");
    const arrayAnswers = [];
    answers.forEach(answer => arrayAnswers.push(Number(answer.value)));
    if(compareArrays(arrayAnswers, questions[index].answers)){
        return true;
    }
    return false;
}

export const hideDescription = () =>
     document.querySelector("aside").style.display = "none";

export const showDescription = (index, isCorrect) => {
    const aside = document.querySelector("aside");
    let p = document.querySelector("aside p.description");
    let h3 = document.querySelector("aside header h3");
    p.innerHTML = "";
    p.innerHTML = `${displayArray(questions[index].description)}`;
    aside.style.display = "flex";
    if(isCorrect){
        h3.innerHTML = `Korrekt!`;
        aside.style.backgroundColor = "#d0ffce";
        aside.style.borderColor = "#056601";
    }
    else{
        h3.innerHTML = `Fel!`;
        p.innerHTML = 
        `<strong>Rätt Svar:</strong> Alternativ ${displayArray(questions[index].answers.map(i => (i+1) + ". " + questions[index].alternatives[i]))}
        <br/>
        <br/>
        ${displayArray(questions[index].description)}`;
        aside.style.backgroundColor = "#faaeae";
        aside.style.borderColor = "#b61717";
    }
}