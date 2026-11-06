let massage = "hello";
massage= 18;


let n = 123;
n= 12.345;


console.log( Infinity);
// NaN is a error in JavaScript that stands for "Not-a-Number". It is a special value that indicates that a value is not a legal number. For example, if you try to perform a mathematical operation on a non-numeric value, you will get NaN as the result.


console.log(NaN+1);
console.log(NaN-1);


const BigInt = 1234567890123456789012345678901234567890n;


let str = 'hello';
let x = `can eembed another variable like this ${str} or numbr as well ${n}`;


let theif = "tamba ";
const takenmoney = 1000000;
console.log(`theif name is ${theif}  and he took ${takenmoney} from my house yesterday `);






// default doolean assinghment


let rainyornot = true ;

// but alternative methode 

let isgreater = 4>1 ;

console.log(isgreater);

// null 

let age = null ; 
console.log (age);


let age2 = 100;

// change the value to undefined
age2 = undefined;

console.log(age2); // "undefined"


// perpose of the above shit is


// 1. To Trigger Default Values 🚀

// This is the most common practical reason. In JavaScript, default values only trigger if a value is completely missing or is explicitly undefined. They do not trigger for null.
// • With Function Parameters:javascript
// function greet(user = "Guest") {
//   console.log("Hello, " + user);
// }

// greet(null);      // Output: Hello, null (Default ignored!)
// greet(undefined); // Output: Hello, Guest (Default triggered!)
// Use code with caution.
// • With Object Destructuring:
// If you have an object and want to reset a value so that the system falls back to a default setting later, you must use undefined.

// 2. To Mimic a "Never Touched" State

// Some external libraries or frameworks check if a variable has ever been used by looking for undefined.
// • If you set it to null, the library thinks: "The developer intentionally emptied this."
// • If you set it to undefined, the library thinks: "This data does not exist yet."
// Setting it back to undefined completely resets the timeline, making the variable look brand new.

// 3. Cleaning Up for Garbage Collection (Legacy Code)

// In older JavaScript engines, explicitly setting a huge variable or object to undefined was sometimes used to break references. This told the browser it was safe to clear that memory. Today, null is preferred for this, or simply letting the variable go out of scope.


// object and symbols 

// later on this series we will learn about objects and symbols in detail but for now we will just see the type of them

// use if typeof
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)



// decalring string 

const string = 'the revolution is here ';

console.log(string);

const badstring = string ;

console.log(badstring);

// Single quotes, double quotes, and backticks

const single = 'single quotes';
const double = "double quotes";
const backticks = `backticks`;

console.log(single);
console.log(double);
console.log(backticks);


// Embedding javascript 

const wife = 'sneha';
const message = `my wife name is ${wife} and i love her `;

console.log(message);

const massage2 = 'she is the most prittiest girl in the world and i love her so much ';

console.log(massage2);

const joined = `${message} ${massage2}`;

console.log(joined);


// concenation using + operator

const concatenated = message + " " + massage2;
console.log(concatenated);
// but best apply is 

const concatenated2 = `${message} ${massage2}`;
console.log(concatenated2);

// Including expressions in strings

const song ='fight the youth ';
const score = 9 ;
const higestscore = 10 ;
const output = `i like the song ${song} and i give it ${(score/higestscore)*100}% `;

console.log(output);

// multiple line strings

const multiplelines = `this is the first line
this is the second line 
this is the thired line`;

console.log(multiplelines);

// alter way of doing this is using \n

const multiplelines2 = 'one day i was fishing in the pont .\nthen i just notice i am drowning in the water \n then my eyes open and i was actually sleeping';

console.log(multiplelines2);
