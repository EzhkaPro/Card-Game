import { renderGameComponent } from "./game-component.js";

let appEl = document.getElementById("app");

export const renderApp = () => {
    const appHtml = `
    <form action="#" class="complexity-box">
        <h1 class="complexity-title">Выбери сложность</h1>
        <fieldset class="input-level">
            <label for="easy-level">
                <input type="radio" 
                id="easy-level"
                name="complexity" 
                value="Легкий уровень - 6 карточек (3 пары)">
                <span class="level">1</span>
            </label>
            <label for="medium-level">
                <input type="radio" 
                id="medium-level"
                name="complexity" 
                value="Средний уровень - 12 карточек (6 пар)">
                <span class="level">2</span>
            </label>
            <label for="hard-level">
                <input type="radio" 
                id="hard-level"
                name="complexity" 
                value="Сложный уровень - 18 карточек (9 пар)">
                <span class="level">3</span>
            </label>
        </fieldset>
        <button type="submit" id="start-button" class="start-button">Старт</button>
    </form>
    `;
    appEl.innerHTML = appHtml;

    const startButton = document.getElementById("start-button");
    if (startButton) {
        startButton.onclick = () => {
            const levels = document.querySelectorAll(
                'input[name="complexity"]',
            );
            for (const level of levels) {
                if (level.checked) {
                    const gameLevel = level.value;
                    renderGameComponent(appEl, gameLevel);
                }
            }
        };
    }
};
