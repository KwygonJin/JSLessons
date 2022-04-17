"use strict"; //работают новые директивы джава - строгий режим, в процессе отладки сразу отлавливаются некоторые ошибки



//___________________________________________________________________________________________
//___________________!!!!!!!УРОК 3. - Формирование строк для вывода информации(интерполяция)
//___________________________________________________________________________________________
// const category = "toys";
// //Простая канкатенация строк до ES6
// console.log("http://someurl.com/" + category + "/5");
// //Интерполяция ES6, только с косыми кавычками работает `
// console.log(`http://someurl.com/${category}/5`);


//___________________________________________________________________________________________
//___________________!!!!!!!УРОК 2. - PROMPT, ALERT, CONFIRM команды
//___________________________________________________________________________________________
// //всплывающее окно
// //alert("Hello");

// //Вопрос пользователю - Да/Нет
// // const result = confirm("Are you here?");
// // console.log(result);

// // //Получает ответ от пользователя в текстовом поле, второй параметр - ответ по умолчанию, который уже щабит в строку
// // const answer = prompt("Вам есть 18?", "Мне 18");
// // //Знак + означает то, что результат функции prompt будет приобразован в тип Число - динамическое изменение типа
// // const answerNymber = +prompt("Вам есть 18?", "Мне 18");
// // console.log(answer);
// // // Ответ от пользователя всегда приходит в строке, typeof - узнать тип данніх
// // console.log(typeof(answer));

// const answers = [];
// answers[0] = prompt("Как Ваше имя?", "");
// answers[1] = prompt("Какая фамилия?", "");
// answers[2] = prompt("Сколько Вам лет?", "");

// //Выводит в ХТМЛ документ данные, которые передали в функции, замещая все в нем
// //Команды промпт, алерт, конфирм блокируют появление страницы, пока не будут даны ответы на эти команды
// document.write(answers);
// console.log(typeof(answers)); // выведет object и 
// console.log(typeof(null)); // выведет object  - это вечная общеизвестная ошибка javascript  

//___________________________________________________________________________________________
//___________________!!!!!!!УРОК 1. - ПЕРЕМЕННЫЕ, ТИПЫ И ВИДЫ ДАННЫХ!
//___________________________________________________________________________________________
// let number = 5; //переменная изменяемая
// const leftBorderWidth = 1; // константа, не изменяется
// var name = 'Name'; //устаревший вариант, на практике лучше использовать let - всплытие переменной 
// //еще до ее объявления - ее можно использовать до объявления и инициализации

//равенство и строгое равенство
//console.log(4 * 2 == '8'); // true - обычное равенство не по типу, а по значению
//console.log(4 * 2 === '8'); // false - строгое равенство и по типу, и по значению
//console.log(4 * 2 === 8); // true - строгое равенство и по типу, и по значению

// //простой объект
// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false,
//     3 : "b",
//     abc: {
//         df : [{}, {}],
//         def:{

//         }
//     }
// };
// obj.b = "1234";
// obj["c"] = "ccccc";

// console.log(obj.name);
// console.log(obj["age"]);
// console.log(obj[3]); // 3 - это название свойства
// console.log(obj["b"]);
// console.log(obj["c"]);

// //массив - єто частній случай объекта (спец. объект) - для хранения данных, которые идут строго по порядку.
// //в отличии от объектов в массиве ключем является номер по порядку, а в объекте имя свойства
// let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 6]; //можно любые типы данных включать
// arr[10] = '23434234';
// console.log(arr);
// console.log(arr[10]);