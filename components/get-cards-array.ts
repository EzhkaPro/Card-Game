import * as _ from "lodash";

export function getCardsArray(complex: number) {
    const cards: string[] = [
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
    const shuffledCards = _.shuffle(cards);
    const slicedArray = shuffledCards.slice(0, complex / 2);
    const duplicatedArray = _.concat(slicedArray, slicedArray);
    return _.shuffle(duplicatedArray);
}
