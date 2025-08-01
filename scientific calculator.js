const display = document.getElementById('display');

// Append value to display
function appendValue(value) {
  if (value === 'π') {
    display.value += Math.PI;
  } else {
    display.value += value;
  }
}

// Clear entire display
function clearDisplay() {
  display.value = '';
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Evaluate the expression
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}
