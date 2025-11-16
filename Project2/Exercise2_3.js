const randomDecimal = Math.random();
const range = 33 - 3 + 1;
//Q1 We add 1 to the range to move it from 0 to 30, to 1 to 31
const randomInRange = randomDecimal * range; 
//Q2 Multiplying the random decimal (which is from 0 to 1) by the range scales the decimal to the desired range of values.
const randomInt = Math.floor(randomInRange); 
//Q3 Math.floor is the better option to ensure each number is rounded down instead of rounding up or down making it more accurate
const shiftValue = randomInt + 3; 
//Q4 adding 3 shifts the range from 0-30 to 3-33, which is the desired range for the shift value.