/* const text = 'i am a good person';
console.log(text.length); */

// * reverse the character 
/* function reverseString(text){
    let reverse = '';
    for(let i = text.length - 1; i >=0; i--){
        let element = text[i];
        reverse = reverse + element;
        // console.log(element,  reverse);
    }
    return reverse;
}
const myString = 'i am a good person';
const reversed = reverseString(myString);
console.log('reverseed output:', reversed); */

// * reverse words
function reversWord(text){
    let result = [];
    let words = text.split(' ');
    for(i = words.length - 1; i >= 0; i--){
        let element = words[i];
        result.push(element);
    }
    console.log(result);
    const reversed = result.join(' ');
    return reversed;
}


let myText = 'i am a good person';
let reversed = reversWord(myText);
console.log(reversed);
