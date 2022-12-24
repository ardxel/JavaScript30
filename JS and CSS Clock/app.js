let arrows = document.querySelectorAll('.arrow');

let arrowHour = arrows[0];
let arrowMin = arrows[1];
let arrowSec = arrows[2];

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    arrowSec.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    arrowMin.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    arrowHour.style.transform = `rotate(${hourDegrees}deg)`;
}
setDate();

setInterval(setDate, 1000);
