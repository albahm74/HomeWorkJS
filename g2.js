function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateTask() {
  const operations = ['+', '-', '*', '/'];
  const op = operations[getRandomInt(0, operations.length - 1)];
  let a = getRandomInt(1, 20);
  let b = getRandomInt(1, 20);  
  if (op === '/') {
    a = a * b;
  }
  return { a, b, op };
}
const task = generateTask();
const question = `${task.a} ${task.op} ${task.b}`;
const userAnswer = prompt(`Решите задачу: ${question}`);
const correctAnswer = calculateAnswer(task);
function calculateAnswer(task) {
  const { a, b, op } = task;
  switch(op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
  }
}
const isCorrect = Math.abs(Number(userAnswer) - correctAnswer) < 1e-9;
if (isCorrect) {
  alert('Верно! Отличная работа!');
} else {
  alert(`Ошибка. Правильный ответ: ${correctAnswer}`);
}
