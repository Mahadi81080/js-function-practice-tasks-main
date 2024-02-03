
// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers){
    let sum = 0;
    for(i=0; i<numbers.length; i++){
        sum += numbers[i]
    }
    console.log(sum)
    const average = sum / numbers.length;
    console.log("Average:", average);
    return average;
}
make_avg([3,5,7,8,9,22]);

