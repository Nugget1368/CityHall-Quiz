import { buildAccordionQuestions } from "./accordionBuilder.js";


const buildResult = (playerScore, questionsArr) => {
  const articleResult = document.querySelector("article.result");
  const aside = document.querySelector("aside");
  const h2 = document.querySelector("article section header h2");
  const ul = document.querySelector("ul");
  const h3 = document.querySelector("article aside header h3");
  const p = document.querySelector("article section p.content");
  const figure = document.querySelector("article section figure");
  const description = document.querySelector("article aside p.description");
  const scorePercentage = Math.round((playerScore / questionsArr.length) * 100);
  let primaryBtns = document.querySelector("article footer .btn-container");
  articleResult.classList.remove("hide");
  primaryBtns.remove();
  if(figure != null){
    figure.remove();
  }

  ul.innerHTML = "";
  h2.innerText = "Resultat";
  p.innerText = `Du har slutfört Stockhom Stadshus Quiz. Nedan finner du en sammanställning av dina totala poäng samt ifall du har klarat quizet eller inte. \n\nDu finner även en lista med alla frågor och svar ifrån quizet, de frågor du inte klarat är markerade i rött.`;
  h3.innerText = `Korrekthet: ${scorePercentage}%`;
  aside.style.display = "flex;";
  if (scorePercentage <= 50) {
    aside.classList = "red";
    description.innerText = `Av ${questionsArr.length} frågor hade du ${playerScore} rätt vilket är ett för lågt betyg. Läs igenom de frågor du hade fel på nedan och gör om quizet när studerat lite mer.`;
  } else if (scorePercentage > 50 && scorePercentage <= 75) {
    aside.classList = "yellow";
    description.innerText = `Av ${questionsArr.length} frågor hade du ${playerScore} rätt. Du är på god väg men har en bit kvar. Läs igenom de frågor du hade fel på nedan och gör om quizet när studerat lite mer. Du kan klara det här!`;
  } else {
    aside.classList = "green";
    description.innerText = `Av ${questionsArr.length} frågor hade du ${playerScore} rätt. Bra jobbat, du är godkänd på quizet! Men bli inte för bekväm, det finns alltid mer att lära sig. Stockhoms Stadshus är fullt av historia och gömda detaljer som sträcker sig utanför detta quiz.`;
  }

  buildAccordionQuestions("article.result", questionsArr);
};

export default buildResult;
