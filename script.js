document.getElementById("Pomodoro").addEventListener("click", function () {
    document.body.style.background = "lightblue";
});

var bool = false;

var timer = document.getElementById("time");




var intervalTimer;

var timer = 60*25;

document.getElementById("Start").addEventListener("click", function () {

    

    if (bool == false) {
        
        display = document.querySelector('#time');


        intervalTimer = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);


        bool = true;
        document.getElementById("Start").innerHTML = "STOP";
        

    } else {
        document.getElementById("Start").innerHTML = "START";
        clearInterval(intervalTimer);
        bool = false;

    }

});