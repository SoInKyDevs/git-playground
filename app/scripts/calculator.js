var Calculator = {
  init: function() {
    document.querySelector('#submit-add').addEventListener('click', function() {
      Calculator.add();
    });
    
    document.querySelector('#submit-subtract').addEventListener('click', function() {
      Calculator.subtract();
    });
  },

  add: function() {
    var firstNumber,
    secondNumber,
    result,
    returns;

    firstNumber = document.querySelector('#add-first-number').value;
    secondNumber = document.querySelector('#add-second-number').value;
    result = document.querySelector('#add-result');

    returns = +firstNumber + +secondNumber;
    result.innerHTML = "= " + returns;
  },

  subtract: function() {
    var firstNumber,
        secondNumber,
        result,
        returns;
        
    firstNumber = document.querySelector('#subtract-first-number').value;
    secondNumber = document.querySelector('#subtract-second-number').value;
    result = document.querySelector('#subtract-result');
    
    returns = +firstNumber - +secondNumber;
    result.innerHTML = "= " + returns;
  }
};