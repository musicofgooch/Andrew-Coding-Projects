const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encryptLetter(letter, shift) {
    const index = alphabet.indexOf(letter.toLowerCase());
    if (index === -1) return letter; // safety check
    const newIndex = (index + shift) % 26;
    return alphabet[newIndex].toUpperCase();
}

function encryptMessage(message, shift) {
    let newMessage = "";

    for (let i = 0; i < message.length; i++) {
        const currentShift = shift + i;

        if (i === 3) {
            newMessage += "A"; // insert A after 3rd letter
        }
        if (i === 5) {
            newMessage += "E"; // insert E after 5th letter
        }

        newMessage += encryptLetter(message[i], currentShift);
    }

    return newMessage;
}

function decryptLetter(encryptedLetter, shift) {
    const index = alphabet.indexOf(encryptedLetter.toLowerCase());
    if (index === -1) return encryptedLetter;
    const newIndex = (index - shift + 26) % 26;
    console.log(index, newIndex, " <- newIndex");
    return alphabet[newIndex].toUpperCase();
}
function decryptMessage(message, shift) {
    const randMessage = message.slice(0, 3) + message.slice(4,6) + message.slice(7); // Removes the A and the E
    let oldMessage = "";

    for (let j = 0; j < randMessage.length; j++) {
        const currentShift = shift + j;
        oldMessage += decryptLetter(randMessage[j], currentShift);
    }

    return oldMessage;
}

let testMessage = "abcdef";
let encryptedMessage = encryptMessage(testMessage, 1);
let decryptedMessage = decryptMessage(encryptedMessage, 1);

console.log("Test Message: " + testMessage);
console.log("Encrypted Message: " + encryptedMessage);
console.log("Decrypted Message: " + decryptedMessage);