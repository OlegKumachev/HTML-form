
export default function playGoblin() {
  document.addEventListener("DOMContentLoaded", () => {
    let score = 0;
    const scoreDisplay = document.getElementById('score-display');

    function moviGoblin() {
      const img = document.createElement("img");
      img.src = "https://github.com/netology-code/ahj-homeworks/raw/AHJ-50/dom/pic/goblin.png";
      img.alt = "Goblin";
      img.classList.add("goblin");

      const field = document.querySelectorAll(".cellField");
      const newPosition = Math.floor(Math.random() * field.length);
      field.forEach(cell => cell.innerHTML = ''); 
      field[newPosition].appendChild(img);
    }

    setInterval(moviGoblin, 1000);
  });
}
