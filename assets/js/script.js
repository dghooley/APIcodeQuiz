var questionIndex = 0;
var time = 70;
var timerId ;
var questionsElement = document.getElementById("questions");
var choicesElement = document.getElementById("question-choices");
var timerElement = document.getElementById("time");
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startButton = document.getElementById("start");


function startTimer () {
    time--;
    timerElement.textContent = time;
}

function timerEl () {
    var time = 70;
    var timeIntervalID = setInterval(function() {
        if(timeleft >= 0){
            if(timeleft === 0){
                timerEl.textContent =""
                clearInterval(timeIntervalID)
                displayMessage()
            }
            else {
                timerEl.textContent = timeleft + "seconds remaining"
            }
        }
        timeleft--
        console.log(timeleft)
    }, 1000);
    startButton.onclick = countdown;
}

function startQuiz () {
    timerId = setInterval(startTimer, 1000)
    timerElement.textContent = time;
    
    var startScreenElement = document.getElementById("start-screen");
    startScreenElement.setAttribute("class", "hide");
    questionsElement.removeAttribute("class");
    showQuestions();
}


function showQuestions () {
    var currentQuestion = questions[questionIndex];
    var questionTitleElement = document.getElementById("question-title"), href="/assets.questions.js";
    questionTitleElement.textContent = currentQuestion.title;

    choicesElement.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, i){

    var choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("value", choice);
// create on click event to start another function that will handle the choice buttons being clicked
    choiceButton.textContent = i +1 + " " + choice;
    choicesElement.append(choiceButton)
    })

}
//TO DO LIST:
// if-else statement to stop timer either at zero, or when the quiz is finished
// Q & A's
// declare function to handle what happens after you click the choice button
// test if the choice the user chose is equal to currentQuestions.answer
// test if the current questions index is equal to questions.length and if it is fire of function that will end the quiz
startButton.onclick = startQuiz;
