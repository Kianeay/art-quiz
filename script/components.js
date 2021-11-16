export const Header = {
  id: "header",
  title: "Тренировки",
  render: (className = "container", ...rest) => {
    return `
      <header class="header">
      <div class="wrapper">
        <div class="header__wrap flex flex-jc-sb flex-ai-c">
          <div class="header__logo-wrap">
            <img src="assets/logo.png" alt="" class="header__logo-wrap__logo" />
          </div>
          <nav class="header__menu">
            <button class="button header__menu__btn">Settings</button>
          </nav>
        </div>
      </div>
    </header>
          `;
  },
};

export const Content = {
  render: (customClass = "") => {
    return `<div class="content ${customClass}" id="content"></div>`;
  },
};

export const Footer = {
  render: (customClass = "") => {
    return `
        <footer class="footer ${customClass}">

        </footer>
        `;
  },
};
