import images from "./images.js";

export class GetCardName {
  constructor() {
    this.cards = document.querySelectorAll(".artists__cards__card");
    this.nodeAnswers = null;
    this.modal = document.querySelector(".modal-wrap");
    this.lists = document.querySelectorAll(".artgame__controls__list");
    this.changeArtistPage = true;

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

    this.picBreak = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

    this.cards.forEach((el) => {
      el.addEventListener("click", (e) => this.init(e), { once: true });
    });

    this.checkCards();
 /*    this.cards.forEach((el) => {
      el.removeEventListener("click", (e) => this.init(e), { once: true });
    }); */
  }

  checkCards() {
    if (JSON.parse(this.getItemFromStorage("types"))) {
      this.types = JSON.parse(this.getItemFromStorage("types"));

      this.cards.forEach((el) => {
        let text = el.className.split(" ");
        text = text[text.length - 1];
        if (this.types[text].length !== 0) {
          el.classList.remove("grey");
        }
      });
    }
  }

  init(e) {
    e.stopPropagation();

    /*  this.cardName = e.currentTarget.textContent.trim().toLowerCase().toString();  */
    this.cardName = e.currentTarget.className.split(" ");
    this.cardName = this.cardName[this.cardName.length - 1];

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

  fillContent(e, answ) {
    this.modal.classList.add("none");
    /*    if (e) {
      e.preventDefault();
      e.stopPropagation();
    } */

    this.lists = document.querySelectorAll(".artgame__controls__list");
    this.answers = [];

    if (!this.cardName) {
      this.cardName = this.getItemFromStorage("cardName");
    }

    this.lists.forEach((el, i) => {
      for (let j = 0; j < this.types[this.cardName].length; j++) {
        let char = this.types[this.cardName][j].toString();

        if (this.cardName !== "portrait") {
          char = char.slice(-1);
        }
        if (i == char) {
         
          el.classList.add("green");
        } else {
          el.classList.add("red");
        }
      }
    });

    if (!this.imgNumber) {
      switch (this.cardName) {
        case "portrait":
          this.imgNumber = 0;
          break;

        case "landscape":
          this.imgNumber = 11;
          break;

        case "stillLife":
          this.imgNumber = 21;
          break;

        case "graphic":
          this.imgNumber = 31;
          break;

        case "antique":
          this.imgNumber = 41;
          break;

        case "avantGarde":
          this.imgNumber = 51;
          break;

        case "renaissance":
          this.imgNumber = 61;
          break;

        case "surrealism":
          this.imgNumber = 71;
          break;

        case "kitsch":
          this.imgNumber = 81;
          break;

        case "minimalism":
          this.imgNumber = 91;
          break;

        case "avangard":
          this.imgNumber = 101;
          break;

        case "industrial":
          this.imgNumber = 111;
          break;
      }
    }

    if (answ === false) {
      this.imgNumber++;
    }

    this.checkLastImg();
    while (
      JSON.parse(this.getItemFromStorage("types"))[this.cardName].indexOf(
        this.imgNumber
      ) !== -1
    ) {
      this.checkLastImg();
      this.imgNumber++;
      /*    this.fillContent();
      return; */
    }
    this.img = document.querySelector(".artgame__img-wrap__img");
    this.img.src = `./assets/img/${this.imgNumber}.jpg`;

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
    });

    document.querySelector(".artgame__answers").addEventListener(
      "click",
      (e) => {
        let target = e.target;
        let text = target.textContent;

        if (target.tagName != "BUTTON") return;
        this.fillModal(e,text);
      },
      {
        once: true,
      }
    );
  }

  checkLastImg() {
    console.log(this.imgNumber);
    console.log(this.changeArtistPage);
    if (
      this.picBreak.indexOf(this.imgNumber) !== -1 &&
      this.changeArtistPage === false
    ) {
      /*  this.changeArtistPage = true; */
      window.location.hash = "artists";
    }
  }

  fillModal(e, text) {
    /*      e.preventDefault();
    e.stopPropagation();  */
    this.changeArtistPage = false;

    let answ = true;
console.log(text);
console.log(this.answer);
    this.modalIcon = document.querySelector(".modal__icon");
    this.types = JSON.parse(this.getItemFromStorage("types"));
    this.modalImg = document.querySelector(".modal__img-wrap__img");
    this.modalImg.src = `./assets/img/${this.imgNumber}.jpg`;

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
    /*   this.types[this.cardName].length === 9 */

    console.log(this.imgNumber);
    /*     if (this.changeArtistPage === true) {
      this.modalBtn.addEventListener(
        "click",
        () => {
          window.location.hash = "artists";
          this.modal.classList.add("none");
          this.changeArtistPage = false;
        },
        {
          once: true,
        }
      );
    } else {
      this.modalBtn.addEventListener(
        "click",
        (e) => this.fillContent(e, answ),
        {
          once: true,
        }
      );
    } */

    this.modalBtn.addEventListener("click", (e) => this.fillContent(e, answ), {
      once: true,
    });

    if (text === this.answer) {
      this.modalIcon.classList.remove("wrong");
      this.modalIcon.classList.add("correct");

      if (
        this.types[this.getItemFromStorage("cardName")].indexOf(
          this.imgNumber
        ) === -1
      ) {
        answ = true;
        this.types[this.getItemFromStorage("cardName")].push(this.imgNumber);
        this.setLocalStorage("types", JSON.stringify(this.types));
      }
    } else {
      this.modalIcon.classList.remove("correct");
      this.modalIcon.classList.add("wrong");
      answ = false;
    }
  }

  randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
}

/*  this.portrait = [];
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
 
 if (!this.getItemFromStorage("artInfo")) {
      this.setLocalStorage("artInfo", JSON.stringify(images));
    } 
   this.nodeAnswers.forEach((el) => {
        el.addEventListener("click", (e) => this.fillModal(e));
      }); 
 */
