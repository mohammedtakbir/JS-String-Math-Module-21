// * toUpperCase() & toLowerCase()
/* const userName = 'mohammedTakbir';
const userInput = 'mohammedTaKbir';
if(userName.toLowerCase() === userInput.toLowerCase()){
    console.log('valid user')
}
else{
    console.log('invalid user')
}
console.log(userName.toLocaleUpperCase());

// * fibo
const fibo = [0, 1];
for(let i=2; i <= 20; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
    console.log(fibo[i])
}
console.log(fibo)
 */
// * includes()
/* const lyrics = 'tumi bondhu kala paKhi ami jeno kiiiii.bosonto kale tomay bolte parini.shada shada kala kala';
const age = [23, 44, 34, 56, 18, 41]
console.log(age.includes(44)); */

// * IndexOf()
/* const lyrics = 'tumi bondhu kala paKhi ami jeno kiiiii.bosonto kale tomay bolte parini.shada shada kala kala';
if(lyrics.indexOf('paKhi') !== -1){
    console.log('exist')
}
else{
    console.log("dosen't exist")
} */

// * stratsWith() & endsWith()
/* const lyrics = 'tumi bondhu kala paKhi ami jeno kiiiii.bosonto kale tomay bolte parini.shada shada kala kala';
console.log(lyrics.startsWith('tumi'));
console.log(lyrics.endsWith('Kala')); */

// * split() & join()
/* const lyrics = 'tumi bondhu kala paKhi ami jeno kiiiii.bosonto kale tomay bolte parini.shada shada kala kala';
console.log(lyrics);
console.log(lyrics.split('.')); */

// ? join
/* const line =[
    'tumi bondhu kala paKhi ami jeno ki',
    'bosontokale tomay bolte parini',
    'sada sada kala'
  ]
  console.log(line);
  console.log(line.join('. ')) */

// * slice()
/* const lyrics = 'tumi bondhu kala paKhi ami jeno kiiiii.bosonto kale tomay bolte parini.shada shada kala kala';
const lyricsSlice = lyrics.slice(5, 8);
console.log(lyricsSlice); */

// * Math.abs()
/* let num1 = 25;
let num2 = 40;
let gap =Math.abs(num1 - num2);
if(gap < 5){
    console.log('be friend');
}
else{
    console.log('stay away');
} */

// * Math.pow()
// console.log(Math.pow(5, 3));

// * Exponentiation operator
// console.log(5 ** 3);

// * Math.max() & Math.min()

// ? for array use ...
/* const number = [5, 9, 4];
console.log(Math.max(...number)); */

// * write a function to get the heighest number in an array
// ? approach one
/* let heights = [167, 190, 120, 165, 137];
let heighestNumber = Math.max(...heights);
console.log(heighestNumber); */

// ? approach two
/* let heights = [167, 190, 120, 165, 137];
function findHeighestNumber(numbers){
    let heighest = numbers[0];
    for(let i=0; i<numbers.length; i++){
        let element = numbers[i];
        if(element > heighest){
            heighest = element;
        }
    }
    return heighest;
}
let printHeighestNumber = findHeighestNumber(heights);
console.log(printHeighestNumber); */

// * write a function to get the lowest number in an array
/* let heights = [167, 190, 120, 165, 137, 110];
function lowestNumber(numbers) {
    let lowest = numbers[0];
    let i = 0;
    while (i < numbers.length) {
        let element = numbers[i];
        if (element < lowest) {
            lowest = element;
        }
        i++
    }

    return lowest;
}
let printLowestNumbers = lowestNumber(heights);
console.log(printLowestNumbers); */

// * reverse the character
/* function reverse(text){
    let reverse = '';
    for(i = text.length - 1; i>=0; i--){
        let element = text[i];
        reverse += element;
    }
    return reverse
}
const myString = 'i am a good person';
const printReverseCharacters = reverse(myString);
console.log(printReverseCharacters); */

// * reverse the words
/* function reverseWords(text){
    let words = text.split(' ');
    let i = words.length - 1;
    let reverse = [];
    while(i >=0){
        let element =words[i];
        // reverse = reverse + element;
        reverse.push(element)
        i--;
    }
    // let WordsJoin = reverse.join(' ');
    // return WordsJoin;
    return reverse;
}
const myString = 'i am a good person';
let printReverseWords = reverseWords(myString);
console.log(printReverseWords); */


// * temp
/* let first = 5;
let second = 7;
console.log(first, second);
let temp = first
first = second
second = temp
console.log(first, second); */

