export default function playGoblin(game) {
  document.addEventListener("DOMContentLoaded", () => {
    let score = 0;
    const scoreDisplay = document.getElementById('score-display');
    let currentGoblinPosition = -1;
    let clickedOnGoblin = false;

    function moviGoblin(game) {
      const img = document.createElement("img");
      img.src = "https://github.com/netology-code/ahj-homeworks/raw/AHJ-50/dom/pic/goblin.png";
      img.alt = "Goblin";
      img.classList.add("goblin");

      const field = document.querySelectorAll(".cellField");
      const newPosition = Math.floor(Math.random() * field.length);

      if (currentGoblinPosition !== -1 && newPosition !== currentGoblinPosition && !clickedOnGoblin) {
        game.missedGoblinHits++;
        game.updateMissedHits();
      }

      currentGoblinPosition = newPosition;
      clickedOnGoblin = false; 

      field.forEach(cell => cell.innerHTML = ''); 
      field[newPosition].appendChild(img);

      img.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        clickedOnGoblin = true;
        field[newPosition].removeChild(img);
      });
    }

    setInterval(() => moviGoblin(game), 1000);
  });
}
