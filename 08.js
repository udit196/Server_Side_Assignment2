function sortStringAlphabetically(str) {
    return str.split('').sort().join('');
}
const inputString = "hello world";
const sortedString = sortStringAlphabetically(inputString);
console.log("Sorted characters in the string:",
    sortedString);