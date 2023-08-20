let appEl = document.getElementById("app");

const renderApp = () => {
    const appHtml = `
    <form action="#" class="complexity-box">
        <h1 class="complexity-title">Выбери сложность</h1>
        <fieldset class="input-level">
            <label>
                <input type="radio" 
                name="complexity" 
                value="Легкий уровень - 6 карточек (3 пары)">
                <span class="level">1</span>
            </label>
            <label>
                <input type="radio" 
                name="complexity" 
                value="Средний уровень - 12 карточек (6 пар)">
                <span class="level">2</span>
            </label>
            <label>
                <input type="radio" 
                name="complexity" 
                value="Сложный уровень - 18 карточек (9 пар)">
                <span class="level">3</span>
            </label>
        </fieldset>
        <button class="start-button">Старт</button>
    </form>
    `;

    appEl.innerHTML = appHtml;

    appEl.querySelector(".start-button").addEventListener("click", () => {
        const levels = appEl.querySelectorAll('input[name="complexity"]');
        for (const level of levels) {
            if (level.checked) {
                console.log(level.value)
                const gameLevel = level.value;
                renderGameComponent(gameLevel);
            };
        };
    });
}
renderApp();


function renderGameComponent(level) {
    const appHtml = `
    <div class="game-play">
    <p>${level}</p>
    </div>`;
    appEl.innerHTML = appHtml;
}
