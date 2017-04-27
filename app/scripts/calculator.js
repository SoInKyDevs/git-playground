var Calculator = {
  init: function() {
    document.querySelector('#submit-add').addEventListener('click', function() {
      Calculator.add();
    });
  },
  
  add: function() {
    var firstNumber,
        secondNumber,
        result;
        
    firstNumber = document.querySelector('#first-number').value;
    secondNumber = document.querySelector('#second-number').value;
    result = document.querySelector('#result');
    
    sum = +firstNumber + +secondNumber;
    result.innerHTML = sum;
  }
};