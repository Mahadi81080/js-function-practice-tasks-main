// ### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.


function oddEven(numbers){
    if(numbers%2===0){
        let result = numbers / 2;
        console.log(result)
    }else{
        let result = numbers * 2;
        console.log(result)
    }
    return numbers;
}

oddEven(16);
oddEven(7);