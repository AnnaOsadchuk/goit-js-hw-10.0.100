import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  inputEl: document.getElementById('datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  pickerTimer: document.querySelector('.timer'),
  days: document.querySelector('span[data-days]'),
  huurs: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

let userSelectedDate = new Date();
let currentDate = new Date();

const options = {
  time_24hr: true,
  defaultDate: currentDate,
  disableMobile: 'true',
  minuteIncrement: 1,
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    /*  if (userSelectedDate <= currentDate) {
      window.alert('Please choose a date in the future');
    } */
    refs.startBtn.removeAttribute('disabled');
    console.log(userSelectedDate);
  },
};

flatpickr(refs.inputEl, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
/* console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
 */
