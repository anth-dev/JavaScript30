function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds + ' seconds');

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    console.log(minutes + ' minutes');
}

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');

setInterval(setDate, 1000);