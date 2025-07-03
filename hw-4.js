//__task_1__
let i = 1;
while (i<=2) {
    console.log('Привет');
    i++;
}

//__task_2__
let a = 1;
while (a<=5) {
    console.log(a);
    a++;
}

//__task_3__
let b = 7;
while (b<=22) {
    console.log(b);
    b++;
}

//__task_4__
const obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
}

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

//__task_5__
let n = 1000;
let m = 0;
while (n > 50) {
    n /= 2;
    m++;
}

console.log(`number: ${n}`);
console.log(`iteration: ${m}`);

//__task_6__
const firstFriday = 2;
for (let day = firstFriday; day <=31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчёт.`);
}

// additional__task_1__
let c = 100;
let d = 0;
while (c > 0) {
    c -= 7;
    d++;
}

console.log(`number: ${c}`);
console.log(`iteration: ${d}`);

// additional__task_2__
const months = {
    "январь" : '1',
    "февраль" : '2',
    "март" : '3',
    "апрель" : '4',
    "май" : '5',
    "июнь" : '6',
    "июль" : '7',
    "август" : '8',
    "сентябрь" : '9',
    "октябрь" : '10',
    "ноябрь" : '11',
    "декабрь" : '12'
}

for (let key in months) {
    console.log(`${key}: ${months[key]}`);
}

// additional__task_3__
const book = {
    "название" : 'Три мушкетёра',
    "автор" : 'Александр Дюма',
    "год издания" : '1995',
    "жанр" : 'Приключения'
}

for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

// additional__task_4__
const numbs = [7, 83, 13, 34, 48, 0, -8, -15, 95, 26];
const minimum = Math.min(...numbs);
console.log(minimum);