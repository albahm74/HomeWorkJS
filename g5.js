const quiz = [
    {
        question: "Какой цвет неба?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];
function runQuiz(quizArray) {
    let correctCount = 0;
    for (let i = 0; i < quizArray.length; i++) {
        const q = quizArray[i];
        const questionText = q.question + "\n" + q.options.join("\n") + "\nВведите номер правильного ответа:";        
        const userInput = prompt(questionText);        
        if (userInput === null) {        
            alert("Игра завершена досрочно.\nПравильных ответов: " + correctCount);
            return;
        }
        const userAnswer = Number(userInput);

        if (userAnswer === q.correctAnswer) {
            correctCount++;
        }
    }
    alert("Игра окончена!\nПравильных ответов: " + correctCount + " из " + quizArray.length);
}
document.addEventListener("DOMContentLoaded", function() {
    const startBtn = document.getElementById("runQuiz");
    startBtn.addEventListener("click", function() {
        runQuiz(quiz);
    });
}); 