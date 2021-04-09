// №7 кількість файлів
const stable = 820;
let value = prompt("Будь ласка, зазначте об'єм вашого носія, Gb");
alert("На ваш носій, об'ємом " + value + "Gb, може бути переміщено " + Math.trunc(value * 1000 / stable) + " файл(ів)");
