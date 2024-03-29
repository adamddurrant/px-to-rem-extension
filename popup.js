document.addEventListener('DOMContentLoaded', function () {

  // Varibles
  var valueInput = document.getElementById('valueInput');
  var result = document.getElementById('result');
  var copyButton = document.getElementById('copyButton');
  var copyIcon = document.getElementById('copyIcon');

  // Auto focus input
  window.onload = function() {
    valueInput.focus();
  }

  // Input and output logic
  valueInput.addEventListener('input', function () {
    var inputValue = valueInput.value.trim();

    if (inputValue === '') {
      result.innerText = '';
      return;
    }

    var pixelRegex = /^(\d+(?:\.\d+)?)px$/;
    var remRegex = /^(\d*(?:\.\d+)?)rem$/;

    if (pixelRegex.test(inputValue)) {
      var pixelValue = parseFloat(inputValue.match(pixelRegex)[1]);
      var remValue = pixelValue / 16;
      result.innerText = parseFloat(remValue.toFixed(4)) + 'rem';
    } else if (remRegex.test(inputValue)) {
      var remValue = parseFloat(inputValue.match(remRegex)[1]);
      var pixelValue = remValue * 16;
      result.innerText = pixelValue.toFixed(0) + 'px';
    } else {
      null
    }
  });

  // Copy button logic
  copyButton.addEventListener('click', function () {
    if (result.innerText !== '') {
      navigator.clipboard.writeText(result.innerText).then(function () {
        copyIcon.src = "/icons/tick-icon.svg";
        copyIcon.style.transition = "all 2s ease-in-out";
        setTimeout(function () {
          copyIcon.src = "/icons/copy-icon.svg";
          copyIcon.style.transition = "all 2s ease-in-out";
        }, 2000);
      });
    }
  });
});