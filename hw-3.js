//task_1__
let password = 'пароль';
let pass = prompt("Ведите пароль");
if (pass === password) {
    alert("Пароль введен верно");
}
else {
    ("Пароль введен неправильно");
}    

//task_2__
let c = 8;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');    
} // При подстановке значений с = 0, 10, -3 выдаёт "неверно", с = 2 выдаёт "верно".

// __task_3__
let d = 39;
let e = 119;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// __task_4__
let a = '2';
let b = '3';
alert(a * 1 + b * 1);

// __task_5__
let monthNumber = prompt('Введите порядковый номер месяца');
switch (monthNumber) {
    case '12':
    case '1':
    case '2':
        console.log('Зима');    
    case '3':
    case '4':
    case '5':
        console.log('Весна');
    case '6':
    case '7':
    case '8':
        console.log('Лето');    
    case '9':
    case '10':
    case '11':
        console.log('Осень');
        break;
    default:
        console.log('Нет такого месяца');
        break;    
    }

// additional__task_1__
let anyNumber = prompt('Пожалуйста, введите любое число');
if (!isNaN(anyNumber)) {
    let number = parseFloat(anyNumber);
    if (number % 2 === 0) {
    alert('Число чётное');
    } else {
        alert("Число нечётное");
    }
} else {
    alert("Введено не число");
}

// additional__task_2__
let clientOS = prompt('Введите 0, если используете iOS, или 1, если используете Android');
if (clientOS == 0 || clientOS === 1) {
    console.log('Установите версию приложения для iOS по ссылке')
} else {
    console.log('Установите версию приложения для Android по ссылке')
}

// additional__task_3__
let userOS = prompt('Введите 0, если используете iOS? или 1, если используете Android');
if (userOS == 0 || userOS === 1) {
    let clientDeviceYear = prompt('Укажите год выпуска вашего мобильного устройства iOS');
    if (clientDeviceYear >= 2007 && clientDeviceYear <= 2014) {
        console.log('Установите облегченную версию приложения для iOS по ссылке')
    } else {
        console.log('Установите обычную версию для iOS по ссылке')
    }
} else {
    let clientDeviceYear = prompt('Укажите год выпуска вашего мобильного устройства Android');
    if (clientDeviceYear >= 2008 && clientDeviceYear <= 2014) {
        console.log('Установите облегченную версию приложения для Android по ссылке')
    } else {
        console.log('Установите обычную версию приложения для Android по ссылке')
    }
}