import { Header, Content, Footer, Modal } from "./components.js";
import { GetCardName } from "./create-card.js";
import { DrawImgCard } from "./create-img.js";
import { AddImg } from "./results-page.js";


import {
  Main,
  Artists,
  Pictures,
  Settings,
  Scores,
  ArtistGame,
  PicturesGame,
} from "./pages.js";


export const components = {
  header: Header,
  content: Content,
  footer: Footer,
  modal: Modal
};

export const routes = {
  main: Main,
  default: Main,
  artists: Artists,
  pictures: Pictures,
  settings: Settings,
  scores: Scores,
  artgame: ArtistGame,
  pictures: Pictures,
  picturesgame: PicturesGame,
  /*    
    login: Login,
    error: ErrorPage, */
};

//       spa init module

export const mySPA = (function () {
  //      begin view

  function ModuleView() {
    let myModuleContainer = null;
    let contentContainer = null;
    let routesObj = null;
    let imgCards = null;
    let cardName = null;
    let createScores = null;

    this.init = function (container, routes) {
      myModuleContainer = container;
      routesObj = routes;
      contentContainer = myModuleContainer.querySelector("#content");
    };

    this.renderContent = function (pageName) {
      let routeName = "default";

      if (pageName.length > 0) {
        routeName = pageName in routes ? pageName : "error";
      }
      window.document.title = routesObj[routeName].title;
      contentContainer.innerHTML = routesObj[routeName].render(`${routeName}`);
      this.updateLink(routesObj[routeName].id);

      if (pageName === "artists") {
        cardName = new GetCardName();
        if (cardName) cardName.stopTimer();
        if (imgCards) imgCards.stopTimer();
      } else if (pageName === "artgame") {
        if (!cardName) cardName = new GetCardName();
        cardName.fillContent();
      } else if (pageName === "settings") {
        if (cardName) cardName.stopTimer();
        if (imgCards) imgCards.stopTimer();
        let timeCheck = document.querySelector(".time-check");
        let timeRange = document.querySelector("#rangeVal");
        if (localStorage.getItem("timer")) {
          timeCheck.checked = true;
          timeRange.value = localStorage.getItem("timer") 
        } else {
          timeCheck.checked = false;
        }
        timeRange.addEventListener("input", function () {
          if (timeCheck.checked) {
            localStorage.setItem("timer", timeRange.value);
          } else {
            localStorage.removeItem("timer");
          }
        });

        timeCheck.addEventListener("input", function () {
          if (document.querySelector(".time-check").checked) {
            localStorage.setItem("timer", timeRange.value);
          } else {
            localStorage.removeItem("timer");
          }
        });
      } else if (pageName === "main") {
        if (cardName) cardName.stopTimer();
        if (imgCards) imgCards.stopTimer();
      } else if (pageName === "scores") {
        if (cardName) cardName.stopTimer();
        if (imgCards) imgCards.stopTimer();
        createScores = new AddImg();
       /*  createScores.addImages(); */
      } else if (pageName === "pictures") {
        if (cardName) cardName.stopTimer();
        if (imgCards) imgCards.stopTimer();
        imgCards = new DrawImgCard();
      } else if (pageName === "picturesgame") {
        if (!imgCards) imgCards = new DrawImgCard();
        imgCards.fillContent();
      }
    };

    this.updateLink = function (currentPage) {
      let links = document.querySelectorAll(".header__menu__link");

      for (let link of links) {
        currentPage === link.getAttribute("href").slice(1)
          ? link.classList.add("active")
          : link.classList.remove("active");
      }
    };
  }

  //        end view
  //        begin model

  function ModuleModel() {
    let myView = null;

    this.init = function (view) {
      myView = view;
    };

    this.update = function (pageName) {
      myView.renderContent(pageName);
    };
  }

  //      end model
  //      begin controller

  function ModuleController() {
    let myModuleContainer = null;
    let myModel = null;
    let pageName = null;

    this.init = function (container, model) {
      myModuleContainer = container;
      myModel = model;

      window.addEventListener("hashchange", this.update);
      this.update();
    };

    this.update = function () {
      /* const pageName = window.location.hash.slice(1).toLowerCase(); */
      pageName = window.location.hash.slice(1).toLowerCase();
      myModel.update(pageName);
    };
  }
  //    end controller

  return {
    init: function ({ container, routes, components }) {
      this.renderComponents(container, components);

      const view = new ModuleView();
      const model = new ModuleModel();
      const controller = new ModuleController();

      view.init(document.getElementById(container), routes);
      model.init(view);
      controller.init(document.getElementById(container), model);
    },

    // draw main components
    renderComponents: function (container, components) {
      const root = document.getElementById(container);
      const componentList = Object.keys(components);
      for (let item of componentList) {
        root.innerHTML += components[item].render("component");
      }
    },
  };
})();

console.log(
  `
  Ваша оценка - 190 баллов 
  Отзыв по пунктам ТЗ:
  Не выполненные/не засчитанные пункты:
  1) в настройках есть возможность включать/выключать звук, есть регулятор громкости звука. Если звук включён, есть звуковая индикация правильных и неправильных ответов, звуковое сопровождение окончания раунда 
  
  2) дополнительными баллами оценивается очень высокое качество оформления приложения, продуманность отдельных деталей интерфейса, улучшающие внешний вид приложения и удобство пользования им, а также выполненный на высоком уровне и сложный в реализации свой собственный дополнительный функционал, существенно улучшающий качество и/или возможности приложения 
  
  Частично выполненные пункты:
  1) после окончания раунда выводится уведомление об окончании раунда и отображается результат прохождения раунда - количество вопросов, на которые был дан правильный ответ. Есть кнопка "Продолжить" при клике по которой пользователь перенаправляется на страницу категорий данного типа вопросов 
  
  2) Плавная смена изображений, картинки сначала загружаются, потом отображаются, нет ситуации, когда пользователь видит частично загрузившиеся изображения. Плавную смену изображений не проверяем: 1) при загрузке и перезагрузке приложения 2) при открытой консоли браузера 
  
  3) 5 баллов за каждую уникальную сложную анимацию, улучшающую интерфейс и удобство использования приложения, но не больше 20 баллов 
  
  Выполненные пункты:
  1) вёрстка, дизайн, UI стартовой страницы приложения. Выполняются требования к вёрстке и оформлению приложения. На стартовой странице есть кнопка, при клике по которой открываются настройки викторины, и две кнопки, при кликах по которым можно выбрать тип вопроса: угадать художника по картине, угадать картину по имени её автора 
  
  2) реализована навигация по страницам приложения. Со стартовой страницы при клике по кнопке с типом вопроса пользователь попадает на страницу категорий выбранного типа вопросов. Со страницы категорий пользователь может вернуться на стартовую страницу приложения. Со страницы категорий при клике по карточке категории пользователь попадает на страницу с вопросами категории. На карточке сыгранной категории есть кнопка или ссылка, при клике по которой пользователь попадает  на страницу с результатами прохождения раунда. Со страницы с вопросами и со страницы с результатами пользователь может вернуться на страницу категорий или на стартовую страницу приложения 
  
  3) в настройках есть возможность включать/выключать игру на время. Если выбрана игра на время, на странице с вопросами викторины отображается таймер, отсчитывающий время, которое отведено для ответа на вопрос 
  
  4) в настройках можно указать время для ответа на вопрос в интервале от 5 до 30 секунд с шагом в 5 секунд. Если время истекает, а ответа нет, это засчитывается как неправильный ответ на вопрос 
  
  5) при перезагрузке страницы приложения настройки сохраняются 
  
  6) вёрстка, дизайн, UI страницы категории. Выполняются требования к вёрстке и оформлению приложения. На странице категорий размещаются карточки категорий. Карточки категорий могут иметь названия, или их можно просто пронумеровать. 
  
  7) карточка сыгранной категории внешне отличается от карточки категории, которая ещё не игралась 
  
  8) на карточке сыгранной категории отображается результат прохождения раунда - количество вопросов, на которые был дан правильный ответ 
  
  9) вёрстка, дизайн, UI страницы с вопросами. Выполняются требования к вёрстке и оформлению приложения. Вопросы в викторине идут в том порядке, в каком информация про картины и их авторов размещается в коллекции исходных данных. 
  
  10) варианты ответов на вопросы генерируются случайным образом. В вариантах ответов на вопросы викторины должен быть правильный ответ и только один. Правильный ответ в разных вопросах должен находиться на разных местах, а не, например, всегда быть только первым. Варианты ответов должны быть разными. В вариантах ответов не должны повторяться картины одного и того же художника. 
  
  11) правильным и неправильным ответам пользователя соответствуют индикаторы разного цвета 
  
  12) после того, как ответ выбран, появляется модальное окно с правильным ответом на вопрос и кнопкой "Продолжить". При клике по кнопке "Продолжить" пользователь переходит к следующему вопросу категории 
  
  13) вёрстка, дизайн, UI страницы с результатами. Выполняются требования к вёрстке и оформлению приложения 
  
  14) страница с результатами содержит превью всех картин категории 
  
  15) картины, на вопросы про которые или про их авторов был дан правильный ответ, цветные; картины, на вопросы про которые или про их авторов был дан неправильный ответ, черно-белые 
  
  16) при клике по картине выводится информация о ней - название, автор, год создания 
  
  17) если раунд проигрывался повторно и результаты изменились, эти изменения отображаются на странице с результатами 
  
  
  `
);
