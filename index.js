import { renderGameComponent } from "./components/game-component.js";
import { renderApp } from "./components/render-component.js";

export const EASY_PAGE = "easy-page";
export const MEDIUM_PAGE = "medium-page";
export const HARD_PAGE = "hard-page";
export const FIRST_PAGE = "first-page";

export let page = FIRST_PAGE;

export const setPage = (newPage) => {
    page = newPage;
};

export const goToPage = (page) => {
    if ([EASY_PAGE, FIRST_PAGE, HARD_PAGE, MEDIUM_PAGE].includes(page)) {
        if (page === FIRST_PAGE) {
            gameLogic();
        }
        if (page === EASY_PAGE) {
            gameLogic();
        }
        if (page === MEDIUM_PAGE) {
            gameLogic();
        }
        if (page === HARD_PAGE) {
            gameLogic();
        }
    }
};

export const gameLogic = () => {
    const appEl = document.getElementById("app");
    if (page === EASY_PAGE) {
        return renderGameComponent("easy", appEl);
    }
    if (page === MEDIUM_PAGE) {
        return renderGameComponent("medium", appEl);
    }
    if (page === HARD_PAGE) {
        return renderGameComponent("hard", appEl);
    }
    if (page === FIRST_PAGE) {
        return renderApp(appEl);
    }
};
goToPage(page);
