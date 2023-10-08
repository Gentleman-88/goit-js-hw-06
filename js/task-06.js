const inputValidation = document.querySelector('#validation-input');

function checkLength() {
    const getLength = parseInt(inputValidation.getAttribute('data-length'));
    const inputValue = inputValidation.value.trim().length;
    

    if (inputValue === getLength) {
        inputValidation.classList.remove("invalid");
        inputValidation.classList.add("valid");
        console.log(inputValue);
        console.log(inputValidation.value);
    } else {
        inputValidation.classList.remove("valid");
        inputValidation.classList.add("invalid");
        console.log(inputValue);
        console.log(inputValidation.value);
    }
};

inputValidation.addEventListener('blur', checkLength);


