function checkInput() {

    // Get input value
    const inputValue = document.getElementById("userInput").value.trim();

    // Convert input to number
    const number = Number(inputValue);

    // Select result paragraph
    const result = document.getElementById("result");

    // Check input using if...else if...else
    if (inputValue === "" || Number.isNaN(number)) {
        result.textContent = "Please enter a valid number!";
    }
    else if (number < 10) {
        result.textContent = "The number is lower than 10";
    }
    else if (number > 10) {
        result.textContent = "The number is higher than 10";
    }
    else {
        result.textContent = "The number is equal to 10";
    }
}

// Add click event listener
document.getElementById("checkBtn")
    .addEventListener("click", checkInput);
