var questionsOb = {
    q1: {
        question : "who are you",
        answers : ['<div class="correct">me</div>','<h1 class="incorrect answer">you</h1>','<h1 class="incorrect answer">bye</h1>','<h1 class="incorrect answer">hello</h1>']
    },
    q2: {
        question : "who are you3",
        answers : ['<div class="correct">me</div>','<h1 class="incorrect answer">you</h1>','<h1 class="incorrect answer">bye</h1>','<h1 class="incorrect answer">hello</h1>']
    },
    q3: {
        question : "who are you2",
        answers : ['<div class="correct">me</div>','<h1 class="incorrect answer">you</h1>','<h1 class="incorrect answer">bye</h1>','<h1 class="incorrect answer">hello</h1>']
    },
}

var wins
var loses
var questionsAsked
var currentQuestion
var key = 1
var currentTime = 30
var stop
var clear
var timerInterval = null

var resetGame = function(){
wins = 0;
loses = 0;
questionsAsked = 0;
key = 0;
}

var setTimer = function(){
    var timer = currentTime;
    currentTime--;
    if(timer == 0){
        next();
    }
    $('#timer').html(timer)
}
    
var createQuestion = function (){
    console.log(key)
    qKey = 'q' + key;
    key++;
    return `<div>
    <h1>${questionsOb[qKey].question}</h1>
    ${questionsOb[qKey].answers[0]}
    ${questionsOb[qKey].answers[1]}
    ${questionsOb[qKey].answers[2]}
    ${questionsOb[qKey].answers[3]}
    </div>`

}

var postQuestion = function(){
    var newDiv = $(createQuestion())
    $('#question').html(newDiv)
}

var start = function(){
    $( '#startButton' ).css("visibility", "hidden");
    timerInterval = setInterval(setTimer,1000);
    postQuestion();
}

var next = function(){
    wins++;
    currentTime = 30
    $('#timer').html(currentTime)
    clearInterval(timerInterval)
    timerInterval = setInterval(setTimer,1000);
    postQuestion();
}

$( '#startButton' ).click(start)

$('#question').on("click",'div.correct',next)


  






/*var questionOb = {
    q1 : {
        question : "who are you?",
        correctAnswer : 'you',
        wrongAnswers : ['me','them','they']
    },
    q2 : {
        question : "who are they?",
        correctAnswer : 'they',
        wrongAnswers : ['me','them','they']
    },
    q3 : {
        question : "wffff?",
        correctAnswer : 'we',
        wrongAnswers : ['me','them','they']
    },
    q4 : {
        question : "wasdndj?",
        correctAnswer : 'we',
        wrongAnswers : ['me','them','they']
    }
}*/
/*var createQuestion = function (){
    console.log(key)
    qKey = 'q' + key;
    key++;
    return `<div>
    <h1>${questionOb[qKey].question}</h1>
    <h1>${questionOb[qKey].correctAnswer}</h1>
    <h1>${questionOb[qKey].wrongAnswers[0]}</h1>
    <h1>${questionOb[qKey].wrongAnswers[1]}</h1>
    <h1>${questionOb[qKey].wrongAnswers[2]}</h1>
    </div>`

}*/