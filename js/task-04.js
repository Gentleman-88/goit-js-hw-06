const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueCount = document.querySelector("#value");

let counterValue = 0;

function decrement() {
    counterValue -= 1;
    updateCounter();
};

function increment() {
    counterValue += 1;
    updateCounter();
};

function updateCounter() {
    valueCount.textContent = counterValue;
}

decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);