function removeSecond() {
    δ = performance.now();
    [h, m, s] = timer.value.split(":");
    if (typeof m === 'undefined') {
        s=h;
        h=0;
        m=0;
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
    document.title = timer.value;
    δ = performance.now()-δ;
    return m * 60 + s;
}

// function timerFunction(){
//     if(removeSecond()>0){
//         setTimeout(function() {
//             timerFunction();
//         }, 1000);
//     }
// }
// timerFunction();

timerInterval = setInterval(removeSecond, 1000);

timer.addEventListener('focus', function () {
    clearInterval(timerInterval);
});

timer.addEventListener('blur', function () {
    timerInterval = setInterval(removeSecond, 1000);
});