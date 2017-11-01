function leftPad(number, padLength) {
    n = String(number).length;
    for (let i = 0; i < padLength - n; i++) {
        number = "0" + number;
    }
    return number;
}