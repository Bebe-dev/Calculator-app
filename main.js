const upper = document.querySelector('#upper');
const lower = document.querySelector('#lower');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.all-clear');
const del = document.querySelector('.delete');
const equals = document.querySelector('.equal');
//const dot = document.querySelector('.dot');

let up = "";
let low = "";
let result = null;
let lastOperation = ' ';
let haveDot = false;

numbers.forEach(number =>{
  number.addEventListener('click', (e) =>{
    if(e.target.innerText==='.' && !haveDot){
      haveDot = true;
    } else if(e.target.innerText==='.' && haveDot){
      return;
    }
    low += e.target.innerText;
    lower.innerText = low;
  })
  
})

operators.forEach(operator => {
  operator.addEventListener('click', (e) =>{
    if(!low)return;
    haveDot = false;
    const operatorName = e.target.innerText;
    if(up && low && lastOperation){
      mathOperator();
    } else{
      result = parseFloat(low);
      
    }
    clearVar(operatorName);
    lastOperation = operatorName;
    console.log(result);
  })
})
function clearVar(name = ""){
  up += low + " " + name + " ";
  upper.innerText = up;
  lower.innerText = "";
  low = "";
  //lower.innerText = result;
}
function mathOperator(){
  if(lastOperation=='x'){
    result = parseFloat(result) * parseFloat(low);
  } else if(lastOperation=='÷'){
    result = parseFloat(result) / parseFloat(low);
  } else if (lastOperation == '-'){
    result = parseFloat(result) - parseFloat(low);
  } else if (lastOperation == '+') {
    result = parseFloat(result) + parseFloat(low);
  } else if (lastOperation == '%') {
    result = parseFloat(result) / 100;
  }
}

equals.addEventListener('click', (e)=> {
  if(!up || !low)return;
  haveDot = false;
  mathOperator();
  clearVar();
  lower.innerText = result;
  low = result;
  up = '';
})

clear.addEventListener('click', (e)=>{
  up = "";
  low = "";
  lower.innerText = "0";
  upper.innerText = "0";
  result = "";
})

del.addEventListener('click', (e)=>{
  low = low.toString().slice(0, -1);
  lower.innerText = low;
})
