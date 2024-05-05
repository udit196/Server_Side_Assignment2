function findAllIndexesOfWord(sentence, word) {
    let indexes = [];
    let index = sentence.indexOf(word);

    while (index !== -1) {
        indexes.push(index);
        index = sentence.indexOf(word, index + 1);
    }
    return indexes;
}

const sentence = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, Lorem suscipit eaque?";
const word = "Lorem";

const indexes = findAllIndexesOfWord(sentence,
    word);
console.log(`Indexes of "${word}" in the sentence:
${indexes}`);