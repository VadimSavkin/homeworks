// #9 3 питання на 3 варіанти by Anatoliy
let question1 = prompt("Скільки ніг має коза? Варіанти: 1 - 4 ноги, 2 - 3 ноги, 3 - 2 хвости")
let question2 = prompt("Скільки вух має заєць? Варіанти: 1 - 4 вуха, 2 - 2 вуха, 3 - 1 хобот")
let question3 = prompt("Якого кольору лисиця? варіанти: 1 - зеленого, 2 - синього, 3 - рудого")
let score = 0;
    if (question1 == 1)
    score = score + 2 
    if (question2 == 2)
    score = score + 2 
    if (question3 == 3)
    score = score + 2 
alert("Вітаємо! Ви набрали " + score + " бали(ів)!");