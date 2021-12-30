import {
  Header, Content, Footer, Modal,
} from './components';
import GetCardName from './create-card';
import DrawImgCard from './create-img';
import AddImg from './results-page';

import {
  Main,
  Artists,
  Pictures,
  Settings,
  Scores,
  ArtistGame,
  PicturesGame,
  Scoreinfo,
} from './pages';

export const components = {
  header: Header,
  content: Content,
  footer: Footer,
  modal: Modal,
};

export const routes = {
  main: Main,
  default: Main,
  artists: Artists,
  pictures: Pictures,
  settings: Settings,
  scores: Scores,
  artgame: ArtistGame,
  picturesgame: PicturesGame,
  scoreinfo: Scoreinfo,

};

export const mySPA = (function () {
  function ModuleView() {
    let myModuleContainer = null;
    let contentContainer = null;
    let routesObj = null;
    let imgCards = null;
    let cardName = null;

    this.init = (container, routes) => {
      myModuleContainer = container;
      routesObj = routes;
      contentContainer = myModuleContainer.querySelector('#content');
    };

    this.renderContent = (pageName) => {
      let routeName = 'default';

      if (pageName.length > 0) {
        routeName = pageName in routes ? pageName : 'error';
      }
      window.document.title = routesObj[routeName].title;
      contentContainer.innerHTML = routesObj[routeName].render(`${routeName}`);
      this.updateLink(routesObj[routeName].id);

      if (pageName === 'artists') {
        cardName = new GetCardName();
        if (cardName) cardName.stopTimer();
        if (imgCards) imgCards.stopTimer();
      } else if (pageName === 'artgame') {
        if (!cardName) cardName = new GetCardName();
        cardName.fillContent();
      } else if (pageName === 'settings') {
        if (cardName) cardName.stopTimer();
        if (imgCards) imgCards.stopTimer();
        const timeCheck = document.querySelector('.time-check');
        const timeRange = document.querySelector('#rangeVal');
        if (localStorage.getItem('timer')) {
          timeCheck.checked = true;
          timeRange.value = localStorage.getItem('timer');
        } else {
          timeCheck.checked = false;
        }
        timeRange.addEventListener('input', () => {
          if (timeCheck.checked) {
            localStorage.setItem('timer', timeRange.value);
          } else {
            localStorage.removeItem('timer');
          }
        });

        timeCheck.addEventListener('input', () => {
          if (document.querySelector('.time-check').checked) {
            localStorage.setItem('timer', timeRange.value);
          } else {
            localStorage.removeItem('timer');
          }
        });
      } else if (pageName === 'main') {
        if (cardName) cardName.stopTimer();
        if (imgCards) imgCards.stopTimer();
      } else if (pageName === 'scores') {
        if (cardName) cardName.stopTimer();
        if (imgCards) imgCards.stopTimer();
        document.querySelectorAll('.artists__cards__card').forEach((card) => card.addEventListener('click', (e) => {
          let text = e.currentTarget.classList;
          // eslint-disable-next-line prefer-destructuring
          text = text[1];
          localStorage.setItem('scoresCategory', text);
        }));
      } else if (pageName === 'pictures') {
        if (cardName) cardName.stopTimer();
        if (imgCards) imgCards.stopTimer();
        imgCards = new DrawImgCard(); //
      } else if (pageName === 'picturesgame') {
        if (!imgCards) imgCards = new DrawImgCard();
        imgCards.fillContent();
      } else if (pageName === 'scoreinfo') {
        // eslint-disable-next-line no-unused-vars
        const createScores = new AddImg();
      }
    };

    this.updateLink = (currentPage) => {
      const links = document.querySelectorAll('.header__menu__link');

      for (const link of links) {
        // eslint-disable-next-line no-unused-expressions
        currentPage === link.getAttribute('href').slice(1)
          ? link.classList.add('active')
          : link.classList.remove('active');
      }
    };
  }

  function ModuleModel() {
    let myView = null;

    this.init = (view) => {
      myView = view;
    };

    this.update = (pageName) => {
      myView.renderContent(pageName);
    };
  }

  function ModuleController() {
    // eslint-disable-next-line no-unused-vars
    let myModuleContainer = null;
    let myModel = null;
    let pageName = null;

    this.init = (container, model) => {
      myModuleContainer = container;
      myModel = model;

      window.addEventListener('hashchange', this.update);
      this.update();
    };

    this.update = () => {
      pageName = window.location.hash.slice(1).toLowerCase();
      myModel.update(pageName);
    };
  }

  return {
    init({ container, routes, components }) {
      this.renderComponents(container, components);

      const view = new ModuleView();
      const model = new ModuleModel();
      const controller = new ModuleController();

      view.init(document.getElementById(container), routes);
      model.init(view);
      controller.init(document.getElementById(container), model);
    },

    renderComponents(container, components) {
      const root = document.getElementById(container);
      const componentList = Object.keys(components);
      for (const item of componentList) {
        root.innerHTML += components[item].render('component');
      }
    },
  };
}());
