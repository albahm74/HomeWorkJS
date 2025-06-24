function generateTask() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let num1 = Math.floor(Math.random() * 20) + 1;
    let num2 = Math.floor(Math.random() * 20) + 1;
    
    if (operator === '/') {
        num1 = num1 * num2;
    }

    const expression = `${num1} ${operator} ${num2}`;
    return {
        expression: expression,
        correctAnswer: eval(expression)
    };
}

function askQuestion() {
    const task = generateTask();
    const userInput = prompt(`Решите пример: ${task.expression}`);
    const userAnswer = parseFloat(userInput);

    if (isNaN(userAnswer)) {
        alert('Ошибка: введите числовой ответ.');
        return;
    }

    if (Math.abs(userAnswer - task.correctAnswer) < 0.0001) {
        alert('Верно!');
    } else {
        alert(`Неверно. Правильный ответ: ${task.correctAnswer}`);
    }
}
askQuestion();