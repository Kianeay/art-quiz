import images from './images';
import Timer from './timer';
import { randomIntegerInRange } from './utils';

export default class AuthorCardsSettings {
  constructor() {
    this.cards = document.querySelectorAll('.artists__cards__card');
    this.nodeAnswers = null;
    this.modal = document.querySelector('.modal-wrap');
    this.lists = document.querySelectorAll('.artgame__controls__list');
    this.changeArtistPage = true;

    this.imgNumber = 0;
    this.cardName = '';
    this.answer = '';
    this.answers = [];

    this.isTimerOn = false;
    this.myTimer = Timer({
      timeout: 10,
      size: 30,
      onFinish: () => this.fillModal(),
    });

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
      el.addEventListener('click', (e) => this.init(e), { once: true });
    });

    this.start();

    this.checkCards();
  }

  checkCards() {
    if (JSON.parse(localStorage.getItem('types'))) {
      this.types = JSON.parse(localStorage.getItem('types'));

      this.cards.forEach((el) => {
        let text = el.className.split(' ');
        text = text[text.length - 1];
        if (this.types[text].length !== 0) {
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
    this.cardName = e.currentTarget.className.split(' ');
    this.cardName = this.cardName[this.cardName.length - 1];
    localStorage.setItem('cardName', this.cardName);
  }

  start() {
    if (!localStorage.getItem('types')) {
      localStorage.setItem('types', JSON.stringify(this.types));
    } else {
      this.types = JSON.parse(localStorage.getItem('types'));
    }

    for (const key in this.types) {
      this.cards.forEach((el, i) => {
        const scoreDiv = document.createElement('div');
        scoreDiv.classList.add('artists__cards__card__score');

        if (Object.keys(this.types).indexOf(key) !== i) return;
        const text = this.types[key].length;
        scoreDiv.textContent = `${text}`;
        el.append(scoreDiv);
      });
    }
  }

  fillContent(e, answ) {
    if (localStorage.getItem('timer')) {
      this.isTimerOn = true;
    } else {
      this.isTimerOn = false;
    }

    if (this.isTimerOn) {
      document.querySelector('.artgame').append(this.myTimer.component);
      this.myTimer.start();
    }

    this.modal.classList.add('none');

    this.lists = document.querySelectorAll('.artgame__controls__list');
    this.answers = [];

    if (!this.cardName) {
      this.cardName = localStorage.getItem('cardName');
    }

    this.lists.forEach((el, i) => {
      for (let j = 0; j < this.types[this.cardName].length; j += 1) {
        let char = this.types[this.cardName][j].toString();

        if (this.cardName !== 'portrait') {
          char = char.slice(-1);
        }
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
        default:
      }
    }

    if (answ === false) {
      this.imgNumber += 1;
    }

    this.checkLastImg();
    while (
      JSON.parse(localStorage.getItem('types'))[this.cardName].indexOf(
        this.imgNumber,
      ) !== -1
    ) {
      this.checkLastImg();
      this.imgNumber += 1;
    }
    this.img = document.querySelector('.artgame__img-wrap__img');
    this.img.src = `./assets/img/${this.imgNumber}.jpg`;

    this.answer = images[this.imgNumber].author;

    this.answers.push(this.answer);

    while (this.answers.length < 4) {
      const authorNum = randomIntegerInRange(0, 200);
      const { author } = images[authorNum];
      if (this.answers.indexOf(author) === -1) {
        this.answers.push(author);
      }
    }
    this.answers = this.answers.sort(() => Math.random() - 0.5);

    this.nodeAnswers = document.querySelectorAll('.artgame__answers__answer');

    this.nodeAnswers.forEach((el, i) => {
      const element = el;
      element.textContent = this.answers[i];
    });

    document.querySelector('.artgame__answers').addEventListener(
      'click',
      (e) => {
        const { target } = e;
        const text = target.textContent;

        if (target.tagName !== 'BUTTON') return;
        this.fillModal(e, text);
        this.myTimer.stop();
      },
      {
        once: true,
      },
    );
  }

  checkLastImg() {
    if (
      this.picBreak.indexOf(this.imgNumber) !== -1
      && this.changeArtistPage === false
    ) {
      window.location.hash = 'artists';
    }
  }

  fillModal(e, text) {
    this.changeArtistPage = false;

    let answ = true;

    this.modalIcon = document.querySelector('.modal__icon');
    this.types = JSON.parse(localStorage.getItem('types'));
    this.modalImg = document.querySelector('.modal__img-wrap__img');
    this.modalImg.src = `./assets/img/${this.imgNumber}.jpg`;

    const picInfo = [];
    picInfo.push(images[this.imgNumber].name);
    picInfo.push(images[this.imgNumber].author);
    picInfo.push(images[this.imgNumber].year);

    this.modalText = document.querySelectorAll('.modal__info__text');
    this.modalText.forEach((el, i) => {
      const element = el;
      element.textContent = picInfo[i];
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
        this.types[localStorage.getItem('cardName')].indexOf(
          this.imgNumber,
        ) === -1
      ) {
        answ = true;
        this.types[localStorage.getItem('cardName')].push(this.imgNumber);
        localStorage.setItem('types', JSON.stringify(this.types));
      }
    } else {
      this.modalIcon.classList.remove('correct');
      this.modalIcon.classList.add('wrong');
      answ = false;
    }
  }
}
