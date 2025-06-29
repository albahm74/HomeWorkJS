//__task_1__
const str = 'js';
let strUp = str.toUpperCase()
console.log(strUp);

//__task_2__
function getArrStr(arr,str2) {
    return arr.filter(elm =>elm.toLowerCase(str2).startsWith(str2));
}
console.log(getArrStr(['король', 'валет', 'Дама', 'туз', 'Туз', 'дама', 'Король'], 'туз'));

//__task_3__
let numb = 32.58884;
console.log(Math.floor(numb));
console.log(Math.ceil(numb));
console.log(Math.round(numb));

//__task_4__
const arr4 = [52, 53, 49, 77, 21, 32];
console.log(Math.max(...arr4));
console.log(Math.min(...arr4));

//__task_5__
function getRandNumb(max,min) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandNumb(0,10));

//__task_6__
const randArr = (numb6) => {
    let arr6 = [];
    for (let i = 0; i < numb6/2; i++) {
        arr6.push(Math.floor(Math.random() * numb6));
    }
    console.log(arr6);
};
randArr(6);

//__task_7__
function randBet(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randBet(1,7));

//__task_8__
console.log(new Date());

//__task_9__
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//__task_10__
function formDate(date) {
    let dayWeek = ['воскресенье', 'понедельник', 'вторник',
         'среда', 'четверг', 'пятница', 'суббота'];
         let month = ['января', 'февраля', 'марта', 'апреля', 'мая',
            'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
            return `Дата: ${date.getDate()} ${month[date.getMonth()]} 
            ${date.getFullYear()} - это ${dayWeek[date.getDay()]}\nВремя:
            ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
console.log(formDate(new Date()));