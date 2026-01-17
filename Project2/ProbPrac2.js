//Letter Count
function letterCount(word){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    if (typeof word !== "string") {
        return "Error: Input must be a string.";
    }
    for (const letter of word) {
        if (!alphabet.includes(letter.toLowerCase())) {
            return "Error: Input must only contain letters.";
        }
    }
    let letterCounts = {}; 
    for (let letter of word) {
        letterLow = letter.toLowerCase();
        if (letterCounts[letterLow] !== undefined) {
            letterCounts[letterLow]++;
        }
        else {
            letterCounts[letterLow] = 1;
        }
    }
    return letterCounts;
}

console.log(letterCount("HelloSpongebob"));