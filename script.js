document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements
    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const calculateButton = document.getElementById('calculate-btn');
    const resultSpan = document.getElementById('sum-result');

    // Add a click event listener to the button
    calculateButton.addEventListener('click', () => {
        // Get the values from the input fields
        const num1 = parseFloat(number1Input.value);
        const num2 = parseFloat(number2Input.value);

        // Check if the inputs are valid numbers
        if (isNaN(num1) || isNaN(num2)) {
            resultSpan.textContent = 'Please enter valid numbers.';
            return; // Exit the function
        }

        // Calculate the sum
        const sum = num1 + num2;

        // Display the result
        resultSpan.textContent = sum;
    });
});