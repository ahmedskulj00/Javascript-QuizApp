var container = document.getElementById('quiz-container')
var question = document.getElementById('question')
var choice1 = document.getElementById('choiceA')
var choice2 = document.getElementById('choiceB')
var choice3 = document.getElementById('choiceC')
var choice4 = document.getElementById('choiceD')
var scoreText = document.getElementById('score')
var choices = document.getElementsByClassName('choices')
var results = document.getElementsByClassName('results')
var scoreBox = document.getElementById('score-box')

var questions = [
    {
        q: "Who was the first King of Bosnia?",
        choiceA: "Tvrtko I",
        choiceB: "Stephen I",
        choiceC: "Suleyman I",
        choiceD: "Prijezda I",
        correctAnswer: "A"
    },
    {
        q: "When was the Declaration of Independence signed?",
        choiceA: "1823",
        choiceB: "1776",
        choiceC: "1861",
        choiceD: "1607",
        correctAnswer: "B"
    },
    {
        q: "When was the Roman Empire founded?",
        choiceA: "27 AD",
        choiceB: "476 AD",
        choiceC: "753 BC",
        choiceD: "1 AD",
        correctAnswer: "A"
    },
    {
        q: "Which modern day country was called Persia in the past?",
        choiceA: "Afghanistan",
        choiceB: "Turkmenistan",
        choiceC: "Iran",
        choiceD: "Iraq",
        correctAnswer: "C"
    },
    {
        q:"Who was the first emperor of Russia?",
        choiceA: "Ivan the Terrible",
        choiceB: "Peter the Great",
        choiceC: "Nicholas II",
        choiceD: "Alexander I",
        correctAnswer: "B"
    }
]

var lastQuestionIndex = questions.length - 1
var currentQuestionIndex = 0
var score = 0

function renderQuestion(){
    var q = questions[currentQuestionIndex]
    question.innerHTML = q.q
    choice1.innerHTML = q.choiceA
    choice2.innerHTML = q.choiceB
    choice3.innerHTML = q.choiceC
    choice4.innerHTML = q.choiceD
    scoreText.innerHTML = "Your score is: " + score
}

renderQuestion()

function checkAnswers (answer){
    if(answer == questions[currentQuestionIndex].correctAnswer){
        answerIsCorrect()
        score++
        scoreText.innerHTML = "Your score is: " + score
    }else{
        answerIsWrong()
    }
    if (currentQuestionIndex < lastQuestionIndex){
        currentQuestionIndex++
        renderQuestion()
    }else{
        alert("Your score is: " + score + " Click button to play again!")
        currentQuestionIndex = 0
        score = 0
        for (var i = 0; i<=lastQuestionIndex;i++){
            document.getElementById(i).style.backgroundColor = "black"
        }
        renderQuestion()
    }
}

function totalQuestions(){
    for(var i = 0; i <= lastQuestionIndex; i++){
       scoreBox.innerHTML +="<div class='results' id="+i+">"+i+"</div>"
    } 
}

totalQuestions()

function answerIsCorrect(){
    document.getElementById(currentQuestionIndex).style.backgroundColor = "#0f0";
}

function answerIsWrong(){
    document.getElementById(currentQuestionIndex).style.backgroundColor = "#f00";
}
