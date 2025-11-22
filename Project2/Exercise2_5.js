const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];
guests.unshift("BRUTUS"); 
//Q1 You can check that "BRUTUS" has been added to the beginning of the array by logging the array to the console
// or more specifically checking the first element with guests[0].
guests.push("AUGUSTUS", "LUCIA");
const spartacusIndex = guests.indexOf("SPARTACUS");
//Q2 Since "SPARTACUS" is not in the array, indexOf will return -1.
const removedGuest = guests.indexOf("CASSIUS");
guests.splice(removedGuest, 1);
const specialGuests = guests.slice(0, 3);
const honoredGuest = guests[0];
const normalGuests = guests.slice(1);
normalGuests.sort();
const finalGuestList = honoredGuest.concat(normalGuests);
console.log("Final Guest List:", finalGuestList);
