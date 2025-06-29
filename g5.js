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
        function startQuiz() {
            let score = 0;
            for (let i = 0; i < quiz.length; i++) {
                const q = quiz[i];
                let userAnswer = prompt(`${q.question}\n${q.options.join('\n')}\nВведите номер ответа:`);                
                userAnswer = parseInt(userAnswer);
                if (userAnswer === q.correctAnswer) {
                    score++;
                }
            }
            alert(`Вы правильно ответили на ${score} из ${quiz.length} вопросов.`);
        }        
        startQuiz();