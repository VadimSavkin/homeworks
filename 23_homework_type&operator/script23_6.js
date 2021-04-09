// №6 конвертер валют 
const eurEx = 0.844;
const uanEx = 27.75;
const aznEx = 16.38;
let doll = +prompt('Введіть суму грошових коштів, $');
let currency = +prompt("Оберіть валюту до видачі: EUR - 1; UAN - 2; AZN - 3");
    switch (currency) {
        case 1:
            window.alert("До видачі: " +(doll * eurEx).toFixed(2) + " EUR");
        break;
        case 2:
            window.alert("До видачі: " +(doll * uanEx).toFixed(2) + " UAN");
        break;
        case 3:
            window.alert("До видачі: " +(doll * aznEx).toFixed(2) + " AZN");
        break;
        default:
            window.alert("Інформація не є коректною");
    }