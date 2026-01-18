const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
function encryptLetter(letter, shift){
    const index = alphabet.indexOf(letter.toLowerCase());
    let newIndex = (index + shift) % 26;
    return alphabet[newIndex].toUpperCase();
}
function encryptMessage(message, shift){
    let newMessage = "";
    for (let i=0; i < message.length; i++){
        newMessage += encryptLetter(message[i], shift);

    }
    return newMessage;
}
function decryptLetter(encryptedLetter, shift){
    const index = alphabet.indexOf(encryptedLetter.toLowerCase());
    let newIndex = (index - shift + 26) % 26;
    return alphabet[newIndex].toUpperCase();
}
function decryptMessage(message, shift){
    let newMessage = "";
    for (let i=0; i < message.length; i++){
        newMessage += decryptLetter(message[i], shift);
    }
    return newMessage;
}
console.log("Encrypted Message: " + encryptMessage(friend, shiftValue));
console.log("Decrypted Message: " + decryptMessage(encryptMessage(friend, shiftValue), shiftValue));

// Question: As long as the shift value is not changed before decryption, the original message will be returned.  
// Because the message is being shifted 3 forward, shifting 3 backward will return BRUTUS.