// №9 поліндром by Nazar
let number = prompt("Введіть, будь ласка, тризначне число");
let num1 = number % 10;
let num2 = Math.floor(number % 100 / 10);
let num3 = Math.floor(number / 100);
let result = "" + num1 + num2 + num3;
window.alert(result)