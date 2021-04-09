// #5 паліндром by Sergiy Prudkiy --- не підходить, треба використати %
let num = prompt("Введіть п'ятирозрядне число");
num = num + "";
if (num === num.split("").reverse( ).join("")){
    alert ("Палліндром"); 
} else {
    alert ("Не палліндром");
}
