function convertCase(str) {
    return str.replace(/[a-z]/ig, function (match) {
        return match === match.toLowerCase() ?
            match.toUpperCase() : match.toLowerCase();
    });
}
const upperCase = "uppercase";
const lowerCase = "LOWERCASE";
console.log("Converted string:", convertCase(upperCase));
console.log("Converted string:", convertCase(lowerCase));