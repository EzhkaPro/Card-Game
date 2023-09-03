import { goToPage, page, setPage } from "../index.js";
import { EASY_PAGE, MEDIUM_PAGE, HARD_PAGE } from "../index.js";

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

    const easyLevel = document.getElementById("easy-level");
    const mediumLevel = document.getElementById("medium-level");
    const hardLevel = document.getElementById("hard-level");
    const startButton = document.getElementById("start-button");
    const startButtonGame = [easyLevel, mediumLevel, hardLevel];

    startButtonGame.forEach((el) => {
        el.addEventListener("click", () => {
            startButtonGame.forEach((el) => {
                el.removeAttribute("checked");
            });
            el.setAttribute("checked", "");
        });
    });

    startButton.addEventListener("click", () => {
        if (easyLevel.hasAttribute("checked")) {
            setPage(EASY_PAGE);
            goToPage(page);
        }
        if (mediumLevel.hasAttribute("checked")) {
            setPage(MEDIUM_PAGE);
            goToPage(page);
        }
        if (hardLevel.hasAttribute("checked")) {
            setPage(HARD_PAGE);
            goToPage(page);
        }
    });
};
