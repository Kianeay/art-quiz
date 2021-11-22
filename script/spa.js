import { Header, Content, Footer } from "./components.js";
import { GetCardName } from "./create-card.js";
import { DrawImgCard } from "./create-img.js";


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
      } else if (pageName === "artgame") {
        if (!cardName) cardName = new GetCardName();
        cardName.fillContent();
      } else if (pageName === "settings") {
        if (cardName) cardName.stopTimer();
        let timeCheck = document.querySelector(".time-check");
        let timeRange = document.querySelector("#rangeVal");
        if (localStorage.getItem("timer")) {
          timeCheck.checked = true;
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
      } else if (pageName === "scores") {
        if (cardName) cardName.stopTimer();

      } else if (pageName === "pictures") {
        if (cardName) cardName.stopTimer();
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
