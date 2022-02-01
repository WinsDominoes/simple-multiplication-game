function randomNumber() {
    return Math.floor(Math.random() * 10);
}

function randomNumber2() {
    return Math.floor(Math.random() * 10);
}

function multiply(a, b) {
    return a * b;
}

var num1 = randomNumber();
document.getElementById("number1").innerHTML = num1;

var num2 = randomNumber2();
document.getElementById("number2").innerHTML = num2;

var answer = multiply(num1, num2);

function check() {
    var userAnswer = document.getElementById("answer").value;

    if (userAnswer == answer) {
        // refresh page
        location.reload();
        document.getElementById("result").innerHTML = "Correct!";
        document.getElementById("result").style.color = "green";
        document.getElementById("answer").value = null;
    } else {
        document.getElementById("result").innerHTML = "Wrong!";
        document.getElementById("result").style.color = "red";
        document.getElementById("answer").value = null;
    }
}