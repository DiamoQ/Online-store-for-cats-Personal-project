'use strict';

class CreateStepCard {
  constructor(icon, text, parent, ...classes) {
    this.icon = icon;
    this.text = text;
    this.classes = classes;
    this.parent = document.querySelector(parent);
  }

  render() {
    const element = document.createElement('li');

    if (this.classes.length === 0) {
      this.element = 'steps__item';
      element.classList.add(this.element);
    } else {
      this.classes.forEach(className => element.classList.add(className));
    };

    element.innerHTML = ` <div class="steps__icon-back">
                            <img src=${this.icon} class="steps__icon-img">
                          </div>
                          <p class="steps__item-text">${this.text}</p>`;
    this.parent.append(element);
  }

};

new CreateStepCard(
  './img/step-1-icon.svg',
  'Функциональное питание содержит только полезные питательные вещества.',
  '.steps__list',
  'steps__item',
  'steps__item--1',
).render();

new CreateStepCard(
  './img/step-2-icon.svg',
  'Выпускается в виде порошка, который нужно лишь залить кипятком и готово.',
  '.steps__list',
  'steps__item',
  'steps__item--2',
).render();

new CreateStepCard(
  './img/step-3-icon.svg',
  'Замените один-два приема обычной еды на наше функциональное питание.',
  '.steps__list',
  'steps__item',
  'steps__item--3',
).render();

new CreateStepCard(
  './img/step-4-icon.svg',
  'Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!',
  '.steps__list',
  'steps__item',
  'steps__item--4',
).render();