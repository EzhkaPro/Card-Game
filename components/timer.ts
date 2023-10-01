export function initTimer(element: HTMLElement) {
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
