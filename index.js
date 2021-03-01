const timer = {
  selector: "#timer-1",
  targetDate: new Date("Jul 5, 2025"),
};

const refs = {
  timerRef: document.querySelector(`${timer.selector}`),
  daysRef: document.querySelector('[data-value="days"]'),
  hoursRef: document.querySelector('[data-value="hours"]'),
  minutesRef: document.querySelector('[data-value="mins"]'),
  secondsRef: document.querySelector('[data-value="secs"]'),
};

function chooseMaprkup(selector) {}

const { timerRef, daysRef, hoursRef, minutesRef, secondsRef } = refs;

setTimer(timer.targetDate);
console.log(timer.targetDate);

function setTimer(targetDate) {
  setInterval(() => {
    const currentDate = Date.now();
    const time = targetDate - currentDate;

    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    daysRef.textContent = days;
    hoursRef.textContent = hours;
    minutesRef.textContent = mins;
    secondsRef.textContent = secs;
  }, 1000);
}

function pad(value) {
  return String(value).padStart(2, "0");
}
