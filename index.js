import "./style.css";
import { renderCongratulation } from "./components/game-component.js";
import { renderApp } from "./components/render-component.js";

export function getCardsArray(level) {
    let cards = [
        "./assets/img/cards/6 бубны.png",
        "./assets/img/cards/6 крести.png",
        "./assets/img/cards/6 пики.png",
        "./assets/img/cards/6 черви.png",
        "./assets/img/cards/7 бубны.png",
        "./assets/img/cards/7 крести.png",
        "./assets/img/cards/7 пики.png",
        "./assets/img/cards/7 черви.png",
        "./assets/img/cards/8 бубны.png",
        "./assets/img/cards/8 крести.png",
        "./assets/img/cards/8 пики.png",
        "./assets/img/cards/8 черви.png",
        "./assets/img/cards/9 бубны.png",
        "./assets/img/cards/9 крести.png",
        "./assets/img/cards/9 пики.png",
        "./assets/img/cards/9 черви.png",
        "./assets/img/cards/10 бубны.png",
        "./assets/img/cards/10 крести.png",
        "./assets/img/cards/10 пики.png",
        "./assets/img/cards/10 черви.png",
        "./assets/img/cards/валет бубны.png",
        "./assets/img/cards/валет крести.png",
        "./assets/img/cards/валет пики.png",
        "./assets/img/cards/валет черви.png",
        "./assets/img/cards/дама бубны.png",
        "./assets/img/cards/дама крести.png",
        "./assets/img/cards/дама пики.png",
        "./assets/img/cards/дама черви.png",
        "./assets/img/cards/король бубны.png",
        "./assets/img/cards/король крести.png",
        "./assets/img/cards/король пики.png",
        "./assets/img/cards/король черви.png",
        "./assets/img/cards/туз бубны.png",
        "./assets/img/cards/туз крести.png",
        "./assets/img/cards/туз пики.png",
        "./assets/img/cards/туз черви.png",
    ];
    let numCards = 6;
    if (level === "easy-level") {
        numCards = 6;
    } else if (level === "medium-level") {
        numCards = 12;
    } else if (level === "hard-level") {
        numCards = 18;
    }
    console.log("Кол-во карт :", numCards);

    cards = cards.concat(cards.slice(0, level / 2));

    console.log(cards);
}

const appEl = document.getElementById("app");
let firstCard = null;
let secondCard = null;
let clickable = true;
if (appEl) renderApp(appEl);

export function gameLogic(cards) {
    if (appEl) {
        const cardsJackets = appEl.querySelectorAll(".jacket");
        cardsJackets.forEach((cardsJacket) => {
            setTimeout(
                () => cardsJacket.firstElementChild?.classList.add("secrete"),
                5000,
            );
            setTimeout(() => cardsJacket.classList.add("coup"), 5000);
        });

        setTimeout(() => {
            cardsJackets.forEach((cardsJacket, index) => {
                cardsJacket.addEventListener("click", () => {
                    if (
                        clickable === true &&
                        !cardsJacket.classList.contains("success")
                    ) {
                        setTimeout(
                            () => cardsJacket.classList.remove("coup"),
                            200,
                        );
                        setTimeout(
                            () =>
                                cardsJacket.firstElementChild?.classList.remove(
                                    "secrete",
                                ),
                            200,
                        );

                        if (firstCard === null) {
                            firstCard = index;
                        } else {
                            if (index !== firstCard) {
                                secondCard = index;
                                clickable = false;
                            }
                        }
                        if (
                            firstCard !== null &&
                            secondCard !== null &&
                            firstCard !== secondCard
                        ) {
                            if (cards[firstCard] === cards[secondCard]) {
                                cardsJackets[firstCard].classList.add(
                                    "success",
                                );
                                cardsJackets[secondCard].classList.add(
                                    "success",
                                );
                                firstCard = null;
                                secondCard = null;
                                clickable = true;
                            } else {
                                if (appEl) {
                                    const time = appEl.querySelector(".time");
                                    if (time)
                                        renderCongratulation(
                                            appEl,
                                            time.innerText,
                                        );
                                    firstCard = null;
                                    secondCard = null;
                                    clickable = true;
                                }
                            }
                            if (
                                Array.from(cardsJackets).every((cardsJacket) =>
                                    cardsJacket.classList.contains("success"),
                                )
                            ) {
                                if (appEl) {
                                    const time = appEl.querySelector(".time");
                                    if (time)
                                        renderCongratulation(
                                            appEl,
                                            time.innerText,
                                            "win",
                                        );
                                }
                            }
                        }
                    }
                });
            });
        }, 5000);
    }
}
