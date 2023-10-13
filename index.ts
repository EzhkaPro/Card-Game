import "./style.css";
import { renderCongratulation } from "./components/game-component";
import { renderApp } from "./components/render-component";

const appEl = document.getElementById("app");
let firstCard: number | null = null;
let secondCard: number | null = null;
let clickable = true;

if (appEl) renderApp(appEl);

export function gameLogic(cards: string[]) {
    if (appEl) {
        const cardsJackets = appEl.querySelectorAll(".jacket");
        cardsJackets.forEach((cardsJacket) => {
            setTimeout(
                () => cardsJacket.firstElementChild?.classList.add("secret"),
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
                                    "secret",
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
                                    const time =
                                        appEl.querySelector<HTMLElement>(
                                            ".time",
                                        );
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
                                    const time =
                                        appEl.querySelector<HTMLElement>(
                                            ".time",
                                        );
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
