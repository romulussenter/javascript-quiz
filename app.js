function populate(){
    if(quiz.isEnded())
    {
        showScores();  
    }
    else{
        //show question
        var element = document.getElementById('question');
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++){
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices [i]);
        }
    
    }
};

function guess(id, guess) {
        var button = document.getElementById(id);
        button.onclick = function() {
         quiz.guess(guess);
         populate(); 
        }
}

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score:"+ quiz.score +"</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;

     
}

var questions = [
    new Questions('What is more awesome Jedi or Seth?',['Jedi','Dont care','Both','Sith'],'Sith'),
    new Questions('What planet are you from?'['Eath','Mars', 'I have no clue', 'Venous'],'Mars'),
    new Questions('What color is the sky'['Red','Green','Blue','White'],'Red'),
    new Questions('How cool am I?'['Not that cool', 'Pretty awesome','Alright', 'Who are you?'],'Pretty awesome'),
];

var quiz = new Quiz(questions);

populate();