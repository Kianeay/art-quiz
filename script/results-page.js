import images from "./images";

export class AddImg {
  constructor() {
    this.cardBlock = document.querySelector(".scoreinfo__cards");
    this.imagesStorage = this.getItemFromStorage("imgTypes");
    this.artistStorage = this.getItemFromStorage("types");
    this.array = [];
    this.imageNumber = 0;

    this.createArray();
    this.addImages();
  }

  addImages() {

    this.categoryTitle = document.querySelector('.scoreinfo__cards__category');
    let category = localStorage.getItem("scoresCategory");
    this.categoryTitle.textContent = category;

    switch (category) {
      case "portrait":
        this.imageNumber = 0;
        break;

      case "landscape":
        this.imageNumber = 10;
        break;

      case "stillLife":
        this.imageNumber = 20;
        break;

      case "graphic":
        this.imageNumber = 30;
        break;

      case "antique":
        this.imageNumber = 40;
        break;

      case "avantGarde":
        this.imageNumber = 50;
        break;

      case "renaissance":
        this.imageNumber = 60;
        break;

      case "surrealism":
        this.imageNumber = 70;
        break;

      case "kitsch":
        this.imageNumber = 80;
        break;

      case "minimalism":
        this.imageNumber = 90;
        break;

      case "avangard":
        this.imageNumber = 100;
        break;

      case "industrial":
        this.imageNumber = 110;
        break;
    }

    console.log(this.imageNumber);
    for (let j = 0; j < 10; j++) {
      let img = new Image();

      let url = `./assets/img/${this.imageNumber}.jpg`;
      let imgWrap = document.createElement("div");
      imgWrap.classList.add("scoreinfo__cards__card");
      this.cardBlock.appendChild(imgWrap);
      img.onload = function () {
        imgWrap.appendChild(img);
      };
      img.src = url;

      if (this.array.indexOf(this.imageNumber) === -1) {
        imgWrap.classList.add("grey");
      }
      this.imageNumber++;
    }
  
    this.cardBlock.addEventListener("click", (e) => {
      let target = e.target;
      let text = target.src.split("/");
      text = text[text.length - 1];
      text = text.substring(0, text.length - 4);

      if (target.tagName != "IMG") return;
      this.showModal(text);
    });
  }

  createArray() {
    if (this.imagesStorage) {
      for (const [key, value] of Object.entries(this.imagesStorage)) {
        this.array.push(...value);
      }
    }
    if (this.artistStorage) {
      for (const [key, value] of Object.entries(this.artistStorage)) {
        this.array.push(...value);
      }
    }
  }

  getItemFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  showModal(text) {
    this.modalIcon = document.querySelector(".modal__icon");
    this.modalImg = document.querySelector(".modal__img-wrap__img");
    this.modalImg.src = `./assets/img/${+text}.jpg`;

    let picInfo = [];
    picInfo.push(images[+text]["name"]);
    picInfo.push(images[+text]["author"]);
    picInfo.push(images[+text]["year"]);

    this.modalText = document.querySelectorAll(".modal__info__text");
    this.modalText.forEach((el, i) => {
      el.textContent = picInfo[i];
    });
    this.modal = document.querySelector(".modal-wrap");
    this.modalIcon.classList.remove("correct", "wrong");

    this.modal.classList.remove("none");
    this.modalBtn = document.querySelector(".modal__btn");

    this.modalBtn.addEventListener(
      "click",
      () => this.modal.classList.add("none"),
      {
        once: true,
      }
    );
  }
}
