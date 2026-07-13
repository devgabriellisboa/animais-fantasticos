export default class DarkMode {
  constructor(botao) {
    this.botao = document.querySelector(botao);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    document.body.classList.toggle('dark');
  }

  addDarkModeEvent() {
    this.botao.addEventListener('click', this.handleClick);
  }

  init() {
    if (this.botao) {
      this.addDarkModeEvent();
    }
    return this;
  }
}
