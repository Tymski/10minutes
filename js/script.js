timerTitle = "";
canPlaySample = true;
sample = new Audio('alarm.mp3');

function removeSecond() {
    let inputValue = timer.value;
    let input = timer.value.split(" ");
    if (input.length > 1) {
        timer.value = input[0];
        input.shift();
        timerTitle = input.join(" ");
        if (timerTitle.length > 0) {
            timerTitleInput.value = timerTitle;
            timerTitleInput.classList.remove("hidden");
        }
    }
    [h, m, s] = timer.value.split(":");
    if (typeof m === 'undefined') {
        s = h;
        h = 0;
        m = 0;
    }
    if (typeof s === 'undefined') {
        [m, s] = [h, m];
        h = 0;
    }
    [h, m, s] = [Number(h), Number(m), Number(s)];
    s += m * 60 + h * 3600;
    s -= 1;
    if (s < 0) s = 0;
    h = Math.floor(s / 3600);
    m = Math.floor(s / 60) - h * 60;
    s -= m * 60 + h * 3600;
    timer.value = [leftPad(m, 2), leftPad(s, 2)].join(":");
    if (h > 0) timer.value = leftPad(h, 2) + ":" + timer.value;
    document.title = timer.value + " " + timerTitle;
    if(timer.value != inputValue)canPlaySample = true;
    if (canPlaySample && playSoundCheckbox.checked && timer.value == "00:00"){
        canPlaySample = false;
        sample.play();
    }
    return m * 60 + s;
}

timerInterval = setInterval(removeSecond, 1000);

timer.addEventListener('focus', function () {
    clearInterval(timerInterval);
});

timer.addEventListener('blur', function () {
    timerInterval = setInterval(removeSecond, 1000);
});

timer.addEventListener('keypress', function (keypress) {
    if (keypress.key == "Enter") timer.blur();
});

timerTitleInput.addEventListener('blur', function () {
    timerTitle = timerTitleInput.value;
    if (timerTitle === ''){
        timerTitleInput.classList.add("hidden");
    }
});
    
timerTitleInput.addEventListener('keypress', function (keypress) {
    if (keypress.key == "Enter") timerTitleInput.blur();
});

// function timerFunction(){
//     if(removeSecond()>0){
//         setTimeout(function() {
//             timerFunction();
//         }, 1000);
//     }
// }
// timerFunction();

// timerTitleInput