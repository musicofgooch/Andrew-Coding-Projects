const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encryptLetter(letter, shift){
    const index = alphabet.indexOf(letter.toLowerCase());
    if (index === -1){
        return letter;
    }
    let newIndex = (index + shift) % 26;
    return alphabet[newIndex].toUpperCase();
}
function encryptMessage(message, shift){
    let newMessage = "";
    for (let i=0; i < message.length; i++){
        let newShift = shift + i // Each letter is shifted by its position in the message.
        if (i === 3){ // After the 3rd letter A is added.
            newMessage += "A";
        }
        if (i === 5){ // After the 5th letter E is added.
            newMessage += "E";
        }
        
        newMessage += encryptLetter(message[i], newShift);

}
    return newMessage;
}
function decryptLetter(eLetter, shiftValue){
    console.log(eLetter, " <- encryptedLetter");
    const index = alphabet.indexOf(eLetter.toLowerCase());
    if (index === -1){
        return eLetter;
    }
    const newIndex = (index - shiftValue + 26 ) % 26;
    console.log(index, newIndex, " <- newIndex"); 
    return alphabet[newIndex].toUpperCase();
}
function decryptMessage(message, shift){
    let randMessage = message.slice(0, 3) + message.slice(4,6) + message.slice(7); // Removes the A and the E
console.log(randMessage, " <- randMessage");   
    let oldMessage = "";
    for (let j=0; j < randMessage.length; j++){
        let currShift = shift + j; // Each letter is shifted by its position in the message.
        oldMessage += decryptLetter(randMessage[j], currShift);
    }
    return oldMessage;
}
let testMessage = "abcdefghi"
let encryptedMessage = encryptMessage(testMessage, 1);
let decryptedMessage = decryptMessage(encryptedMessage, 1);
console.log("Test Message: " + testMessage);
console.log("Encrypted Message: " + encryptedMessage);
console.log("Decrypted Message: " + decryptedMessage);