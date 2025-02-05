const palindromes = function (word) {
// const reversedWord = word.split("").reverse().join("");
 const normalizedWord = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
 const reversedWord = normalizedWord.split("").reverse().join("");
console.log(reversedWord);
if (normalizedWord === reversedWord){
    return true;

    }

/* if (word.toUpperCase() === reversedWord.toUpperCase()){
    console.log(reversedWord + " WWW " + `${word}`) */
 return false;
};

// Do not edit below this line
module.exports = palindromes;
