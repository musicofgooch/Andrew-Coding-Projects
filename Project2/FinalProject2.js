const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encryptLetter(letter, shift){
    const index = alphabet.indexOf(letter.toLowerCase());
    let newIndex = (index + shift) % 26;
    return alphabet[newIndex].toUpperCase();
}
function encryptMessage(message, shift){
    let newMessage = "";
    for (let i=0; i < message.length; i++){
        shift += i// Each letter is shifted by its position in the message.
        if (i === 3){ //After every 3rd letter A is added and after every 7th letter E is added. 
            newMessage += "A";
        }
        
        newMessage += encryptLetter(message[i], shift);

}
    return newMessage;
}
function decryptLetter(encryptedLetter, shift){
    const index = alphabet.indexOf(encryptedLetter.toLowerCase());
    let newIndex = (index - shift + 208) % 26;
    return alphabet[newIndex].toUpperCase();
}
function decryptMessage(message, shift){
    randMessage = message.slice(0, 3) + message.slice(4);
    let oldMessage = "";
    for (let j=0; j < randMessage.length; j++){
        shift = shift + j; // Each letter is shifted by its position in the message.
        oldMessage += decryptLetter(randMessage[j], shift);
    }
    return oldMessage;
}
console.log("Encrypted Message: " + encryptMessage("Bobby", 1));
console.log("Decrypted Message: " + decryptMessage(encryptMessage("Bobby", 1), 1));