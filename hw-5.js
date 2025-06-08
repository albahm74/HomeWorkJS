//__task_1__
function compare(a,b) {
    if (a <= b) {
        return a
    } else {
        return b
    }
}
console.log(compare(8,4));
console.log(compare(6,6));

//__task_2__
function check(n) {
    if (n%2==0) {
        return `Число чётное`
    } else {
        return `Число нечётное`
    }
}
console.log(check(9));
console.log(check(8));

//__task_3__
function numSquare(c) {
    let num = c**2;
    console.log(num);
}
numSquare(7);

//__task_4__
function howOld() {
    let userAnswer = prompt('Сколько тебе лет?');
    if (userAnswer < 0) {
        alert ('Вы ввели неправильное значение');
    } else if (userAnswer <= 12) {
        alert ('Привет, друг!');
    } else {
        alert ('Добро пожаловать!');
    }
}
howOld();

//__task_5__
function getNum(d,e) {
    if (isNaN(d) || isNaN(e)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return d*e;
    }
}
console.log(getNum('seven',9));
console.log(getNum(7,9));

//__task_6__
function callNum() {
    let userNum = Number(prompt('Назовите число'));
    if (isNaN (userNum)) {
        return 'Переданный параметр не является числом';
    } else { 
        return `${userNum} в кубе равно ${userNum**3}`;
    }
}
console.log(callNum());

//__task_7__
function getArea() {
    return this.radius**2*3.14;
};
function getPerimeter() {
    return this.radius*2*3.14;
};

const circle1 = {
    radius: 48,
    getArea: getArea,
    getPerimeter: getPerimeter
}
const circle2 = {
    radius: 38,
    getArea: getArea,
    getPerimeter: getPerimeter
}
console.log(`Площадь окружности1: ${circle1.getArea()}`);
console.log(`Площадь окружности2: ${circle2.getArea()}`);
console.log(`Периметр окружности1: ${circle1.getPerimeter()}`);
console.log(`Периметр окружности2: ${circle2.getPerimeter()}`);