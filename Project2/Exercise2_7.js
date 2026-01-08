const friend = "BRUTUS"
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let secretName = "";
for (let i = 0; i < friend.length; i++){
    const currentLetter = friend[i]
    const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
    const newIndex = (currentIndex + shiftValue) % alphabet.length; 
    secretName += alphabet[newIndex].toUpperCase();
    // Q1: Using a loop in this context or any context allows for a much faster time in computing the desired result.
    // Q2: Modulo operator allows us to return to the beginning of the alphabet after hitting the last index of said alphabet.
    
}