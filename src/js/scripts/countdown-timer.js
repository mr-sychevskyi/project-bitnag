const countdownTimerField = document.querySelector('.countdown-timer');
const daysField = document.querySelector('.timer-days');
const hoursField = document.querySelector('.timer-hours');
const minutesField = document.querySelector('.timer-minutes');
const secondsField = document.querySelector('.timer-seconds');

const countDownDate = new Date("Dec 31, 2019 12:00:00").getTime();

const countdownTimer = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = countDownDate - now;

    daysField.innerHTML = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    hoursField.innerHTML = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutesField.innerHTML = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    secondsField.innerHTML = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if (timeLeft < 0) {
        clearInterval(countdownTimer);
        countdownTimerField.innerHTML = '<span class="timer-notification">Expired</span>';
    }
}, 1000);
