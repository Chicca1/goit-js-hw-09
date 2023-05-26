import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import notiflix from "notiflix";

const datePicker = document.getElementById("datetime-picker");
const startButton = document.querySelector("[data-start]");
const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");

let selectedDate;
let timerInterval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      notiflix.Notify.failure("Please choose a date in the future");
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};

flatpickr(datePicker, options);

function updateTimerDisplay(time) {
  daysElement.textContent = addLeadingZero(time.days);
  hoursElement.textContent = addLeadingZero(time.hours);
  minutesElement.textContent = addLeadingZero(time.minutes);
  secondsElement.textContent = addLeadingZero(time.seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}

function startTimer() {
  if (timerInterval) {
    return;
  }

  const currentDate = new Date();
  const timeRemaining = selectedDate - currentDate;

  if (timeRemaining <= 0) {
    notiflix.Notify.success("Countdown completed");
    return;
  }

  startButton.disabled = true;
  datePicker.disabled = true;

  timerInterval = setInterval(() => {
    const currentDate = new Date();
    const timeRemaining = selectedDate - currentDate;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      notiflix.Notify.success("Countdown completed");

      startButton.disabled = false;
      datePicker.disabled = false;

      timerInterval = null;
      return;
    }

    const time = convertMs(timeRemaining);
    updateTimerDisplay(time);
  }, 1000);
}

function convertMs(ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  
  const days = Math.floor(ms / day);
 
  const hours = Math.floor((ms % day) / hour);
 
  const minutes = Math.floor((ms % hour) / minute);

  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
}

startButton.addEventListener("click", startTimer);
