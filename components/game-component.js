import { renderApp } from "./render-component.js";
import { getCardsArray, gameLogic } from "../index.js";
import { initTimer } from "./timer.js";

export function renderGameComponent(level, appEl) {
    const cards = getCardsArray(level);
    const cardsHtml = cards.map((card) => CardHTML(card)).join("");
    const appHtml = `
        <div class="game-header">
        <div class="timer">
        <div class="timer-title">
        <p class="time-labels">min</p>
        <p class="time-labels">sek</p>
        </div>
        <p class="time">00.00</p>
        </div>
        <button class="restart">Начать заново</button>
        </div>
        <div class="play-field level-${level}">
        <ul id="cards">${cardsHtml}</ul>
        </div>`;

    function CardHTML(card) {
        return `<li class="jacket">
              <div class="card">
              <img src="${card}" alt = "карта">
              </div>
              `;
    }
    appEl.innerHTML = appHtml;
    const timer = appEl.querySelector(".time");
    if (timer) initTimer(timer);

    const restart = appEl.querySelector(".restart");
    if (restart)
        restart.onclick = () => {
            renderApp(appEl);
        };
    gameLogic(cards);
}

export function renderCongratulation(appEl, time, win) {
    const winHtml = `<div class="finish-game">
      <div class="image">
      <img src=${
          win ? "./assets/img/celebration.png" : "./assets/img/dead.png"
      } alt = "картинка">
      </div>
      <h3 class="win-title">Вы ${win ? "выиграли" : "проиграли"}!</h3>
      <!-- <div class="time"> -->
      <p class="time-text">Затраченное время:</p>
      <p class="time-value">${time}</p>
      <!-- </div> -->
      <button class="start-button">Играть снова</button>
    </div>`;
    appEl.innerHTML = winHtml;

    const restart = appEl.querySelector(".start-button");
    if (restart)
        restart.onclick = () => {
            renderApp(appEl);
        };
}
