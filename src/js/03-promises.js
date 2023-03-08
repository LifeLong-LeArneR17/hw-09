const firstDelay = document.querySelector('[name=delay]');
const secondDelay = document.querySelector('[name=step]');
const amountPromise = document.querySelector('[name=amount]');
const form = document.querySelector('form');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const amount = Number(amountInput.value);
  const delay = Number(delayInput.value);
  const step = Number(stepInput.value);
  let position = 1;
  for (let i = 0; i < amount; i++) {
    createPromise(position, delay).then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }).catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    position++;
    delay += step;
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}