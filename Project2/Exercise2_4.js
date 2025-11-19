const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;
let location1 = "";
let location2 = "";
let location3 = "";
if (emblemClue1 === "Eagle"){
    location1 = "Forum";
}
else if (emblemClue1 === "Lion"){
    location1 = "Colosseum";
}
else{
    location1 = "Villa";
}
if (emblemClue2 === "Laurel" && location1 === "Forum"){
    location2 = " of Augustus";
}
else if  (emblemClue2 === "Grapes" && location1 === "Villa"){
    location2 = " of Pompey"
}
switch (emblemClue3){
    case 7: location3 = " North";
    break;
    case 3: location3 = " South";
    break;
    case 4: location3 = "  East";
    break;
    case 9:location3 = " West";
    break;
    default: location3 = "";
}
const finalLocation = location1 + location2 + location3;
console.log("The hidden artifact is located at the" + finalLocation);
//Question: Double equals (==) checks for value equality with type coercion, while triple equals (===) 
//checks for both value and type equality without type coercion.