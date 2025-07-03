//__task_1__
const numbs1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs1.length; i++) {
    console.log(numbs1[i])
    if (numbs1[i] === 10) {
        break;
    }
}

//__task_2__
const numbs2 = [1, 5, 4, 10, 0, 3];
const index = numbs2.indexOf(4);
console.log(index);

//__task_3__
const numbs3 = [1, 3, 5, 10, 20];
const strok = numbs3.join(' ');
console.log(strok);

//__task_4__
const numbs4 = [];
for (let a = 0; a < 3; a++) {
    let insNumbs = [];
    for (let b = 0; b < 3; b++) {
        insNumbs.push(1)
    }
    numbs4.push(insNumbs)
}
console.log(numbs4);

//__task_5__
const numbs5 = [1, 1, 1];
numbs5.push(2, 2, 2);
console.log(numbs5);

//__task_6__
const numbs6 = [9, 8, 7, 'a', 6, 5];
numbs6.sort();
const filteredNumbs = numbs6.filter(Number);
console.log(filteredNumbs);

//__task_7__
const numbs7 = [9, 8, 7, 6, 5];
let userAnswer = Number(prompt('Введи любое число'));
if (numbs7.includes(userAnswer)) {
    alert('Угадал');    
} else {
    alert('Не угадал')
}

//__task_8__
let str8 = 'abcdef';
let arrStr8 = str8.split('');
let arrStr8a = arrStr8.reverse();
let newArrStr = arrStr8a.join('');
console.log(newArrStr);

//__task_9__
const numbs9a = [1, 2, 3];
const numbs9b = [4, 5, 6];
let numbs9c = [...numbs9a, ...numbs9b];
console.log(numbs9c);

//__task_10__
const numbs10 = [5, 3, 1, 4, 6, 8, 2, 9];
for (let i = 0; i < numbs10.length - 1; i++) {
    console.log(numbs10[i] + numbs10[i + 1]);    
}

//__task_11__
const numbs11 = [7, 9, 6, 3, 8];
let numbs11Square = numbs11.map(num => num**2);
console.log(numbs11Square);

//__task_12__
const str12 = ['Юпитер',  'Уран', 'Земля'];
let str12Length = str12.map(elm =>elm.length);
console.log(str12Length);

//__task_13__
const numbs13 = [7, 3, -5, 6, 9, -8, -4, 1, -2];
function getMinusNumbs (numbs13) {
    return numbs13.filter(j => j < 0);
}
console.log(getMinusNumbs(numbs13));

//__task_14__
function getRandomNumb() {
    return Math.floor(Math.random() * 10);
}
const oneArr =[];
for (let a = 0; a < 10; a++) {
     oneArr.push(getRandomNumb());
}
console.log(oneArr);
const twoArr = [];
for (let a = 0; a < oneArr.length; a++) {
    if (oneArr[a] % 2 === 0) {
        twoArr.push(oneArr[a]);
    }
}
console.log(twoArr);

//__task_15__
function getRandNumb(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
const yesArr = [];
for (let b = 0; b < 6; b++) {
    yesArr.push(getRandNumb(0,10));
}
console.log(yesArr);
let sumYesArr = yesArr.reduce((total, number) => total + number, 0);
const midarYesArr = sumYesArr / yesArr.length;
console.log(midarYesArr);