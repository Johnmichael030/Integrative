function addNumbers(a, b) {
    return a + b;
}

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

if (!isNaN(num1) && !isNaN(num2)) {
    alert("The sum is: " + addNumbers(num1, num2));
} else {
    alert("Invalid input! Please enter valid numbers.");
}
