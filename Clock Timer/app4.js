document.addEventListener("DOMContentLoaded", function () {
    const timerBox = document.querySelector("#timer");
    let second = 0;
    let minute = 0;
    let hour = 0;

    timePad();

    function updateTimer() {
        second++;
        if (second === 60) {
            second = 0;
            minute++;
            if (minute === 60) {
                minute = 0;
                hour++;
            }
        }
        timerBox.textContent = timePad(hour) + ":" + timePad(minute) + ":" + timePad(second);
    }

    setInterval(updateTimer, 1000);

});
function timePad(number) {
    return (number < 10) ? '0' + number : number;
}