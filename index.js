// PROJECT 1: REVERSE A STRING
// This function gets called when you click the "Reverse It!" button
function reverseString() {
    // Get what the user typed
    var userInput = document.getElementById('stringInput').value;
    
    // Find where to show the answer
    var resultArea = document.getElementById('reverseResult');
    
    // Check if user typed anything
    if (userInput === '') {
        resultArea.textContent = 'Please type something first!';
        return;
    }
    
    // Call our reverse function to flip the text
    var flipped = reverse(userInput);
    
    // Show the answer
    resultArea.textContent = 'Reversed: ' + flipped;
}

// This function reverses any text you give it
function reverse(text) {
    var reversed = ''; // Start with empty text
    
    // Go through each letter backwards
    for (var i = text.length - 1; i >= 0; i--) {
        reversed = reversed + text[i]; // Add each letter
    }
    
    return reversed; // Give back the reversed text
}


// PROJECT 2: CHECK IF IT'S A PALINDROME
// This function gets called when you click "Check It!" button
function checkPalindrome() {
    // Get what the user typed
    var userInput = document.getElementById('palindromeInput').value;
    
    // Find where to show the answer
    var resultArea = document.getElementById('palindromeResult');
    
    // Check if user typed anything
    if (userInput === '') {
        resultArea.textContent = 'Please enter some numbers first!';
        return;
    }
    
    // Check if it's a palindrome
    var isPalin = isPalindrome(userInput);
    
    // Show the answer
    if (isPalin === true) {
        resultArea.textContent = userInput + ' is a PALINDROME! ✓';
    } else {
        resultArea.textContent = userInput + ' is NOT a palindrome.';
    }
}

// This function checks if text is the same forwards and backwards
function isPalindrome(text) {
    // Use our reverse function from before
    var backwards = reverse(text);
    
    // Compare original with reversed
    if (text === backwards) {
        return true; // It's a palindrome!
    } else {
        return false; // Not a palindrome
    }
}


// PROJECT 3: TIP CALCULATOR
// This function gets called when you click "Calculate Total!" button
function calculateTip() {
    // Get the bill amount
    var billAmount = document.getElementById('subtotalInput').value;
    
    // Get the tip percentage
    var tipPercent = document.getElementById('tipPercentage').value;
    
    // Find where to show the answer
    var resultArea = document.getElementById('tipResult');
    
    // Convert text to numbers
    billAmount = parseFloat(billAmount);
    tipPercent = parseFloat(tipPercent);
    
    // Check if numbers are valid
    if (isNaN(billAmount) || isNaN(tipPercent)) {
        resultArea.textContent = 'Please enter valid numbers!';
        return;
    }
    
    // Calculate the tip amount
    var tipAmount = billAmount * (tipPercent / 100);
    
    // Calculate total using our function
    var totalAmount = calculateTotal(billAmount, tipPercent);
    
    // Show the answer
    resultArea.innerHTML = 'Tip: $' + tipAmount.toFixed(2) + '<br>Total: $' + totalAmount.toFixed(2);
}

// This function calculates the total bill with tip
function calculateTotal(subtotal, tipPercent) {
    // Calculate tip amount
    var tip = subtotal * (tipPercent / 100);
    
    // Add subtotal and tip together
    var total = subtotal + tip;
    
    return total; // Give back the total
}
