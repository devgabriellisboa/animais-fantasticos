export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
  }

  // Cria o observer que vai vigiar cada seção
  createObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ativo');
        } else {
          entry.target.classList.remove('ativo');
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -20% 0px', // encolhe 20% da parte de baixo da tela
    });
  }

  // Registra cada seção pra ser observada
  observeSections() {
    this.sections.forEach((section) => {
      this.observer.observe(section);
    });
  }

  init() {
    if (this.sections.length) {
      this.createObserver();
      this.observeSections();
    }
    return this;
  }

  // Para de observar todas as seções
  stop() {
    if (this.observer) {
      this.sections.forEach((section) => {
        this.observer.unobserve(section);
      });
    }
  }
}
