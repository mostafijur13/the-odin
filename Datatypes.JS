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



// decalring string ( MDN tutorial on strings in JavaScript)

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

// including quotes in strings

const quote = 'she said "she loves me" and i said "i love you too" ';

const quote2 = "she said 'she loves me' and i said 'i love you too' ";

console.log(quote);
console.log(quote2);

const quote3 = 'I\'m a programmer and i love to code in JavaScript ';

console.log(quote3);

const quote4 = `She said "I'm not going in there!"`;
console.log(quote4);



// number vs string 

const random_numbr = 123;

const random_string = 'hi i am ';


console.log(random_numbr + random_string); // "123hi i am "
console.log(random_string + random_numbr); // "hi i am 123"


// converting numbers to strings

const num = 123;
const num_str = String(num); // "123"

console.log(num_str);

// converting strings to numbers
const stri = "123";
const str_num = Number(stri); // 123

console.log(str_num);



console.log(typeof num_str); // "string"
console.log(typeof str_num); // "number"

// what you can do with strings. A method is a bit of functionality built into the language or specific data types.
// ( the W3Schools lesson on string methods)

// String length
let text = 'hello world';
let length = text.length;
console.log(length); // 11

// String concat()
/**
 * WHY USE CONCAT() OVER STANDARD OPERATORS (+, ||, &):
 * 
 * 1. NULL/Missing Value Safety:
 *    - Standard: A single NULL or missing value can wipe out the entire result.
 *    - Concat: Safely skips missing values or treats them as empty text.
 * 
 * 2. Strict Type Enforcement:
 *    - Standard: The '+' operator can accidentally perform math instead of joining text (e.g., 5 + 5 = 10).
 *    - Concat: Explicitly forces data to be treated as text, avoiding math bugs (e.g., "55").
 * 
 * 3. Range & Bulk Processing:
 *    - Standard: Requires manual, tedious chaining for every single element (A + B + C + D).
 *    - Concat: Accepts entire ranges, arrays, or data tables all at once.
 * The detail Syntex of concat() is as follows
 * 
 * string.concat(string1, string2, ..., stringN)
 * 
 * 
 */


const text05 = 'hello';
const text06 = 'world';
const concatenatedtext = text05.concat(text06);
console.log(concatenatedtext); // "helloworld

//  it can also be used as + operator 

console.log('hello'.concat('','world'));

// String charAt()

let text2 = 'hello world';
let charat = text2.charAt(0);
console.log(charat); // "h"


// String at()

const text07 = "W3Schools";
let letter = text07.at(2);

console.log(letter); // "S"


/**
 * CHEATSHEET: charAt() vs. .at() in JavaScript
 * 
 * CORE DIFFERENCE: 
 * .at() supports negative indexing (counting from the end), whereas charAt() does not.
 * 
 * -------------------------------------------------------------------------
 * WHEN TO USE .charAt() (The Legacy Approach)
 * -------------------------------------------------------------------------
 * 1. Legacy Browser Support: Use it if your code must run on very old systems 
 *    without modern JavaScript (ES2022+) compilation tools.
 * 2. Strict Positive Indexes: Safe to use only when reading from left to right (0, 1, 2...).
 * 
 * ❌ Drawback: Passing a negative number like charAt(-1) breaks silently and returns an empty string "".
 * 
 * -------------------------------------------------------------------------
 * WHEN TO USE .at() (The Modern Approach - Recommended)
 * -------------------------------------------------------------------------
 * 1. Getting Elements from the End: Use negative numbers to grab items from the right side 
 *    without calculating length (e.g., .at(-1) gets the last character).
 * 2. Cleaner Code: Replaces the clunky "str.charAt(str.length - 1)" syntax.
 * 3. Consistent Coding Habits: .at() works exactly the same way on both Strings AND Arrays.
 * 
 * CODE QUICK-LOOK:
 * const word = "JavaScript";
 * 
 * word.charAt(0);    // 🟢 Returns "J"
 * word.at(0);        // 🟢 Returns "J"
 * 
 * word.charAt(-1);   // ❌ Returns "" (Useless)
 * word.at(-1);       // 🟢 Returns "t" (Clean & Easy)
 */


// String charCodeAt()
const text3 = 'Aello world';
let charcodeat = text3.charCodeAt(0);
console.log(charcodeat); // 65 (ASCII value of 'A')

// String codePointAt()

const test4 = 'fello world';
const codepointat = test4.codePointAt(0);
console.log(codepointat); // 102 (Unicode code point of 'f')


// String [ ]


// not properly understanded . 



let text08 = { name: "Alice", age: 25 };
let text09 = "name"; // The user chose to see the name

// console.log(text08(text09));   // ❌ "undefinied" (looks for a property literally named "name")
console.log(text08[text09]);  // 🟢 "Alice" (looks for the value stored in the variable)

let catalog = {
  "first name": "John",
  "product-id": 1024,
  "1stPlace": "Gold"
};

// console.log(catalog.first name); // ❌ Syntax Error!
console.log(catalog["first name"]); // 🟢 "John"


let fruits = ["Apple", "Banana", "Cherry"];
let word = "Hello";

console.log(fruits[1]); // 🟢 "Banana" (Indexes start at 0)
console.log(word[0]);   // 🟢 "H"

// Side note 

/**
 * DIRECT COMPARISON: {} vs [] IN JAVASCRIPT
 * 
 * --------------------------------------------------------------------------------------
 * FEATURE               | {} (Object Literal)                | [] (Array Literal)
 * --------------------------------------------------------------------------------------
 * Data Structure        | Key-Value Pairs (Dictionary / Map) | Ordered List (Collection)
 *                       |                                    |
 * How data is organized | Unordered. Items are looked up     | Ordered. Items are looked up
 *                       | by a named key (string).           | by a numerical index (position).
 *                       |                                    |
 * Best used for...      | Describing a single entity         | Storing a collection 
 *                       | with detailed traits.              | of similar things.
 *                       |                                    |
 * Real-world analogy    | A driver's license                 | A shopping list or a
 *                       | (Name: John, Age: 30, Eyes: Blue). | queue standing in line.
 * --------------------------------------------------------------------------------------
 * 
 * QUICK SYNTAX EXAMPLES:
 * 
 * const myObject = { name: "Alice", age: 25 }; // {} Needs keys/labels
 * const myArray  = ["Alice", "Bob", "Charlie"]; // [] Needs commas only
 */





//slice()

let text10 = "Hello,omi,sneha,world!";
let sliced = text10.slice(5,9);
console.log(sliced); // ",omi"


// let slicedleft = (text10-sliced);
// console.log(slicedleft); // "Hello,sneha,world!"(not possibel cause string cant be subtracted from another string)



// String substring()



let text11 = "JavaScript";

// Start (4) is bigger than End (0)
console.log(text11.slice(4, 0));     // ❌ Returns "" (Empty)
console.log(text11.substring(4, 0)); // 🟢 Returns "Java" (Swaps it to substring(0, 4))

let text12 = "JavaScript";

console.log(text12.slice(-6));      // 🟢 Returns "Script" (Counts 6 steps from the end)
console.log(text12.substring(-6));  // ⚠️ Returns "JavaScript" (Converts -6 into 0, reading from start)








// String substr()
// String toUpperCase()
// String toLowerCase()
// String isWellFormed()
// String toWellFormed()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String repeat()
// String replace()
// String replaceAll()
// String split()


