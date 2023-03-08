// Описан в документации
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startButton = document.querySelector('button[data-start]');
const myInput = document.querySelector("#datetime-picker");


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        let now = Date.now();
        const currentDate = selectedDates[0];
        if (currentDate < now) {
            startButton.disabled = true
            window.alert("Please choose a date in the future")
        } else {
            startButton.disabled = false;
            startButton.addEventListener('click', timer.start(selectedDates[0]));

        }
    },
};

const timer = {
    intervalId: null,
    start(deadline) {
        this.intervalId = setInterval(() => {
            const diff = deadline - Date.now();
            if (diff <= 0) {
                this.stop();

                return;
            }
            const { days, hours, minutes, seconds } = this.convertMs(diff)
            document.querySelector('[data-days]').textContent = this.pad(days);
            document.querySelector('[data-hours]').textContent = this.pad(hours);
            document.querySelector('[data-minutes]').textContent = this.pad(minutes);
            document.querySelector('[data-seconds]').textContent = this.pad(seconds);
  
        }, 1000);



    },

    stop() {
        clearInterval(intervalId)
    },
convertMs(ms) {
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
},

pad(value) {
        return String(value).padStart(2, 0);
    },


}

const fp = flatpickr(myInput, (options));


