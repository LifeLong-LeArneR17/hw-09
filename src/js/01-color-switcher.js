const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body')


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const onClick  = () => {
    timerId  = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
        startButton.disabled = true
    }, 1000);
}

const onClickStop = () => {
    clearInterval(timerId);
    startButton.disabled = false;
}


startButton.addEventListener('click', onClick);
stopButton.addEventListener('click', onClickStop);