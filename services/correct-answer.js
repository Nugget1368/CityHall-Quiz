import questions from "../models/questions.js";

const compareArrays = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

const correct = (index) => {
    const answers = document.querySelectorAll("input:checked");
    const arrayAnswers = [];
    answers.forEach(answer => arrayAnswers.push(Number(answer.value)));
    if(compareArrays(arrayAnswers, questions[index].answers)){
        return true;
    }
    return false;
}

export default correct;