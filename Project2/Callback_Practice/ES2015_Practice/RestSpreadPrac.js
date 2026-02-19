/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function trackSightings(...animals) {
    console.log("Sightings:");
    animals.forEach(animal => console.log(animal));
}

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
const protectedAreas = [...forestHabitats, ...savannahHabitats];

// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.

/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
const newRhinoStatus = {...rhinoStatus, population: 2, status: "Really Endangered"}
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
const lionGene = {...lionProfile, genetics: "Large"}
/*
 * Observations:
Both the lionProfile and the shallow copy lionGene share the same address for nested properties, 
however changing name, age, or species will allow the copy to have seprate addresses because they are not nested. 
 * TODO: Explain here.
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
const ecosystemHealthCopy = {...ecosystemHealth, foodSupply: {...ecosystemHealth.foodSupply, herbivores: "Scarce"}}
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
Both the ecosystemHealth and the shallow copy ecosystemHealthCopy share the same address for their nested property 
foodSupply, meaning updates to that will affect both objects.  WaterQuality is seperate and will have a different address.
 * TODO: Explain here.
 */

console.log(trackSightings("Elephant", "Giraffe", "Zebra"));
console.log(protectedAreas);
console.log(rhinoStatus);
console.log(newRhinoStatus);
console.log(lionProfile);
console.log(lionGene);
console.log(ecosystemHealth);
console.log(ecosystemHealthCopy);