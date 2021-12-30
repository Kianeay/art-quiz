import images from './images';
import Timer from './timer';
import { randomIntegerInRange } from './utils';

export default class ImageCardsSettings {
  constructor() {
    this.cards = document.querySelectorAll('.artists__cards__card');
    this.nodeAnswers = null;
    this.modal = document.querySelector('.modal-wrap');
    this.imgLists = document.querySelectorAll('.artgame__img-wrap__img');
    this.changeArtistPage = true;
    this.title = document.querySelector('.artgame__title');

    this.imgNumber = null;
    this.cardName = '';
    this.answer = '';
    this.answers = [];

    this.isTimerOn = false;
    this.myTimer = Timer({
      timeout: 10,
      size: 30,
      onFinish: () => this.fillModal(),
    });

    this.imgTypes = {
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

    this.picBreak = [140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 40];

    this.cards.forEach((el) => {
      el.addEventListener('click', (e) => this.init(e), { once: true });
    });

    this.start();
    this.checkCards();
  }

  checkCards() {
    if (JSON.parse(this.getItemFromStorage('imgTypes'))) {
      this.imgTypes = JSON.parse(this.getItemFromStorage('imgTypes'));

      this.cards.forEach((el) => {
        let text = el.className.split(' ');
        text = text[text.length - 1];
        if (this.imgTypes[text].length !== 0) {
          el.classList.remove('grey');
        }
      });
    }
  }

  stopTimer() {
    if (window.location.hash !== 'artgame') {
      this.myTimer.stop();
    }
  }

  init(e) {
    e.stopPropagation();

    this.cardName = e.currentTarget.className.split(' ');
    this.cardName = this.cardName[this.cardName.length - 1];
    this.setLocalStorage('cardName', this.cardName);
  }

  start() {
    if (!this.getItemFromStorage('imgTypes')) {
      this.setLocalStorage('imgTypes', JSON.stringify(this.imgTypes));
    } else {
      this.imgTypes = JSON.parse(this.getItemFromStorage('imgTypes'));
    }

    for (const key in this.imgTypes) {
      this.cards.forEach((el, i) => {
        const scoreDiv = document.createElement('div');
        scoreDiv.classList.add('artists__cards__card__score');

        if (Object.keys(this.imgTypes).indexOf(key) !== i) return;
        const text = this.imgTypes[key].length;
        scoreDiv.textContent = `${text}`;
        el.append(scoreDiv);
      });
    }
  }

  setLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }

  getItemFromStorage(key) {
    return localStorage.getItem(key);
  }

  fillContent(e, answ) {
    if (this.getItemFromStorage('timer')) {
      this.isTimerOn = true;
    } else {
      this.isTimerOn = false;
    }

    if (this.isTimerOn) {
      document.querySelector('.picturesgame').append(this.myTimer.component);
      this.myTimer.start();
    }

    this.modal.classList.add('none');

    this.lists = document.querySelectorAll('.artgame__controls__list');
    this.answers = [];

    if (!this.cardName) {
      this.cardName = this.getItemFromStorage('cardName');
    }

    this.lists.forEach((el, i) => {
      for (let j = 0; j < this.imgTypes[this.cardName].length; j++) {
        let char = this.imgTypes[this.cardName][j].toString();
        char = char.slice(-1);
        if (i === char) {
          el.classList.add('green');
        } else {
          el.classList.add('red');
        }
      }
    });

    if (!this.imgNumber) {
      switch (this.cardName) {
        case 'portrait':
          this.imgNumber = 130;
          break;

        case 'landscape':
          this.imgNumber = 140;
          break;

        case 'stillLife':
          this.imgNumber = 150;
          break;

        case 'graphic':
          this.imgNumber = 160;
          break;

        case 'antique':
          this.imgNumber = 170;
          break;

        case 'avantGarde':
          this.imgNumber = 180;
          break;

        case 'renaissance':
          this.imgNumber = 190;
          break;

        case 'surrealism':
          this.imgNumber = 200;
          break;

        case 'kitsch':
          this.imgNumber = 210;
          break;

        case 'minimalism':
          this.imgNumber = 220;
          break;

        case 'avangard':
          this.imgNumber = 230;
          break;

        case 'industrial':
          this.imgNumber = 40;
          break;
        default:
      }
    }

    if (answ === false) {
      this.imgNumber++;
    }

    this.checkLastImg();

    while (
      JSON.parse(this.getItemFromStorage('imgTypes'))[this.cardName].indexOf(
        this.imgNumber,
      ) !== -1
    ) {
      this.checkLastImg();
      this.imgNumber++;
    }

    this.answer = images[this.imgNumber].imageNum;
    this.answerAuthor = images[this.imgNumber].author;

    this.title = document.querySelector('.artgame__title');
    this.title.textContent = `Какую картину написал ${this.answerAuthor}?`;

    this.answers.push(this.answer);

    while (this.answers.length < 4) {
      const authorNum = randomIntegerInRange(0, 200);
      const author = images[authorNum].imageNum;
      if (this.answers.indexOf(author) === -1) {
        this.answers.push(author);
      }
    }

    this.answers = this.answers.sort(() => Math.random() - 0.5);

    this.imgLists = document.querySelectorAll('.artgame__img-wrap__img');
    this.imgLists.forEach((el, i) => {
      const elem = el;
      elem.src = `./assets/img/${this.answers[i]}.jpg`;
    });

    document.querySelector('.artgame__answers').addEventListener(
      'click',
      (e) => {
        const { target } = e;
        let text = target.src.split('/');
        text = text[text.length - 1];
        text = text.substring(0, text.length - 4);

        if (target.tagName !== 'IMG') return;
        this.fillModal(e, text);
      },
      {
        once: true,
      },
    );
  }

  checkLastImg() {

  }

  fillModal(e, text) {
    this.changeArtistPage = false;

    let answ = true;

    this.modalIcon = document.querySelector('.modal__icon');
    this.imgTypes = JSON.parse(this.getItemFromStorage('imgTypes'));
    this.modalImg = document.querySelector('.modal__img-wrap__img');
    this.modalImg.src = `./assets/img/${this.answer}.jpg`;

    const picInfo = [];
    picInfo.push(images[this.answer].name);
    picInfo.push(images[this.answer].author);
    picInfo.push(images[this.answer].year);

    this.modalText = document.querySelectorAll('.modal__info__text');
    this.modalText.forEach((el, i) => {
      const elem = el;
      elem.textContent = picInfo[i];
    });

    this.modal.classList.remove('none');
    this.modalBtn = document.querySelector('.modal__btn');

    this.modalBtn.addEventListener('click', (e) => this.fillContent(e, answ), {
      once: true,
    });

    if (text === this.answer) {
      this.modalIcon.classList.remove('wrong');
      this.modalIcon.classList.add('correct');

      if (
        this.imgTypes[this.getItemFromStorage('cardName')].indexOf(
          this.imgNumber,
        ) === -1
      ) {
        answ = true;
        this.imgTypes[this.getItemFromStorage('cardName')].push(this.imgNumber);
        this.setLocalStorage('imgTypes', JSON.stringify(this.imgTypes));
      }
    } else {
      this.modalIcon.classList.remove('correct');
      this.modalIcon.classList.add('wrong');
      answ = false;
    }
  }
}
