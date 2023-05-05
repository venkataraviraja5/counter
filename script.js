let number=document.getElementById('screen');
let decrement=document.getElementById('btn1');
let increment=document.getElementById('btn3');
let reset=document.getElementById('btn2');
let count=0;

function increment1(){
    count=count+1;
    number.innerHTML=count;
}
function decrement1(){
    count=count-1;
    number.innerHTML=count;
}
function reset1(){
    count=0;
    number.innerHTML=count;
}



increment.addEventListener('click',increment1);
decrement.addEventListener('click',decrement1);
reset.addEventListener('click',reset1);