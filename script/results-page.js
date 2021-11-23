import images from "./images";

export class AddImg {
  constructor() {
    this.cardBlock = document.querySelector(".scores__cards");
    this.imagesStorage = this.getItemFromStorage('imgTypes');
    this.artistStorage = this.getItemFromStorage('types');
    this.array = [];

    this.createArray()
  }

  addImages() {
 
    for (let key in images) {
      let img = new Image();
     
      let url = `./assets/img/${images[key]["imageNum"]}.jpg`;
      let imgWrap = document.createElement("div");
      imgWrap.classList.add("scores__cards__card");

      console.log(images[key]["imageNum"]);
      if (this.array.indexOf(+images[key]["imageNum"]) === -1) {

        imgWrap.classList.add("grey");
      }
     

      this.cardBlock.appendChild(imgWrap);

      img.onload = function () {
        imgWrap.appendChild(img);
      };

      img.src = url;
    }

    
  }

  createArray() {
    for (const [key, value] of Object.entries(this.imagesStorage)) {
        this.array.push(...value)
      }
      for (const [key, value] of Object.entries(this.artistStorage)) {
        this.array.push(...value)
      }
  
  }

  getItemFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}
