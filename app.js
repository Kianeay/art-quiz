import { mySPA, components, routes  } from "./script/spa.js";

 
//      init module

document.addEventListener(
  "DOMContentLoaded",
  mySPA.init({
    container: "spa",
    routes: routes,
    components: components,
  })
);
