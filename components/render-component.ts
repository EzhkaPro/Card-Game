import { renderGameComponent } from "./game-component";

export function renderApp(appEl: HTMLElement) {
    const appHtml = `
    <form action="#" class="complexity-box">
        <h1 class="complexity-title">Выбери сложность</h1>
        <fieldset class="input-level">
            <label for="easy-level">
                <input type="radio" 
                id="easy-level"
                name="complexity" 
                value="6">
                <span class="level">1</span>
            </label>
            <label for="medium-level">
                <input type="radio" 
                id="medium-level"
                name="complexity" 
                value="12">
                <span class="level">2</span>
            </label>
            <label for="hard-level">
                <input type="radio" 
                id="hard-level"
                name="complexity" 
                value="18">
                <span class="level">3</span>
            </label>
        </fieldset>
        <button type="submit" id="start-button" class="start-button">Старт</button>
    </form>
    `;
    appEl.innerHTML = appHtml;

    const startButton = appEl.querySelector<HTMLElement>(".start-button");
    if (startButton) {
        startButton.onclick = () => {
            const levels: NodeListOf<HTMLInputElement> = appEl.querySelectorAll(
                'input[name="complexity"]',
            );
            for (const level of levels) {
                if (level.checked) {
                    const gameLevel = Number(level.value);
                    renderGameComponent(gameLevel, appEl);
                }
            }
        };
    }
}
