import { mySPA, components, routes } from './script/spa';

document.addEventListener(
  'DOMContentLoaded',
  mySPA.init({
    container: 'spa',
    routes,
    components,
  }),
);
