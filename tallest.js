// ! alternative ways
/* let heights = [167, 190, 120, 165, 137];
function maxHeightInArray(numbers){
    let tallestGuy = Math.max(...numbers);
    return tallestGuy;
}
let tallest = maxHeightInArray(heights);
console.log(tallest); */

// * write a function to get the heighest number in an array
/* let heights = [167, 190, 120, 165, 137];
function heightsInArray(numbers){
    let largest = numbers[0];
    for(let i=0; i<numbers.length; i++){
        let element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
let tallest = heightsInArray(heights);
console.log(tallest); */

// * write a function to get the lowest number in an array
let heights = [167, 190, 120, 165, 137];
function lowestInArray(numbers){
    let i=0;
    let lowest = numbers[0];
    while(i<numbers.length){
        let element = numbers[i];
        if(element < lowest){
            lowest = element
        }
        i++
    }
    return lowest;
}
let lowestArray = lowestInArray(heights);
console.log(lowestArray);


