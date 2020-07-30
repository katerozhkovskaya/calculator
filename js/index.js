const display = document.querySelector('.display');
const results = document.querySelector('.results');

document.querySelectorAll('.digit')
.forEach(button=>button.addEventListener('click', digitPressed));


function digitPressed (ev){
    const digit = ev.target.innerText;
    display.value+=digit;
}

//document.querySelectorAll('.koma')
//.forEach(button=>button.addEventListener('click', digitPressed));

let operation = "";
let first_operand=0;
let second_operand=0;
document.querySelectorAll('.operation')
.forEach(button=>button.addEventListener('click', operationPressed));

function operationPressed (ev){
    const oper = ev.target.value;
    //if (operation ===""){

    //}else{

    //}

    operation=oper;
    first_operand=display.value;
    display.value="";
    
}

document.querySelectorAll('.equal')
.forEach(button=>button.addEventListener('click', equalPressed));

function equalPressed (ev){
    second_operand=display.value;
    let result=0;
    switch(operation){
    case "+":
    result=parseFloat(first_operand)+parseFloat(second_operand);
    break;
    case "-":
    result=parseFloat(first_operand)-parseFloat(second_operand);
    break;
    case "/":
    result=parseFloat(first_operand)/parseFloat(second_operand);
    break;  
    case "*":
    result=parseFloat(first_operand)*parseFloat(second_operand);
    break; 
          
    }
    results.innerHTML+=first_operand+operation+second_operand+"="+result+"<br/>";
    display.value=result;
}

document.querySelectorAll('.clear')
.forEach(button=>button.addEventListener('click', clearPressed));

function clearPressed (){
    display.value="";
}