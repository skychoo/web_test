const clock = document.querySelector("h2#clock");
//clock.innerText = "CLOCK";
function fn_getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;

}
fn_getClock();
setInterval(fn_getClock,1000);