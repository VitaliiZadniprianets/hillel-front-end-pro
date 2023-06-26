window.onload = function() {
    const table = document.getElementById('myTable');
  
    table.addEventListener('click', function(event) {
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
      }
    });
  
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
  