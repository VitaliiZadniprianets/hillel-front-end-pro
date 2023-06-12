const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const textarea = document.getElementById('textarea');

function updateTextarea() {
  textarea.value = `${input1.value}, ${input2.value}, ${input3.value}`;
};

const interval = setInterval(() => {
  if (
    input1.value !== input1.lastValue ||
    input2.value !== input2.lastValue ||
    input3.value !== input3.lastValue ) {

      updateTextarea();

      input1.lastValue = input1.value;
      input2.lastValue = input2.value;
      input3.lastValue = input3.value;
    }
  }, 7000);