export default class Card {
  constructor(name) {
    this.name = name;
    this.id = null;
    this.draggable = true;
  }

  addCardCloseBlock() {
    const closeBtn = document.createElement('div');
    closeBtn.classList.add('card-close-block');
    closeBtn.innerHTML = '<button class="task_delete-button">Х</button>';

    return closeBtn;
  }

  createNewCard(card, cardsList, cardsArr) {
    const el = document.createElement('li');
    el.classList.add('list-item');
    el.draggable = true;

    el.innerHTML = `<p>${card.name}</p>`;

    cardsList.appendChild(el);

    const close = this.addCardCloseBlock();

    el.addEventListener('mouseover', () => {
      el.insertAdjacentElement('beforeEnd', close);

      close.addEventListener('click', () => {
        cardsArr.splice(card.id, 1);
        cardsList.removeChild(el);
      });
    });

    el.addEventListener('mouseleave', () => {
      el.removeChild(close);
    });
  }
}
