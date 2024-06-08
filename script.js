function fn0(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 0;
}
function fn1(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 1;
}
function fn2(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 2;
}
function fn3(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 3;
}
function fn4(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 4;
}
function fn5(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 5;
}
function fn6(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 6;
}
function fn7(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 7;
}
function fn8(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 8;
}
function fn9(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 9;
}
function feraser(){
    let previouse = document.getElementById("display").innerHTML;
    let eraser = previouse.slice(0, -1)
    document.getElementById("display").innerHTML = eraser
}

let firstSave;
let op;

function addition(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    op = 1;
}
function mn(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    op = 2;
}
function ml(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    op = 3;
}
function dv(){
    firstSave = document.getElementById("display").innerHTML;//add value in display to firstsave variable  
    document.getElementById("display").innerHTML = "";
    op = 4;
}

function eq(){
    let secondSave = document.getElementById("display").innerHTML;
    if(op == 1){
        document.getElementById("display").innerHTML = parseInt(firstSave) + parseInt(secondSave);
    }else if(op == 2){
        document.getElementById("display").innerHTML = parseInt(firstSave) - parseInt(secondSave);
    }else if(op == 3){
        document.getElementById("display").innerHTML = parseInt(firstSave) * parseInt(secondSave);
    }else if(op == 4){
        document.getElementById("display").innerHTML = parseInt(firstSave) / parseInt(secondSave);
    }else{
        document.getElementById("display").innerHTML = "invalid";
    }
}
function fn(value) {
    document.getElementById("display").value += value;
}

function feraser() {
    let displayValue = document.getElementById("display").value;
    document.getElementById("display").value = displayValue.slice(0, -1);
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function eq() {
    let expression = document.getElementById("display").value;
    let result = eval(expression);
    document.getElementById("display").value = result;
}