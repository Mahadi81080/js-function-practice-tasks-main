// ### Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(bainaryString) {
  let count = 0;
  for (i = 0; i < bainaryString.length; i++){
    if(bainaryString[i]=== '0'){
        count++;
    }
  }
  return count;
}
const binaryString = "1010101010";
console.log("Number of zeros:", count_zero(binaryString));
