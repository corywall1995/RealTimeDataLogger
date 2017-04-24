var numberValues = [];
//numberValues = [1,5,9,2];


// function: addANewNumber()
// @param: none
// @return: none
// @breif: gets a value entered by the user and checks if value is a number
//         if value entered is not a number generates an alert informing the user
//         and does nothing. If value is a number then casts the value as a number,
//         adds the number to the end of the array, calls functions calculateTotal()
//         and calculateAverage(), displays these values, resets text input box to
//         the empty string.
function addANewNumber() {
  // Get text input from DOM
  var toAdd = document.getElementById("dataInput").value;
  //Check if that variable is a number
  // IF it is a number then add to the end of the array
  if (isNaN(toAdd)) {
    alert("Input was not a number");
    document.getElementById('dataInput').value = "";
  } else {
    numberValues.push(Number(toAdd));
    document.getElementById('dataInput').value = "";
    document.getElementById('total').innerHTML = calculateTotal();
    document.getElementById('average').innerHTML = calculateAverage();
  }
}

// function: calculateTotal()
// @param: none
// @return: returns the sum of all the elements in the array
// @brief: Iterates through the array and calculates the sum of all element in
//         the array
function calculateTotal() {
  var runningTotal, i;
  runningTotal = 0;
  for (i = 0; i < numberValues.length; i++) {
    runningTotal += numberValues[i];
  }
  return runningTotal;
}

// funtion: calculateAverage()
// @param: none
// @return: returns the average values of the elements in the array
// @brief: Calculates the average of all elements in the array and return that value
function calculateAverage() {
  var average, total, length;
  // Calls updateTotal to get sum total of the array element
  total = calculateTotal();
  length = numberValues.length;
  average = total/length;
  // if average is a whole number then return that number
  // else return average fixed to 2 decimal places
  if (total%length == 0) {
    return average;
  } else {
    return average.toFixed(2);
  }
}
