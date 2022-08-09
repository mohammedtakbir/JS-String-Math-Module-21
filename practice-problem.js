// * ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 
// ? problem 1
/* const anArray = [34, 27, 44 , 12, 11];
function lowest(numbers){
    let lowest = numbers[0];
    for(let i=0; i<numbers.length; i++){
        let element = numbers[i];
        if(element < lowest){
            lowest = element;
        }
    }
    return lowest;
}
const printLowestNumbers = lowest(anArray);
console.log(printLowestNumbers); */

// * ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।  
// ? problem 2
// ? using if/else & parameter
/* function lowest(num1, num2, num3){
    if(num1 < num2 && num1 < num3){
        return 'num1 is smallest'
    }
    else if(num2 < num1 && num2 < num3){
        return 'num2 is smallest'
    }
    else{
        return 'num3 is smallest'
    }
}
const num1 = 5;
const num2 = 7;
const num3 = 6
const printLowestNumbers = lowest(num1, num2, num3);
console.log(printLowestNumbers); */

// ? using Math.min() function
/* function min(num1, num2, num3){
    const minNumber = Math.min(num1, num2, num3);
    return minNumber;
}
const num1 = 5;
const num2 = 7;
const num3 = 6
const printLowestNumbers = min(num1, num2, num3);
console.log('Minimum number is:', printLowestNumbers); */

// * ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। 
// ? problem 3
/* const numbers = [34, 45, 56, 67, 78, 89, 90]
function average(numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        let element = numbers[i]
        sum += element;
    }
    const averageNumber = sum / numbers.length;
    return averageNumber;
}
const printAverageNuber = average(numbers);
console.log(printAverageNuber); */

// * ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 
// ? problem 4
function rectangle(length, height){
    const area = length * height;
    return area;
}

const length = 6;
const height = 4;
const printArea = rectangle(length, height);
console.log(printArea);

// * ৫. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 
// ? problem 5
/* const array = [34, 29, 56, 37, 43, 65];
function largest(numbers){
    let largest = numbers[0];
    for(let i=0; i<numbers.length; i++){
        let element = numbers[i]
        if(element > largest){
            largest = element;
        }
    }
    let secondLargest = numbers[0];
    for(let i=0; i<numbers.length; i++){
        let element = numbers[i];
        if(element > secondLargest && element < largest){
            secondLargest = element;
        }
    }
    return secondLargest;
}
const largestNumber = largest(array);
console.log(largestNumber);
 */





