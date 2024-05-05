function isNumber(value) {
    return typeof (value) === 'number' && !isNaN(value);
}
const value1 = 42;
const value2 = "hello";
console.log("Is value1 a number?", isNumber(value1));
console.log("Is value2 a number?", isNumber(value2));