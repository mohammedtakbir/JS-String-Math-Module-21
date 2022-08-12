// * use temporery variable to swap values 
let first = 5;
let second = 7;
// console.log(first, second);
// ! this is wrong approach
// first = second;
// second = first;
// * approach 1
let temp = first;
first = second;
second = temp;
console.log(first, second);

// * appraoch 2 destructuring
/* [ first, second ] = [ second, first ];
console.log(first, second); */