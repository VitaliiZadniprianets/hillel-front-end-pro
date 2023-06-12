const inputs = document.querySelectorAll('input[type="text"]');
const textarea = document.querySelector('textarea');

const lastValue = Symbol('lastValue');

function updateTextarea() {
  const values = Array.from(inputs, input => input.value);
  textarea.value = values.join(', ');
}

inputs.forEach(input => {
  input[lastValue] = input.value;
});

const interval = setInterval(() => {
  let hasChanges = false;

  inputs.forEach(input => {
    if (input.value !== input[lastValue]) {
      hasChanges = true;
      input[lastValue] = input.value;
    }
  });

  if (hasChanges) {
    updateTextarea();
  }
}, 7000);