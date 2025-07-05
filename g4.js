function playGame() {
            const options = ["камень", "ножницы", "бумага"];            
            let userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase();            
            if (!options.includes(userChoice)) {
                alert("Неверный ввод! Пожалуйста, выберите камень, ножницы или бумага.");
                return;
            }            
            const computerChoice = options[Math.floor(Math.random() * options.length)];            
            let result = "";
            if (userChoice === computerChoice) {
                result = "Ничья!";
            } else if (
                (userChoice === "камень" && computerChoice === "ножницы") ||
                (userChoice === "ножницы" && computerChoice === "бумага") ||
                (userChoice === "бумага" && computerChoice === "камень")
            ) {
                result = "Вы победили!";
            } else {
                result = "Вы проиграли!";
            }            
            alert(
                `Вы выбрали: ${userChoice}\n` +
                `Компьютер выбрал: ${computerChoice}\n\n` +
                `${result}`
            );
        }     
document.addEventListener("DOMContentLoaded", function() {
    const startBtn = document.getElementById("playGame");
    startBtn.addEventListener("click", function() {
        playGame();
    });
});