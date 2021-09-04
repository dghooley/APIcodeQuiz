var questionIndex = 0;
var time = 70;
var timerId ;
var questionsElement = document.getElementById("questions");
var startButton = document.getElementById("start");
var chhoicesElement = document.getElementById("question-choices");
var timerElement = document.getElementById("time");

function startTimer () {
    time--;
    timerElement.textContent = time;
    if (time <= 0) {
        // createFunctionToEndQuiz
        
    }
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
    var questionTitleElement = document.getElementById("question-title");
    questionTitleElement.textContent = currentQuestion.title;

    chhoicesElement.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, i){

        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);

        choiceButton.textContent = i +1 + " " + choice;

        chhoicesElement.append(choiceButton)

        
       // create on click event (hint: line 51) to start another function that will handle the choice buttons being clicked

    })

}

// dclare function to handle what happens after you click the choice button
// test if the choice the user chose is equal to currentQuestions.answer
// test if the current questions index is equal to questions.length and if it is fire of function that will end the quiz
startButton.onclick = startQuiz;