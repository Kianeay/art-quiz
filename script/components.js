export const Header = {
  id: 'header',
  title: 'Тренировки',
  render: () => `
      <header class="header">
      <div class="wrapper">
        <div class="header__wrap flex flex-jc-sb flex-ai-c">
          <div class="header__logo-wrap">
            <img src="assets/logo.png" alt="" class="header__logo-wrap__logo" />
          </div>
          <nav class="header__menu">
            <a class="button header__menu__link" href="#main">Главная</a>
            <a class="button header__menu__link" href="#settings">Настройки</a>
            <a class="button header__menu__link" href="#scores">Счет</a>
          </nav>
        </div>
      </div>
    </header>
          `,
};

export const Content = {
  render: (customClass = '') => `<div class="content ${customClass}" id="content"></div>`,
};

export const Footer = {
  render: () => `
    <footer class="footer">
    <div class="wrapper">
      <ul>
        <li>
          <a
            href="https://github.com/"
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
        `,
};

export const Modal = {
  render: () => `
    <div class="modal-wrap none">
    <div class="modal">
      <div class="modal__icon"></div>
      <div class="modal__img-wrap">
        <img class="modal__img-wrap__img" alt="">
      </div>
      <div class="modal__info">
        <div class="modal__info__text">1</div>
        <div class="modal__info__text">2</div>
        <div class="modal__info__text">3</div>
      </div>
      <button class="button modal__btn">Продолжить</button>
    </div>
    <div class="overlay"></div>
    </div>
        `,
};
