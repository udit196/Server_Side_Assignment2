function timeConvert(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${minutes} minutes = ${hours} hour(s) and
    ${remainingMinutes} minute(s).`;
}
console.log(timeConvert(200));