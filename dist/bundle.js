/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./components/game-component.js":
/*!**************************************!*\
  !*** ./components/game-component.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderCongratulation: () => (/* binding */ renderCongratulation),
/* harmony export */   renderGameComponent: () => (/* binding */ renderGameComponent)
/* harmony export */ });
/* harmony import */ var _render_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-component.js */ "./components/render-component.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "./index.js");
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer.js */ "./components/timer.js");




function renderGameComponent(level, appEl) {
    const cards = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.getCardsArray)(level);
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
    if (timer) (0,_timer_js__WEBPACK_IMPORTED_MODULE_2__.initTimer)(timer);

    const restart = appEl.querySelector(".restart");
    if (restart)
        restart.onclick = () => {
            (0,_render_component_js__WEBPACK_IMPORTED_MODULE_0__.renderApp)(appEl);
        };
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.gameLogic)(cards);
}

function renderCongratulation(appEl, time, win) {
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
            (0,_render_component_js__WEBPACK_IMPORTED_MODULE_0__.renderApp)(appEl);
        };
}


/***/ }),

/***/ "./components/render-component.js":
/*!****************************************!*\
  !*** ./components/render-component.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderApp: () => (/* binding */ renderApp)
/* harmony export */ });
/* harmony import */ var _game_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-component.js */ "./components/game-component.js");


let appEl = document.getElementById("app");

const renderApp = () => {
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
                    (0,_game_component_js__WEBPACK_IMPORTED_MODULE_0__.renderGameComponent)(appEl, gameLevel);
                }
            }
        };
    }
};


/***/ }),

/***/ "./components/timer.js":
/*!*****************************!*\
  !*** ./components/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initTimer: () => (/* binding */ initTimer)
/* harmony export */ });
function initTimer(element) {
    let minutes = 0;
    let seconds = 0;
    setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            minutes = 0;
        }
        element.innerText = `${minutes < 10 ? "0" + minutes : minutes}.${
            seconds < 10 ? "0" + seconds : seconds
        }`;
    }, 1000);
}


/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameLogic: () => (/* binding */ gameLogic),
/* harmony export */   getCardsArray: () => (/* binding */ getCardsArray)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_game_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/game-component.js */ "./components/game-component.js");
/* harmony import */ var _components_render_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/render-component.js */ "./components/render-component.js");




function getCardsArray(level) {
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
if (appEl) (0,_components_render_component_js__WEBPACK_IMPORTED_MODULE_2__.renderApp)(appEl);

function gameLogic(cards) {
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
                                        (0,_components_game_component_js__WEBPACK_IMPORTED_MODULE_1__.renderCongratulation)(
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
                                        (0,_components_game_component_js__WEBPACK_IMPORTED_MODULE_1__.renderCongratulation)(
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


/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> * {\n|     margin: 0;\n|     padding: 0;");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map