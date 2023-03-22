function checkGrade() {
    var score = document.getElementById("yourScore").value;
    var songFail = new Audio("Audio/Sorry.mp3");
    var songCredit = new Audio("Audio/Applaud.wav");
    var songPassed = new Audio("Audio/More applaud.wav");

    if (score === "" || score > 100 || score < 0) {
        // alert("Please enter the appropriate score.");
        var result = "Please enter the appropriate score.";
        showScore.innerHTML = result;
    } else if (score >= 0 && score < 40) {
        // alert("You scored " + score + ", you failed F.");
        var result = "You scored " + score + ", you failed F.";
        showScore.innerHTML = result;
        showScore.style.color = "red";
        songFail.play();
        document.getElementById("yourScore").value = "";
    } else if (score >=40 && score < 45) {
        // alert("You scored " + score + ", you have E.");
        var result = "You scored " + score + ", you have E.";
        showScore.innerHTML = result;
        showScore.style.color = "red"
        songFail.play();
        document.getElementById("yourScore").value = "";
    } else if (score >=45 && score < 50) {
        // alert("You scored " + score + ", you have D.");
        var result = "You scored " + score + ", you have D.";
        showScore.innerHTML = result;
        showScore.style.color = "red"
        songFail.play();
        document.getElementById("yourScore").value = "";
    } else if (score >=50 && score < 60) {
        // alert("You scored " + score + ", you have C.");
        var result = "You scored " + score + ", you have C.";
        showScore.innerHTML = result;
        showScore.style.color = "blue";
        songCredit.play();
        document.getElementById("yourScore").value = "";
    } else if (score >= 60 && score < 70) {
        // alert("You scored " + score + ", you passed B.");
        var result = "You scored " + score + ", you passed B.";
        showScore.innerHTML = result;
        showScore.style.color = "green";
        songPassed.play();
        document.getElementById("yourScore").value = "";
    } else if (score >= 70 && score <= 100) {
        // alert("You scored " + score + ", you passed A.");
        var result = "You scored " + score + ", you passed A.";
        showScore.innerHTML = result;
        showScore.style.color = "green";
        songPassed.play();
        document.getElementById("yourScore").value = "";
    }
}