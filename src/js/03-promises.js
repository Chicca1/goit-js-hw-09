import Notiflix from "notiflix";

const form = document.querySelector(".form");

form.addEventListener("submit", createPromises);


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}


function createPromises(event) {
  event.preventDefault();

  const delayInput = document.querySelector("input[name='delay']");
  const stepInput = document.querySelector("input[name='step']");
  const amountInput = document.querySelector("input[name='amount']");

  const firstDelay = Number(delayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);

  let currentDelay = firstDelay;

  for (let i = 1; i <= amount; i++) {
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    currentDelay += step;
  }

  form.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const promiseResult = { position, delay };

      if (shouldResolve) {
        resolve(promiseResult);
      } else {
        reject(promiseResult);
      }
    }, delay);
  });
}

