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
            <a class="button header__menu__link" href="#main">Главная</a>
            <a class="button header__menu__link" href="#settings">Настройки</a>
            <a class="button header__menu__link" href="#score">Счет</a>
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
    <footer class="footer">
    <div class="wrapper">
      <ul>
        <li>
          <a
            href="https://github.com/Kianeay/"
            target=" _blank"
            ><img src="assets/github_PNG40.png" alt="git logo"
          /></a>
        </li>
        <li>&copy;2021 Ekaterina</li>
        <li>
          <a href="https://rs.school/js/" target=" _blank"
            ><img src="assets/logo-rsschool3.png" alt="rsschool"
          /></a>
        </li>
      </ul>
    </div>
  </footer>
        `;
  },
};
