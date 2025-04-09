import { 
    addTwoNumbers,
    substractTwoNumbers,
    timesTwoNumbers,
    divideTwoNumbers
} from "../helpers/math-helpers";

let number1:number= 35;
let number2:number= 5;


let total1:number = addTwoNumbers(number1,number2);
let total2:number = substractTwoNumbers(number1,number2);
let total3:number = timesTwoNumbers(number1,number2);
let total4:number = divideTwoNumbers(number1,number2);

console.log('Total1 add:', total1);
console.log('Total2 sub:',total2);
console.log('Total3 tim:', total3);
console.log('Total4 div:', total4);



// let firstName = 'Juan';

// greet(firstName);
