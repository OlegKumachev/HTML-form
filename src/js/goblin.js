
export default function playGoblin() {
  document.addEventListener("DOMContentLoaded", () => {
    const newDiv = document.createElement("div");
    const img = document.createElement("img");

    img.src = "goblin.png";
    img.alt = "Goblin";
    newDiv.appendChild(img);

    function moviGoblin() {
      const field = document.querySelectorAll(".cellField");
      const newPosition = Math.floor(Math.random() * (field.length - 1));
      field[newPosition].appendChild(newDiv);
    }

    setInterval(moviGoblin, 1000);
  });
}
