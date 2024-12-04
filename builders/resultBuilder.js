const buildResult = (playerScore, questionsArr) => {
  const aside = document.querySelector("aside");
  const h2 = document.querySelector("article section header h2");
  const ul = document.querySelector("ul");
  const h3 = document.querySelector("article aside header h3");
  const p = document.querySelector("article section p.content");
  const description = document.querySelector("article aside p.description");
  const scorePercentage = (playerScore / questionsArr.length) * 100;
  console.log(aside);
  //   aside.style.backgroundColor = "cyan";
  ul.innerHTML = "";
  h2.innerHTML = "Resultat";
  p.innerHTML = `Du har slutfört Stockhom Stadshus Quiz. Nedan finner du
    en sammanställning av dina totala poäng samt ifall du har klarat quizet eller inte.
    <br><br>Du finner även en lista med alla frågor och svar ifrån quizet, de frågor
    du inte klarat är markerade i rött.`;
  aside.style.display = "flex";
  h3.innerHTML = `Korrekthet: ${scorePercentage}%`;
  if (scorePercentage <= 50) {
    description.innerHTML = `Av ${questionsArr.length} frågor hade du ${playerScore} rätt vilket är
              ett för lågt betyg. Läs igenom de frågor du hade fel på nedan och gör om quizet när studerat lite mer.`;
  } else if (scorePercentage > 50 && scorePercentage <= 75) {
    aside.style.backgroundColor = "#ffeaad";
    aside.style.borderColor = "#c29409";

    description.innerHTML = `Av ${questionsArr.length} frågor hade du ${playerScore} rätt. Du är på god väg men
        har en bit kvar. Läs igenom de frågor du hade fel på nedan och gör om quizet när studerat lite mer.
        Du kan klara det här!`;
  } else {
    aside.style.backgroundColor = "#d0ffce";
    aside.style.borderColor = "#056601";
    description.innerHTML = `Av ${questionsArr.length} frågor hade du ${playerScore} rätt. Bra jobbat, du är godkänd på quizet!
        Men bli inte för bekväm, det finns alltid mer att lära sig. Stockhoms Stadshus är fullt av historia och gömda detaljer som sträcker sig utanför detta quiz.`;
  }

  //Skapa accordion och skriv ut frågor och svar
};

export default buildResult;