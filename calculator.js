document.addEventListener('DOMContentLoaded',function(){

      // Define the add function
    function add(a, b) {
        return a + b;
    }

                // Set up event listener for the Add button

     document.getElementById('add').addEventListener('click', function(){
        const number1 = parseFloat(document.getElementById('number1').value) || 0;
        const number2 = parseFloat(document.getElementById('number2').value) || 0;
        const result = add(number1,number2);
        document.getElementById('calculation-result').textContent = result
     });

      // Define the subtract function
      function subtract(a,b){
        return a - b;
      }

      // Set up event listener for the Subtract button
    document.getElementById('subtract').addEventListener('click', function(){
        const number1 = parseFloat(document.getElementById('number1').value) || 0;
        const number2 = parseFloat(document.getElementById('number2').value) || 0;
        const result = subtract(number1,number2);
        document.getElementById('calculation-result').textContent = result;
    });

    // Define the multiply function
        function multiply(a,b){
            return a * b;
        }

        // Set up event listener for the Subtract button
     document.getElementById('multiply').addEventListener('click', function(){
        const number1 = parseFloat(document.getElementById('number1').value) || 0;
        const number2 = parseFloat(document.getElementById('number2').value) || 0;
        const result = multiply(number1,number2);
        document.getElementById('calculation-result').textContent = result;
    });
    
    
    // Define the divide  function
        function divide(a,b){
            return a/b;
        }

        // Set up event listener for the divide button
    document.getElementById('divide').addEventListener('click', function(){
        const number1 = parseFloat(document.getElementById('number1').value) || 0;
        const number2 = parseFloat(document.getElementById('number2').value) || 0;
        const result = divide(number1,number2);
        document.getElementById('calculation-result').textContent = result;
    });



})