// №8 шоколад і гроші
let summ = prompt("Введіть суму коштів, зарезервовану для покупок, грн.");
let price = prompt("Введіть ціну обраного товару, грн.");
window.alert("Ваших коштів вистачає для придбання " + Math.trunc(summ / price) + " одиниць товару");
window.alert("Не забудьте вашу решту: " + (summ % price).toFixed(2) + " грн.");