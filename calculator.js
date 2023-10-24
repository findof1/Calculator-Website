    
      function addOperator(operator){
        if(ans && calculation === ''){
          calculation = ans.toString() + operator;
        }else{
          calculation += operator;
        }
      }

      function updateText(number){
        if(updateText !== ''){
          calculation += number;
        }
        document.querySelector('.calculation').innerHTML = calculation;
      }

      function calculate(){
        console.log(calculation);
        ans = eval(calculation);
    calculation += ' = ';
    calculation += ans;
     console.log(`Calculation: ${calculation}`);
     document.querySelector('.calculation').innerHTML = ans;
     calculation = '';

      }


      let calculation = '';
      let ans;