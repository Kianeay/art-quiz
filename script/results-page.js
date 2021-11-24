import images from "./images";

export class AddImg {
  constructor() {
    this.cardBlock = document.querySelector(".scores__cards");
    this.imagesStorage = this.getItemFromStorage("imgTypes");
    this.artistStorage = this.getItemFromStorage("types");
    this.array = [];



    this.createArray();
    this.addImages();
   
  }

  addImages() {
    for (let key in images) {
      let img = new Image();

      let url = `./assets/img/${images[key]["imageNum"]}.jpg`;
      let imgWrap = document.createElement("div");
      imgWrap.classList.add("scores__cards__card");

      if (this.array.indexOf(+images[key]["imageNum"]) === -1) {
        imgWrap.classList.add("grey");
      }

      this.cardBlock.appendChild(imgWrap);

      img.onload = function () {
        imgWrap.appendChild(img);
      };

      img.src = url;
    }
    this.cardBlock.addEventListener(
      "click",
      (e) => {
        let target = e.target;
        let text = target.src.split("/");
        text = text[text.length - 1];
        text = text.substring(0, text.length - 4);
    
        if (target.tagName != "IMG") return;
        this.showModal(text);
      }
    );
    
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
    this.modalIcon.classList.remove('correct', 'wrong');

    this.modal.classList.remove("none");
    this.modalBtn = document.querySelector(".modal__btn");

    this.modalBtn.addEventListener("click", () => this.modal.classList.add("none"), {
      once: true,
    });
  }
}
