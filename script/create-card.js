import images from "./images.js";

export class GetCardName {
  constructor() {
    this.cards = document.querySelectorAll(".artists__cards__card");
    this.nodeAnswers = null;
    this.modal = document.querySelector(".modal-wrap");

    this.imgNumber = 0;
    this.cardName = "";
    this.answer = "";
    this.answers = [];

    this.types = {
      portrait: [],
      landscape: [],
      stillLife: [],
      graphic: [],
      antique: [],
      avantGarde: [],
      renaissance: [],
      surrealism: [],
      kitsch: [],
      minimalism: [],
      avangard: [],
      industrial: [],
    };

    this.cards.forEach((el) => {
      el.addEventListener("click", (e) => this.init(e), { once: true });
    });
    this.cards.forEach((el) => {
      el.removeEventListener("click", (e) => this.init(e), { once: true });
    });
  }

  init(e) {
    e.stopPropagation();
    this.cardName = e.currentTarget.textContent.trim().toLowerCase().toString();
    this.setLocalStorage("cardName", this.cardName);

    if (!this.getItemFromStorage("types")) {
      this.setLocalStorage("types", JSON.stringify(this.types));
    }
  }

  setLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }

  getItemFromStorage(key) {
    return localStorage.getItem(key);
  }

  fillContent(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    this.modal.classList.add("none");
    this.answers = [];

    if (!this.cardName) {
      this.cardName = this.getItemFromStorage("cardName");
    }
 









    switch(this.cardName) {
      case 'portrait':  
      this.imgNumber = 0;
      break;

      case 'landscape':  
      this.imgNumber = 11;
      break;

      case 'stillLife':  
      this.imgNumber = 21;
      break;

      case 'graphic':  
      this.imgNumber = 31;
      break;

      case 'antique':  
      this.imgNumber = 41;
      break;

      case 'avantGarde':  
      this.imgNumber = 51;
      break;

      case 'renaissance':  
      this.imgNumber = 61;
      break;

      case 'surrealism':  
      this.imgNumber = 71;
      break;

      case 'kitsch':  
      this.imgNumber = 81;
      break;

      case 'minimalism':  
      this.imgNumber = 91;
      break;

      case 'avangard':  
      this.imgNumber = 101;
      break;

      case 'industrial':  
      this.imgNumber = 111;
      break;
    
    }
  
    while (
      JSON.parse(this.getItemFromStorage("types"))[this.cardName].indexOf(
        this.imgNumber
      ) !== -1
    ) {
      this.imgNumber++;
      /*     this.fillContent();
        return; */
    }
    this.img = document.querySelector(".artgame__img-wrap__img");
    this.img.src = `./assets/full/${this.imgNumber}full.jpg`;

    this.answer = images[this.imgNumber]["author"];

    this.answers.push(this.answer);

    while (this.answers.length < 4) {
      let authorNum = this.randomInteger(0, 200);
      let author = images[authorNum]["author"];
      if (this.answers.indexOf(author) === -1) {
        this.answers.push(author);
      }
    }
    this.answers = this.answers.sort(() => Math.random() - 0.5);

    this.nodeAnswers = document.querySelectorAll(".artgame__answers__answer");

    this.nodeAnswers.forEach((el, i) => {
      el.textContent = this.answers[i];
      el.addEventListener("click", (e) => this.fillModal(e), { once: true });
    });

    this.nodeAnswers.forEach((el) => {
      el.removeEventListener("click", (e) => this.fillModal(e), { once: true });
    });
  }

  fillModal(e) {
    e.preventDefault();
    e.stopPropagation();

    this.modalIcon = document.querySelector(".modal__icon");
    this.types = JSON.parse(this.getItemFromStorage("types"));

    this.modalImg = document.querySelector(".modal__img-wrap__img");
    this.modalImg.src = `./assets/full/${this.imgNumber}full.jpg`;

    let picInfo = [];
    picInfo.push(images[this.imgNumber]["name"]);
    picInfo.push(images[this.imgNumber]["author"]);
    picInfo.push(images[this.imgNumber]["year"]);

    this.modalText = document.querySelectorAll(".modal__info__text");
    this.modalText.forEach((el, i) => {
      el.textContent = picInfo[i];
    });

    this.modal.classList.remove("none");
    this.modalBtn = document.querySelector(".modal__btn");
    this.modalBtn.addEventListener("click", (e) => this.fillContent(e), {
      once: true,
    });
    this.modalBtn.removeEventListener("click", (e) => this.fillContent(e), {
      once: true,
    });

    if (e.currentTarget.textContent === this.answer) {
      this.modalIcon.classList.remove("wrong");
      this.modalIcon.classList.add("correct");

      if (
        this.types[this.getItemFromStorage("cardName")].indexOf(
          this.imgNumber
        ) === -1
      ) {
        this.types[this.getItemFromStorage("cardName")].push(this.imgNumber);
        this.setLocalStorage("types", JSON.stringify(this.types));
      }
    } else {
      this.modalIcon.classList.remove("correct");
      this.modalIcon.classList.add("wrong");
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
/* if (!this.getItemFromStorage("artInfo")) {
      this.setLocalStorage("artInfo", JSON.stringify(images));
    } */
/*   this.nodeAnswers.forEach((el) => {
        el.addEventListener("click", (e) => this.fillModal(e));
      }); */
