import { renderApp } from "./render-component";
import { getCardsArray, gameLogic } from "../index";
import { initTimer } from "./timer";

export function renderGameComponent(level: number, appEl: HTMLElement) {
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

    function CardHTML(card: string) {
        return `<li class="jacket">
              <div class="card">
              <img src="${card}" alt = "карта">
              </div>
              `;
    }
    appEl.innerHTML = appHtml;
    const timer = appEl.querySelector<HTMLElement>(".time");
    if (timer) initTimer(timer);

    const restart = appEl.querySelector<HTMLElement>(".restart");
    if (restart)
        restart.onclick = () => {
            renderApp(appEl);
        };
    gameLogic(cards);
}

export function renderCongratulation(
    appEl: HTMLElement,
    time: string,
    win?: string,
) {
    const winHtml = `<div class="finish-game">
      <div class="image">
      <img src=${
          win ? "./assets/img/celebration.png" : "./assets/img/loser.png"
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

    const restart = appEl.querySelector<HTMLElement>(".start-button");
    if (restart)
        restart.onclick = () => {
            renderApp(appEl);
        };
}
