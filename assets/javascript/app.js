var questionsOb = {
    q1: {
        question : 'What is "Schmeckle"?',
        answers : ['<button class="correct">A Currency</button>','<button class="incorrect">Ricks favorite food</button>','<button class="incorrect">Ricks Cat-person friend</button>','<button class="incorrect">The name of fly-guards</button>']
    },
    q2: {
        question : "Which of the following is NOT one of Ricks catch phrases?",
        answers : ['<button class="incorrect">WUBBA LUBBA DUB DUB</button>','<button class="incorrect">GRASSSSS... tastes bad!</button>','<button class="correct">Hit the deck, Jack!</button>','<button class="incorrect">Uh ohhhh! Somersoult jump!</button>']
    },
    q3: {
        question : "Which is the dimension of the original Rick?",
        answers : ['<button class="incorrect">C-126</button>','<button class="incorrect">C-132</button>','<button class="correct">C-137</button>','<button class="incorrect">C-129</button>']
    },
    q4: {
        question : "What is the name of the planet that Mortys sex robot is from?",
        answers : ['<button class="correct">Gazorpazorp</button>','<button class="incorrect">Smegmalon</button>','<button class="incorrect">Chundlopia</button>','<button class="incorrect">Glaagablaaga</button>']
    },
    q5: {
        question : "What is the name of Mortys High School?",
        answers : ['<button class="incorrect">Beerwah State High School</button>','<button class="correct">Harry Herpson High School</button>','<button class="incorrect">Gene Vegan High School</button>','<button class="incorrect">The name is not presented</button>']
    },
    q6: {
        question : "What is the name of Jerrys gay lover alien parasite name?",
        answers : ['<button class="incorrect">Lary</button>','<button class="incorrect">Bery</button>','<button class="incorrect">Tery</button>','<button class="correct">Gary</button>']
    },
    q7: {
        question : "What is the name of Jerrys favorite Rick?",
        answers : ['<button class="correct">Doofus</button>','<button class="incorrect">Roofus</button>','<button class="incorrect">Goofus</button>','<button class="incorrect">Rick G-506</button>']
    },
    q8: {
        question : "What is the name of Ricks ex-wife?",
        answers : ['<button class="incorrect">Joyce</button>','<button class="incorrect">Janet</button>','<button class="correct">Diane</button>','<button class="incorrect">Ellen</button>']
    },
    q9: {
        question : "What does Beth do for a living?",
        answers : ['<button class="incorrect">Chef</button>','<button class="incorrect">Astronomer</button>','<button class="incorrect">Novel Writer</button>','<button class="correct">Horse Surgeon</button>']
    },
    q10: {
        question : 'What is Ricks last name?',
        answers : ['<button class="incorrect">Smith</button>','<button class="correct">Sanchez</button>','<button class="incorrect">Suarez</button>','<button class="incorrect">Parker</button>']
    },
}

var wins = 0;
var loses = 0;
var score
var questionsAsked = 0;
var key = 1;
var currentTime = 10;
var timerInterval = null;
var gameOver = false;
var empty = $('<div>')
var timer
var correctScreen = `
<div>
<h1 class='result' >Correct!</h1>
</div>
`
var incorrectScreen = `
<div>
<h1 class='result'>Wrong!</h1>
</div>
`

var resetGame = function(){
    $('#timer').css('visibility', 'visible')
$('#resetButton').css('visibility', 'hidden')
gameOver = false;
wins = 0;
loses = 0;
currentTime = 10;
questionsAsked = 0;
key = 1;
start()
}

var setTimer = function(){
    timer = currentTime;
    currentTime--;
    checkTimer();
    $('#timer').html(timer)
    if(timer<10){$('.sound2').get(0).play();}
}
    
var createQuestion = function (){
    qKey = 'q' + key;
    key++;
    return `<div id="questionBox">
    <h1 id="newQuestion">${questionsOb[qKey].question}</h1>
    <div id="answerChoices" class='container row'>
    ${questionsOb[qKey].answers[0]}
    ${questionsOb[qKey].answers[1]}
    ${questionsOb[qKey].answers[2]}
    ${questionsOb[qKey].answers[3]}
    </div>
    </div>`

}



var postQuestion = function(){
    var newDiv = $(createQuestion())
    $('#question').html(newDiv)
}

var postResponseCorrect = function(){
    $('.sound3').get(0).play();
    var newDiv = $(correctScreen)
    $('#question').html(newDiv)
    clearInterval(timerInterval)
    $('#timer').css('visibility', 'hidden')
    setTimeout(correct,2000)
}

var postResponseIncorrect = function(){
    $('.sound4').get(0).play();
    var newDiv = $(incorrectScreen)
    $('#question').html(newDiv)
    clearInterval(timerInterval)
    $('#timer').css('visibility', 'hidden')
    setTimeout(incorrect,2000)
}

var start = function(){
    $('.sound1').get(0).play();
    $( '#startButton' ).css("visibility", "hidden");
    timerInterval = setInterval(setTimer,1000);
    postQuestion();

}

var addWin = function(){
    wins++;
    questionsAsked++;
}

var addLose = function(){
    loses++;
    questionsAsked++;
}

var correct = function(){
    $('#timer').css('visibility', 'visible')
    clearInterval(timerInterval)
    addWin()
    checkScore()
    if(gameOver){return}
    currentTime = 10
    timer = 10
    $('#timer').html(currentTime)
    timerInterval = setInterval(setTimer,1000);
    postQuestion();
    checkTimer();
}

var incorrect = function(){
    $('#timer').css('visibility', 'visible')
    clearInterval(timerInterval)
    addLose()
    checkScore()
    if(gameOver){return}
    currentTime = 10
    timer = 10
    $('#timer').html(currentTime)
    timerInterval = setInterval(setTimer,1000);
    postQuestion();
    checkTimer();
}

var checkScore = function(){
    if(wins+loses==10){
        showScore()
        gameOver = true;
    }

}

var checkTimer = function(){
    if (timer==0){
        postResponseIncorrect()
        currentTime = 10;
    }
    return
}

var showScore = function(){
    clearInterval(timerInterval)
    $('#timer').css('visibility', 'hidden')
    var newDiv = `
    <div id="results">
    <h1 id="results">Results:</h1>
    <h2>${wins}/${wins+loses}</h2>
    
    </div>
    `
    $('#question').html(newDiv)
    $('#resetButton').css('visibility', 'visible')
}
$( '#startButton' ).click(start)

$( '#resetButton' ).click(resetGame)

$('#question').on("click",'button.correct',postResponseCorrect)

$('#question').on("click",'button.incorrect',postResponseIncorrect)







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