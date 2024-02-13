// export default class Score {
//   constructor(id) {
//     this.element = document.getElementById(id);
//   }

//   update(score) {
//     this.element.textContent = `Score: ${score}`;
//   }
// }

export default class Score {
  constructor(id) {
    this.element = document.getElementById(id);
  }

  update(score) {
    this.element.textContent = `Score: ${score}`;
  }
}
