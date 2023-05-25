import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate < new Date()) {
      window.alert("Please choose a date in the future");
      return;
    }

    const startButton = document.querySelector('[data-start]');
    startButton.disabled = false;
  },
};

const datetimePicker = document.querySelector('#datetime-picker');
flatpickr(datetimePicker, options);

const timerFields = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]')
};

let countdownInterval;

function startTimer() {
  const selectedDate = flatpickr.parseDate(datetimePicker.value);
  const currentDate = new Date();
  const difference = selectedDate - currentDate;

  if (difference <= 1000) {
    clearInterval(countdownInterval);
    return;
  }

  countdownInterval = setInterval(() => {
    const remainingTime = convertMs(selectedDate - new Date());
    updateTimer(remainingTime);
  }, 1000);

  const startButton = document.querySelector('[data-start]');
  startButton.disabled = true;
}

function updateTimer(remainingTime) {
  timerFields.days.textContent = addLeadingZero(remainingTime.days);
  timerFields.hours.textContent = addLeadingZero(remainingTime.hours);
  timerFields.minutes.textContent = addLeadingZero(remainingTime.minutes);
  timerFields.seconds.textContent = addLeadingZero(remainingTime.seconds);
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
  
  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  const startButton = document.querySelector('[data-start]');
  startButton.addEventListener('click', startTimer);
  
