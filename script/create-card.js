import images from "./images.js";

export class GetCardName {
  constructor() {
    this.cards = document.querySelectorAll(".artists__cards__card");

    this.imgNumber = 0;
    this.cardName = "";
    this.answer = '';
    this.answers = [];

   
    this.cards.forEach((el) => {
      el.addEventListener("click", (e) => this.init(e));
    });
  }

  init(e) {
    
    this.cardName = e.currentTarget.textContent.trim().toLowerCase().toString();
    this.setLocalStorage("cardName", this.cardName);

    if (!this.getItemFromStorage("artInfo")) {
      this.setLocalStorage("artInfo", JSON.stringify(images));
    }

    if (!this.getItemFromStorage("portrait")) {
      this.setLocalStorage("portrait", JSON.stringify([]));
    }
    if (!this.getItemFromStorage("landscape")) {
      this.setLocalStorage("landscape", JSON.stringify([]));
    }
    if (!this.getItemFromStorage("stillLife")) {
      this.setLocalStorage("stillLife", JSON.stringify([]));
    }
    if (!this.getItemFromStorage("graphic")) {
      this.setLocalStorage("graphic", JSON.stringify([]));
    }
    if (!this.getItemFromStorage("antique")) {
      this.setLocalStorage("antique", JSON.stringify([]));
    }
    if (!this.getItemFromStorage("avantGarde")) {
      this.setLocalStorage("avantGarde", JSON.stringify([]));
    }
    if (!this.getItemFromStorage("renaissance")) {
      this.setLocalStorage("renaissance", JSON.stringify([]));
    }
    if (!this.getItemFromStorage("surrealism")) {
      this.setLocalStorage("surrealism", JSON.stringify([]));
    }
    if (!this.getItemFromStorage("kitsch")) {
      this.setLocalStorage("kitsch", JSON.stringify([]));
    }
    if (!this.getItemFromStorage("minimalism")) {
      this.setLocalStorage("minimalism", JSON.stringify([]));
    }
    if (!this.getItemFromStorage("avangard")) {
      this.setLocalStorage("avangard", JSON.stringify([]));
    }
    if (!this.getItemFromStorage("industrial")) {
      this.setLocalStorage("industrial", JSON.stringify([]));
    }


  }

  setLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }

  getItemFromStorage(key) {
    return localStorage.getItem(key);
  }

  fillContent() {

    if (!this.cardName) {
      this.cardName = this.getItemFromStorage("cardName");
    }

    if (this.cardName === "portrait") {
      if (JSON.parse(this.getItemFromStorage("portrait")).indexOf(this.imgNumber) !== -1) {
        this.imgNumber++;
        this.fillContent();
      } else {
        this.img = document.querySelector(".artgame__img-wrap__img");
        this.img.src = `./assets/full/${this.imgNumber}full.jpg`;
      }


      this.answer = images[this.imgNumber]['author'];
      
      this.answers.push(this.answer);

      while (this.answers.length < 4 ) {
        let authorNum = this.randomInteger(0, 200);
        let author = images[authorNum]['author'];
        if (this.answers.indexOf(author) === -1) {
          this.answers.push(author);
        }
      }
      this.answers = this.answers.sort(() => Math.random() - 0.5);
      console.log((this.answers));
    }
  }

  randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
  }
}





/* this.portrait = [];
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
 */