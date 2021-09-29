const quizForm = document.querySelector(".quiz-form");

const btnSubmitAnswers = document.querySelector(".submit-answer");
const output = document.querySelector(".output");

const correctAnswers = ["Incenter" ,"2 congruent sides","60","Isosceles","One-half"];

function checkAnswers(){
    output.style.visibility="visible";
    const formResults = new FormData(quizForm);
    let score = 0;
    let index = 0;
    for(value of formResults.values()){
        if(value === correctAnswers[index]){
            score++;
        }
        index++;
    }
    output.innerText = "Your score is " + score;
}

btnSubmitAnswers.addEventListener("click",checkAnswers);