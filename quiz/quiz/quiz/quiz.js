
function checkAnswers() {

    let score = 0;

    // Question 1
    if (document.getElementById("peter").checked) {
        document.getElementById("result1").innerHTML = "Right!";
        score++;
    } else {
        document.getElementById("result1").innerHTML = "Wrong!";
    }

    // Question 2
    if (document.getElementById("fast").checked) {
        document.getElementById("result2").innerHTML = "Right!";
        score++;
    } else {
        document.getElementById("result2").innerHTML = "Wrong!";
    }

    // Question 3
    if (document.getElementById("spiderman").checked &&
        document.getElementById("batman2").checked &&
        document.getElementById("superman").checked &&
        !document.getElementById("cars").checked) {

        document.getElementById("result3").innerHTML = "Right!";
        score++;
    } else {
        document.getElementById("result3").innerHTML = "Wrong!";
    }

    // Question 4
    if (document.getElementById("marvel").checked &&
        document.getElementById("starwars").checked &&
        document.getElementById("fast2").checked &&
        !document.getElementById("spotify").checked) {

        document.getElementById("result4").innerHTML = "Right!";
        score++;
    } else {
        document.getElementById("result4").innerHTML = "Wrong!";
    }

    // Display Final Score
    document.getElementById("score").innerHTML =
        "Your Score: " + score + " out of 4";

}
