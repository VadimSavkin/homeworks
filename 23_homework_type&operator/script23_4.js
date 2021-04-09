// #4 чи високосний рік by Nazar
let year = +prompt("Введіть рік для перевірки");
if (year % 400 == 0) {
    window.alert("Цей рік високосний");
} else if (year % 4 == 0) {
    window.alert("Цей рік високосний");
} else {
    window.alert("Цей рік НЕ високосний");
}