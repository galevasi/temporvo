// Type alias for a variable that can be either a number or a string
type NumberOrString = number | string;

// Function to concatenate two NumberOrString values
function concatenateValues(value1: NumberOrString, value2: NumberOrString): string {
  // Convert both values to strings and concatenate them
  return String(value1) + String(value2);
}

// Function to add two NumberOrString values if both are numbers
function addValues(value1: NumberOrString, value2: NumberOrString): NumberOrString {
  // Check if both values are numbers
  if (typeof value1 === 'number' && typeof value2 === 'number') {
    // Return the sum of the two numbers
    return value1 + value2;
  }
  // If one or both values are not numbers, return an error message
  return 'Both values must be numbers to perform addition.';
}

// Example usage:
const resultConcat = concatenateValues(10, '20'); // '1020'
const resultAdd = addValues(10, 20); // 30
