/* 1 спосіб
window.onload = function() {
  const table = document.getElementById('myTable');

  table.addEventListener('click', onClickHandler);

  function onClickHandler(event) {
    const target = event.target;
    if (target.tagName === 'TD') {
      const originalText = target.innerText;

      const textarea = createTextarea(originalText);
      const saveButton = createButton('Save');
      const cancelButton = createButton('Cancel');

      target.innerText = '';
      target.append(textarea, saveButton, cancelButton);

      saveButton.addEventListener('click', function() {
        target.innerText = textarea.value;
        cleanup();
      });

      cancelButton.addEventListener('click', function() {
        target.innerText = originalText;
        cleanup();
      });
    };
  };

  function createTextarea(value) {
    const textarea = document.createElement('textarea');
    textarea.value = value;
    return textarea;
  };

  function createButton(text) {
    const button = document.createElement('button');
    button.innerText = text;
    return button;
  };

  function cleanup() {
    const textareas = table.getElementsByTagName('textarea');

    Array.from(textareas).forEach(function(textarea) {
      const cell = textarea.parentNode;
      cell.innerText = textarea.value;
    });
  };
};
*/

///2 спосіб////

window.onload = function() {
  const table = document.getElementById('myTable');

  table.addEventListener('click', onClickHandler);

  function onClickHandler(event) {
    const target = event.target;
    if (target.tagName === 'TD') {
      const originalText = target.innerText;

      const textarea = createTextarea(originalText);
      const buttonWrapper = createButtonWrapper();

      target.innerText = '';
      target.append(textarea, buttonWrapper);

      buttonWrapper.addEventListener('click', handleButtonClick);
    };
  };

  function handleButtonClick(event) {
    const clickedButton = event.target;
    if (clickedButton.tagName === 'BUTTON') {
      const action = clickedButton.dataset.action;
      const target = clickedButton.parentNode.parentNode;
      const textarea = target.querySelector('textarea');
      const originalText = textarea.dataset.originalText;

      if (action === 'save') {
        saveChanges(target, textarea.value);
      } else if (action === 'cancel') {
        cancelChanges(target, originalText);
      };
    };
  };

  function createTextarea(value) {
    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.dataset.originalText = value;
    return textarea;
  };

  function createButtonWrapper() {
    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('button-wrapper');

    const saveButton = createButton('Save');
    saveButton.dataset.action = 'save';

    const cancelButton = createButton('Cancel');
    cancelButton.dataset.action = 'cancel';

    buttonWrapper.append(saveButton, cancelButton);
    return buttonWrapper;
  };

  function createButton(text) {
    const button = document.createElement('button');
    button.innerText = text;
    return button;
  };

  function saveChanges(target, value) {
    target.innerText = value;
    cleanup();
  };

  function cancelChanges(target, value) {
    target.innerText = value;
    cleanup();
  };

  function cleanup() {
    const textareas = table.getElementsByTagName('textarea');

    Array.from(textareas).forEach(function(textarea) {
      const cell = textarea.parentNode;
      cell.innerText = textarea.value;
    });
  };
};