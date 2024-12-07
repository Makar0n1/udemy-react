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

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

//     // Пишем решение вот тут
//     for (let i = data.length - 1; i >= 0; i--) {
//          result[data.length - i - 1] = data[i];
//     }
//  console.log(result);
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



/*====================УРОК 23 Практика ч.2 Применяем условия и циклы======================



/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания

// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
// const personalMovieDB = {
//     count:  numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// if (personalMovieDB.count < 10){
//     alert('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     alert('Вы классический зритель');
// } else if (personalMovieDB.count >= 30){
//     alert('Вы киноман');
// } else {
//     alert('Произошла ошибка');
// }
     
// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//     if (a != null && a != '' && b != null && b != '' && a.length < 50) {
//         console.log('done');
//         personalMovieDB.movies[a] = b;
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// let i = 0

// // while (i < 2) {
// //     i++;
// //     const a = prompt('Один из последних просмотренных фильмов?', ''),
// //           b = prompt('На сколько оцените его?', '');
// //     if (a != null && a != '' && b != null && b != '' && a.length < 50) {
// //         console.log('done');
// //         personalMovieDB.movies[a] = b;
// //     } else {
// //          console.log('error');
// //          i--;
// //     }
// // }

// do{
//     i++;
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//     if (a != null && a != '' && b != null && b != '' && a.length < 50) {
//         console.log('done');
//         personalMovieDB.movies[a] = b;
//     } else {
//          console.log('error');
//          i--;
//     }
// } while (i < 2);


// console.log(personalMovieDB);
'use strict';
const usdCurr = 28;
const discount = 0.9;


function convert(amount, curr) {
    return curr * amount;
}
function promotion(result) {
    console.log(result * discount);
}
const res = convert(500, usdCurr);
promotion(res);


function sayHello(name) {
    return(`Hello, ${name}`);
}
sayHello('Anton');


function returnNeighboringNumbers(number) {
    console.log([number - 1, number, number + 1]);
}
returnNeighboringNumbers(5);


// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.
// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)
// Примеры:
// Вызов функции getMathResult(5, 3) даст ответ 5---10---15
// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30
// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
// Вызов функции getMathResult(10, '5') даст ответ 10
// Вызов функции getMathResult(10, 0) даст ответ 10
// Вызов функции getMathResult(20, -5) даст ответ 20
const n = 5,
      m = 3;
if (typeof m != 'string' && m > 0) {
    let result = ''
    for (let i = n; i <= n * m; i++) {
        if(i % n != 0){
            continue;
        }
        if (i === m * n){
            result += `${i}`;
        } else
        result += `${i}---`;
    }
    console.log(result);  
} else {
    console.log(n);
}


function getMathResult(n, m){
    if (typeof m != 'string' && m > 0) {
        let result = ''
        for (let i = n; i <= n * m; i++) {
            if(i % n != 0){
                continue;
            }
            if (i === m * n){
                result += `${i}`;
            } else
                result += `${i}---`;
        }
        return(result);
    } else {
        return(n);
    }
}
getMathResult(5, 10);

