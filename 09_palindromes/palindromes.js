const palindromes = function (word) {
const reversedWord = `${word}`.split("").reverse().join("");
word = word.split("").join("");
if (`${word}`.toUpperCase == reversedWord.toUpperCase){
    /* return console.log(reversedWord + word) */
    return true;
} return false;
};

// Do not edit below this line
module.exports = palindromes;
