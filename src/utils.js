const target = new Date("Aug 1, 2020 00:00:00").getTime();
const dayInMilliseconds = 1000 * 60 * 60 * 24;
const hoursInMilliseconds = 1000 * 60 * 60;
const minutesInMilliseconds = 1000 * 60;

let countDown = setInterval(() => {
    let current = new Date().getTime();
    let difference = target - current;

    if(difference < 0){
        clearInterval(countDown);
        document.getElementById("time").innerHTML = "Stay tuned";
        return;
    }

    let days = Math.floor(difference / dayInMilliseconds);
    let hours = Math.floor((difference % dayInMilliseconds) / hoursInMilliseconds);
    let minutes = Math.floor((difference % hoursInMilliseconds) / minutesInMilliseconds);
    let seconds = Math.floor((difference % minutesInMilliseconds) / 1000);


    document.getElementById("time").innerHTML = days + ":" + hours+":" + minutes +":"+seconds;

}, 1000)