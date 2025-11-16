const friend = "BRUTUS"
const shiftValue = 3;

const alpha = "abcdefghijklmnopqrstuvwxyz";

const firstLetter = friend[0];
const index = alpha.indexOf(friend[0].toLowerCase());

//Q1 The result of index will be 1 instead of 2 because the system starts counting from 0.

// const newIndex = (index + shiftValue);  // Initial attempt
// const shiftedLetter = alpha[newIndex].toUpperCase();

//Q2 The % operator helps to wrap around the alphabet when the new index exceeds the length of the alphabet string.

const alphaLength  = alpha.length;

const newIndex = (index + shiftValue)% alphaLength; //Updated to wrap around
const shiftedLetter = alpha[newIndex].toUpperCase();

const secretMessage = "EUXWXV";
const secretSnip = secretMessage.slice(0,3);