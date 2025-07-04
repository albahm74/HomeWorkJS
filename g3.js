
function reverseText() {
const inputText = prompt("Введите текст, который вы хотите перевернуть:");    
    if (inputText !== null && inputText.trim() !== "") {      
      const reversedText = inputText.split("").reverse().join("");      
      alert("Перевернутый текст: " + reversedText);
    } else {
      alert("Вы не ввели текст.");
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const startBtn = document.getElementById("reverseText");
    startBtn.addEventListener("click", function() {
        reverseText();
    });
});    