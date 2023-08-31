//import { gameLogic } from "../index.js";
import { cards } from "./card-mas.js";
import { initTimer } from "./timer.js";

export function renderGameComponent(level, appEl) {
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

    function CardHTML() {
        return `<li class="jacket">
              <div class="card">
                  <img src="./assets/img/cards/рубашка.png"" alt = "карта">
              </div>
              `;
    }
    appEl.innerHTML = appHtml;

    const timer = appEl.querySelector < HTMLElement > ".time";
    if (timer) initTimer(timer);

    const restart = appEl.querySelector < HTMLElement > ".restart";
    if (restart)
        restart.onclick = () => {
            renderGameComponent(appEl);
        };
    //gameLogic(cards);
}
