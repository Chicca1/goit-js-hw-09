function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');
const createBtn = document.querySelector('#createBtn');
form.addEventListener('submit', (event) => {

  const { step, delay, amount } = form.elements;

  const delayInput = parseInt(delay.value);
  const stepInput = parseInt(step.value);
  const amountInput = parseInt(amount.value);

  for (let i = 0; i < amountInput; i++) {
    createPromise(i, delayInput + i * stepInput)
      .then(({ position, delay }) => {
        Notiflix.Notify.Success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.Failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }

  form.reset();
});
