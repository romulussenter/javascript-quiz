function populate(){
    if(quiz.isEnded())
    {
        //showScores();  
    }
    else{
        //show question
        var element = document.getElementById('question');
        element.innerHTML = quiz.getQuestionIndex().text;
    }
}

var questions = [
    new Questions('What is more awesome Judi or Seth?',['Judi','Dont care','Both','Sith'],'Sith'),
    new Questions('What planet are you from?'['Eath','Mars', 'I have no clue', 'Venous'],'Mars'),
    new Questions('What color is the sky'['Red','Green','Blue','White'],'Red'),
    new Questions('How cool am I?'['Not that cool', 'Pretty awesome','Alright', 'Who are you?'],'Pretty awesome'),
];

var quiz = new Quiz(questions);

populate();