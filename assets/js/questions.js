var questions = [
    {
        title : "Which one of the following choices is not a primative?", 
        choices : [
            "number", "variable", "boolean", "string",
        ],
        answer : "variable"
    },
    {
        title : "Which of the following terms stores a series of Unicode characters inside of single or double quotes?", 
        choices : [
            "method", "div", "class", "string",
        ],
        answer : "string"
    },

    {
        title : "Which of the following terms cannnot be used to define variables?", 
        choices : [
            "var", "let", "class", "const",
        ],
        answer : "string"
    },

    {
        title : "Which of these terms can be used to access properties?", 
        choices : [
            "<", "[]", "$", ":",
        ],
        answer : "[]"
    },

    {
        title : "Which of the following is a JavaScript package manager?", 
        choices : [
            "Node.js", "Bootstrap", "npm", "jQuery",
        ],
        answer : "npm"
    }
]

var score=0

for (let index = 0; index < questions.length; index++) {
    var userChoice = confirm(questions[index].q) 

    if(userChoice===true && questions[index].a=="true"){
        score++
        alert("Correct!")
    }
    else {
        alert("Incorrect!")
    }
}
alert("final score: " + score)

