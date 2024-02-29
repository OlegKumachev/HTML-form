export default function playGoblin(game) {
  document.addEventListener("DOMContentLoaded", () => {
    let score = 0;
    const scoreDisplay = document.getElementById('score-display');
    let currentGoblinPosition = -1; // Изначально гоблин не заспавнен
    let clickedOnGoblin = false; // Флаг, отслеживающий клик по гоблину

    function moviGoblin(game) {
      const img = document.createElement("img");
      img.src = "https://github.com/netology-code/ahj-homeworks/raw/AHJ-50/dom/pic/goblin.png";
      img.alt = "Goblin";
      img.classList.add("goblin");

      const field = document.querySelectorAll(".cellField");
      const newPosition = Math.floor(Math.random() * field.length);

      // Если гоблин уже существует и переместился в другую ячейку, засчитываем промах
      if (currentGoblinPosition !== -1 && newPosition !== currentGoblinPosition && !clickedOnGoblin) {
        game.missedGoblinHits++;
        game.updateMissedHits();
      }

      // Обновляем позицию гоблина
      currentGoblinPosition = newPosition;
      clickedOnGoblin = false; // Сбрасываем флаг после каждого перемещения гоблина

      field.forEach(cell => cell.innerHTML = ''); 
      field[newPosition].appendChild(img);

      // Добавляем обработчик клика по гоблину
      img.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        clickedOnGoblin = true; // Устанавливаем флаг в true при клике по гоблину
        field[newPosition].removeChild(img); // Удаляем гоблина из ячейки
      });
    }

    setInterval(() => moviGoblin(game), 1000);
  });
}
