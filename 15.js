function updateClock() {
    const now = new Date();
    console.log(`${(now.getHours()).toFixed(0)}:${now.getMinutes()}:${now.getSeconds()}`);
}
setInterval(updateClock, 1000);