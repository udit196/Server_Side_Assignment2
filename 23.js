function splitStringIntoWords(str) {
    return str.split(" ").filter(word => word !== '');
}
const sentence = "Splitting the sentence.";
console.log(splitStringIntoWords(sentence));