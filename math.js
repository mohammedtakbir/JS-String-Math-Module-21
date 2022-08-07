// * Math.pow()
/* const result = Math.pow(3, 5);
console.log(result); */

// * Math.abs
/* const num1 = 25;
const num2 = 40;
const gap =Math.abs(num1 - num2);
if(gap <5){
    console.log('can be friends');
}
else{
    console.log("can't be friends");
} */

// * Math.round()
const number = 2.4;
const fullNumber = Math.round(number);
// console.log(fullNumber);

// * Math.Ceil
const result2 = Math.ceil(2.00000000000001);
// console.log(result2);

// * Math.floor
const result3 = Math.floor(2.999999999999999);
// console.log(result3);

// * random
// console.log(Math.random());
for(let i=0; i<5; i++){
    let random =Math.round(Math.random()*10);
    console.log(random);
}
