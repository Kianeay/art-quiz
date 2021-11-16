const components = {
  header: Header,
  content: Content,
  footer: Footer,
};

const routes = {
  main: Main,
  chat: Chat,
  default: Main,
  login: Login,
  /* error: ErrorPage, */
};

//       spa init module

const mySPA = (function () {
  //      begin view

  function ModuleView() {
    let myModuleContainer = null;
    let contentContainer = null;
    let routesObj = null;

    this.init = function (container, routes) {
      myModuleContainer = container;
      routesObj = routes;
    };

    this.renderContent = function (pageName) {
      let routeName = "default";

      if (pageName.length > 0) {
        routeName = pageName in routes ? pageName : "error";
      }
      window.document.title = routesObj[routeName].title;
      contentContainer.innerHTML = routesObj[routeName].render(
        `${routeName}-page`
      );
      this.updateLink(routesObj[routeName].id);
    };
  }

  //        end view

  //        begin model

  function ModuleModel() {
    let myView = null;

    this.init = function (view) {
      myView = view;
    };
  }

  //      end model

  //      begin controller

  function ModuleController() {
    let myModuleContainer = null;
    let myModel = null;

    this.init = function (container, model) {
      myModuleContainer = container;
      myModel = model;
    };

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
  }
})();

//      end module

//      init module

document.addEventListener(
  "DOMContentLoaded",
  mySPA.init({
    container: "spa",
    routes: routes,
    components: components,
  })
);
