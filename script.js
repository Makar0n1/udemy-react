/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';



/*====================УРОК 18 Практика ч.1 Объекты======================


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''), 
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


========================================================================*/







//===========================УРОК 18 УСЛОВИЯ==============================

/*========Условия if, else if============================================
if (4 == 4) {
    console.log('Ok!');
} else {
    console.log('Error!');
};

========================================================================

if (num < 49) {
    console.log('Error!');
} else if (num > 100) {
    console.log('Много!');
} else {
    console.log('Ок!');
}*/
//========================Тернарный оператор=============================
//(num == 50) ? console.log('Ок!') : console.log('Error!');

/*const num = 50;
=========================Строгое соответвие Switch======================
switch (num) {
    case 49:
        console.log('Неверно!');
        break;
    case 100:
        console.log('Неверно!');
        break;
    case 50:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз!');
        break;
}*/








//===========================УРОК 20 ЛОГИЧЕСКИЕ ОПЕРАТОРЫ==============================

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// }

// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'jkhdkjqhkdjh');

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Все сыты!');
// } else {
//     console.log('Мы уходим');
// }



//========================================================================



// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola ===2 || fries === 3 && nuggets) {
//     console.log('Все довольны!');
// } else {
//     console.log('Мы уходим');
// }

// console.log(hamburger === 3 && cola ===2 || fries === 3 && nuggets);



// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);


// console.log(!0);


//========================================================================
// function firstTask(){
// for (let i = 1; i <= 20; i++){
//     if (i % 2 === 0) {
//         continue;
//     }
//     i = i + 1;
//     console.log(i);
// }
// }
// return firstTask();


// function secondTask(){
//     let result = 0;
//     for (let i = 1; i <= 100; i++){
//         result = result + i;
//     }
//     console.log(result);
// }
// return secondTask();


// const arr = [3039, 21611, 37425, 96007, 70141, 40732, 25170, 85921, 25982, 99095, 16225, 97512, 40677, 86071, 356, 28218, 7831, 28071, 48911, 11844, 39549, 8861, 89914, 94002, 90341, 48763, 84842, 29237, 28280, 72973, 64518, 46840, 57187, 45196, 15427, 50817, 66378, 73746, 24425, 20498, 38216, 41566, 39388, 51324, 40744, 91984, 49170, 37880, 7029, 45011];
    
// let maxNumb = arr[0];

// for (let i = 1; i <= arr.length; i++){
//     if (arr[i] > maxNumb){
//         maxNumb = arr[i];
//     }
// }
// console.log(maxNumb);
// function secondTask(){
// const n = +prompt('введите высоту пирамиды', '');
// const rootDiv = document.querySelector('.root');
// const containerDiv = document.createElement('div');
// containerDiv.className = 'container';
// rootDiv.appendChild(containerDiv);
// let j,
//     i,
//     pyro;

// for (i = 1; i <= n; i++) {
//     pyro = '';
//     for (j = 1; j <= n - i; j++) {
//         pyro += ' ';
//     }
//     for (j = 1; j <= (2 * i - 1); j++) {
//         pyro += '*';
//     }
//     const rowDiv = document.createElement('div');
//     rowDiv.textContent = pyro;
//     containerDiv.appendChild(rowDiv);
// }
// }
// return secondTask();




// let n = +prompt('Введите число для поиска факториала', ''); 
// let result = 1;
// const rootDiv = document.querySelector('.root');
// const headCenter = document.createElement('h1');
// headCenter.className = 'output';
// rootDiv.appendChild(headCenter);

// for (let i = n; i > 0; i--) {
//     result = result * i;
// }

// headCenter.textContent = `Факториал ${n} равен ${result}!`;

// let str = prompt('Введите слово, которое нужно перевернуть', '');
// let result = '';
// const rootDiv = document.querySelector('.root');
// const reversedOutput = document.createElement('div');
// reversedOutput.className = 'output';
// rootDiv.appendChild(reversedOutput);

// if (typeof(str) === 'string') {
//     console.log('все нормально!');
// } else {
//     console.log('Что-то не так!');
// }
// for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
// }

// reversedOutput.textContent = ` Вот ваше перевернутое слово - ${result}`;

// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней
// for (let i = 1; i <= lines; i++) {
//     for (let j = 1; j <= lines - i; j++) {
//         result += ' ';
//     }
//     for (let j = 1; j <= (2 * i - 1); j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

    // Пишем решение вот тут
    for (let i = data.length - 1; i >= 0; i--) {
         result[data.length - i - 1] = data[i];
    }
 console.log(result);       
        

    







