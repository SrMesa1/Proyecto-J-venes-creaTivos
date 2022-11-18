let questions = ['QuestionOne', 'QuestionTwo', 'QuestionThree', 'QuestionFour', 'QuestionFive', 'QuestionSix', 'QuestionSeven', 'QuestionEight', 'QuestionNine', 'QuestionTen', 'Result'];
let positionQuestion = 0;
let userScore = 0;

initialGame();

function initialGame() {
    positionQuestion = 0;
    userScore = 0;
    hiddenQuestion(0);
    showSpinner(false);
}

function answeredQuestion(step, answer) {
    setTimeout(() => {
        hiddenQuestion(step);
    }, 2000);
    showSpinner(true);
    setTimeout(() => {
        showSpinner(false);
        showResultAnswer(step, answer);
    }, 500);
    calculateScore(answer);
    if (positionQuestion == 10) {
        showFinalResult();
    }
}

function hiddenQuestion(question) {
    for(let i = 0; i < questions.length; i++) {
        (i != question) ? document.getElementById(questions[i]).style.display = 'none' : null;
    }
    document.getElementById(questions[question]).style.display = 'block';
    document.getElementById('totalQuestion').innerText = "Pregunta: " + (positionQuestion+1) + "/10";
}

function showResultAnswer(step, answer) {
    const id = returnIdAnswer(step);
    if(answer) {
        document.getElementById(id[0]).classList.add('content-answer-good');
    }else {
        document.getElementById(id[1]).classList.add('content-answer-wrong');
    }
}

function showSpinner(show) {
    const element = document.getElementById('spinner');
    show ? element.style.display = 'block' : element.style.display = 'none';
}

function returnIdAnswer(answer) {
    var idAnswers = {
        '1': ['answerOneGood', 'answerOneWrong'],
        '2': ['answerTwoGood', 'answerTwoWrong'],
        '3': ['answerThreeGood', 'answerThreeWrong'],
        '4': ['answerFourGood', 'answerFourWrong'],
        '5': ['answerFiveGood', 'answerFiveWrong'],
        '6': ['answerSixGood', 'answerSixWrong'],
        '7': ['answerSevenGood', 'answerSevenWrong'],
        '8': ['answerEightGood', 'answerEightWrong'],
        '9': ['answerNineGood', 'answerNineWrong'],
        '10':['answerTenGood', 'answerTenWrong']
    }
    return idAnswers[answer]
}

function calculateScore(answer) {
    answer ? userScore += 5 : userScore -= 2.5;
    positionQuestion++;
}

function showFinalResult() {
    const element = document.getElementById('winOrLost');
    document.getElementById('totalQuestion').style.display = "none";
    userScore >= 40 ? element.innerText = "Usted ganó" : element.innerText = "Usted perdió";
    document.getElementById('finalResult').innerText = userScore;
}