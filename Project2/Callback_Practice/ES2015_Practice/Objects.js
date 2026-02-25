/* Task 1: Compile Participant Details with Shorthand Property Names */
const name = "Andrew Gooch"
const age = 25;
const studyField = "Computer Science";

let participant = {
    name,
    age,
    studyField
};
console.log(`Participant: ${name}, Age: ${age}, Study Field: ${studyField}`);
const participantCopy = {
    ...participant,
    displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Field of Study: ${this.studyField}`);
    }
};

/*
const anotherParticipantCopy{
    ...participant,
    arrowDisplayInfo: () => {
        console.log(`Name: ${anotherParticipantCopy.name}, Age: ${anotherParticipantCopy.age}, Field of Study: ${anotherParticipantCopy.studyField}`);
    }
}

/*
 * Observations:
 * TODO: Explain here.
 */

function updateParticipantInfo(participant, key, value) {
    return {
        ...participant,
        [key]: value
    };
}

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.