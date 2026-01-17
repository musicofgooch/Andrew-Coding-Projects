//FIZZ BUZZ
function fizzBuzz(n){
    if (n > 100 || n < 1){
        console.log("Input must be between 1 and 100");
        return;
    }
    for(let i = 1; i <= n; ++i){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
        else if(i % 3 === 0){
            console.log("Fizz");
        }
        else if(i % 5 === 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
}

fizzBuzz(100);