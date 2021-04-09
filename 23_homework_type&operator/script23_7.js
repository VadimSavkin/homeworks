// #7 сума покупки + знижка
let summ = prompt('Вкажіть суму покупки, грн.');
let discount3 = 0.03;
let discount5 = 0.05;
let discount7 = 0.07;
if (summ <= 199) {
    alert('Знижка не застосовується! Набирайте ще!');
} else if (summ <= 300) {
    alert ("Ви економите" + " " + (summ * discount3).toFixed(2) + " " + "грн.");
} else if (summ <= 500) {
    alert ("Ви економите" + " " + (summ * discount5).toFixed(2) + " " + "грн.");
} else if (summ >= 501) {
    alert ("Ви економите" + " " + (summ * discount7).toFixed(2) + " " + "грн.");
}