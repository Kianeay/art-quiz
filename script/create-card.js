import images from "./images.js";

export class GetCardName {
  constructor() {
    this.cards = document.querySelectorAll(".artists__cards__card");

    this.imgNumber = 0;
    this.cardName = "";

    this.portrait = [0];
    this.landscape = [];
    this.stillLife = [];
    this.graphic = [];
    this.antique = [];
    this.avantGarde = [];
    this.renaissance = [];
    this.surrealism = [];
    this.kitsch = [];
    this.minimalism = [];
    this.avangard = [];
    this.industrial = [];

    this.cards.forEach((el) => {
      el.addEventListener("click", (e) => this.init(e));
    });
  }

  init(e) {
    this.cardName = e.currentTarget.textContent.trim().toLowerCase().toString();
  }

  fillContent() {

    

    if (this.cardName === "portrait") {

    

      if (this.portrait.indexOf(this.imgNumber) !== -1) {
        this.imgNumber++;
        console.log(this.imgNumber);
        this.fillContent();
      } else {
        this.img = document.querySelector(".artgame__img-wrap__img");
        this.img.src = `./assets/full/${this.imgNumber}full.jpg`;
      }
    }
  }
}
