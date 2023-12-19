function showResult(answer) {
    var resultElement = document.getElementById('result');
    var nextButton = document.getElementById('next-btn');
    
    if (answer === 'Yes') {
        resultElement.innerHTML = 'I love you too!';
        nextButton.style.display = 'block'; // Show the "Next" button
    } else if (answer === 'No') {
        resultElement.innerHTML = 'Error! Try again, it should be "Yes"!';
        nextButton.style.display = 'none'; // Hide the "Next" button
    } else {
        resultElement.innerHTML = 'Invalid answer';
        nextButton.style.display = 'none'; // Hide the "Next" button
    }
}

function showNext1() {
    window.location.href = 'forever.html'; // Navigate to the next page
}

function showForever(answer) {
    var resultElement = document.getElementById('result');
    var nextButton = document.getElementById('next-btn');
    
    if (answer === 'Yes') {
        resultElement.innerHTML = 'Thank you for choosing to stay with me forever! Your love means the world to me.';
        nextButton.style.display = 'block'; // Show the "Next" button
    } else if (answer === 'No') {
        resultElement.innerHTML = 'I am sorry to hear that you cannot stay with me forever. If there is anything I can do, please let me know.';
        nextButton.style.display = 'none'; // Hide the "Next" button
    } else {
        resultElement.innerHTML = 'Invalid answer';
        nextButton.style.display = 'none'; // Hide the "Next" button
    }
}

function showNext2() {
    window.location.href = 'future.html'; // Navigate to the next page
}

function showFuture(answer) {
    var resultElement = document.getElementById('result');
    var nextButton = document.getElementById('next-btn');
    
    if (answer === 'Yes') {
        resultElement.innerHTML = 'I can not wait to have a future with you too';
        nextButton.style.display = 'block'; // Show the "Next" button
    } else if (answer === 'No') {
        resultElement.innerHTML = 'Error! Wag ka kasi mag NO! nag eerror tuloy!';
        nextButton.style.display = 'none'; // Hide the "Next" button
    } else {
        resultElement.innerHTML = 'Invalid answer';
        nextButton.style.display = 'none'; // Hide the "Next" button
    }
}

function showNext3() {
    window.location.href = 'date.html'; // Navigate to the next page
}

function showDate(answer) {
    var resultElement = document.getElementById('result');
    var nextButton = document.getElementById('next-btn');
    
    if (answer === 'Yes') {
        resultElement.innerHTML = 'Okay mag ipon na tayo for our next date HAHAHAHAHA';
        nextButton.style.display = 'block'; // Show the "Next" button
    } else if (answer === 'No') {
        resultElement.innerHTML = 'Eh bat ayaw mo? Dapat yes di ka makakapunta sa next page cge ka HAHAHAHA';
        nextButton.style.display = 'none'; // Hide the "Next" button
    } else {
        resultElement.innerHTML = 'Invalid answer';
        nextButton.style.display = 'none'; // Hide the "Next" button
    }
}

function showNext4() {
    window.location.href = 'message.html'; // Navigate to the next page
}

function showNext5() {
    window.location.href = 'love.html'; // Navigate to the next page
}
