function guessNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
function game1() {
  let hiddenNumber = guessNumber();
  let attempt = 0;
  let answer;
  while (attempt != hiddenNumber) {
    answer = prompt("Угадай число от 1 до 100");
    if (answer === null) {
      return;
    }    
    attempt = parseInt(answer);
    if (isNaN(attempt)) {
      alert("Пожалуйста, введите число.");
      continue;
    }
    if (attempt < 1 || attempt > 100) {
      alert("Пожалуйста, введите число от 1 до 100.");
      continue;
    }    
    if (attempt < hiddenNumber) {
      alert("Загаданное число больше.");
    } else if (attempt > hiddenNumber) {
      alert("Загаданное число меньше.");
    } else {
      alert(`Поздравляем! Вы угадали число ${hiddenNumber}.`);
      return;
    }
  }
}
game1();