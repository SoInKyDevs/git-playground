var Calculator = {
  init: function() {
    document.querySelector('#submit-add').addEventListener('click', function() {
      Calculator.add();
    });
    
    document.querySelector('#submit-subtract').addEventListener('click', function() {
      Calculator.subtract();
    });
    
    document.querySelector('#submit-divide').addEventListener('click', function() {
      Calculator.divide();
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
  },
  
  divide: function() {
    var firstNumber,
        secondNumber,
        result,
        returns;
        
    firstNumber = document.querySelector('#divide-first-number').value;
    secondNumber = document.querySelector('#divide-second-number').value;
    result = document.querySelector('#divide-result');
    
    returns = +firstNumber / +secondNumber;
    result.innerHTML = "= " + returns;
  },

  multiply: function() {
    var firstNumber,
        secondNumber,
        result,
        returns;
        
    firstNumber = document.querySelector('#multiply-first-number').value;
    secondNumber = document.querySelector('#multiply-second-number').value;
    result = document.querySelector('#multiply-result');
    
    returns = +firstNumber * +secondNumber;
    result.innerHTML = "= " + returns;
  }
};