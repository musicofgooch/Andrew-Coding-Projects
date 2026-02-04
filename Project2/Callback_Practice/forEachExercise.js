/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    const result = [];
    arr.forEach(function(val){
        result.push(val * 2);
    });
    return result;
}
const ans1 = [doubleValues[1, 2, 3, 4, 6]]
console.log(ans1);
/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    const EVals = [];
    arr.forEach(function(val){
        if (val % 2 === 0){
            EVals.push(val);
        }
    });
    return EVals;
}

const ans2 = [onlyEvenValues[1, 2, 3, 4, 6]]
console.log(ans2);
/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    const firstAndLast = [];
    arr.forEach(function(val, i){
        if ((i === 0) || (i == arr.length -1)){
            firstAndLast.push(val);
        }
    });
}
const ans3 = [showFirstAndLast[1, 2, 3, 4, 6]]
console.log(ans3);/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    newArr = [];
    arr.forEach(function(val){
        val[key] = value;
        newArr.push(val);
    });
    return newArr;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){

    const vowels = 'aeiou';
    const vowelCounter = {};
    const lowerStr = str.toLowerCase();
    Array.from(lowerStr).forEach(function(char){
        if (vowels.indexOf(char) !== -1){
            if (vowelCounter[char]){
                vowelCounter[char]++;
            } else {
                vowelCounter[char] = 1;
            }
            console.log(vowelCounter);
        }
        return vowelCounter;
    });
}