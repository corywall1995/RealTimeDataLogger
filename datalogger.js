var numberValues = [];
//numberValues = [1,5,9,2];

function addANewNumber() {
  // Get text input from DOM
  var toAdd = document.getElementById("dataInput").value;
  //Check if that variable is a number
  // IF it is a number then add to the end of the array
  if (isNaN(toAdd)) {
    alert("Input was not a number");
  } else {
    numberValues.push(Number(toAdd));
    document.getElementById('dataInput').value = "";
    document.getElementById('total').innerHTML = updateTotal();
    document.getElementById('average').innerHTML = updateAverage();
  }
}

function updateTotal() {
  var runningTotal, i;
  runningTotal = 0;
  for (i = 0; i < numberValues.length; i++) {
    runningTotal += numberValues[i];
  }
  return runningTotal;
}

function updateAverage() {
  var average, total, length;
  total = updateTotal();
  length = numberValues.length;
  average = total/length;
  if (total%length == 0) {
    return average;
  } else {
    return average.toFixed(2);
  }  
}
