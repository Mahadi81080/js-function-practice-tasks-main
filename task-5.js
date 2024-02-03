// ### Task-5 
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`

function odd_even(numbers){
    if(numbers%2===0){
        return 'Even';
    }else{
        return 'odd';
    }
}

console.log(odd_even(3));
console.log(odd_even(12));