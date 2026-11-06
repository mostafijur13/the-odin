// comparison operators


// boolean values

alert(5 > 3); // true
alert(3==1); // false
alert(3!=1); // true

let result = 5>4 ; 
alert(result);

// string comoparison 

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

// comaparison of different types

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1
alert( '01' === 1 ); // false, string '01' is not the same type as the number 1


// A funny consequence
// It is possible that at the same time:

// Two values are equal.
// One of them is true as a boolean and the other one is false as a boolean.
// For example:

let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!
alert( a === b ); // false, because the types are different


// 1. The Boolean Checks (Truthy vs. Falsy Rules)

// When you explicitly convert something using Boolean(), JavaScript follows strict definitions for what is considered "empty" (falsy) or "filled" (truthy):
// • let a = 0; → The number 0 is officially a falsy value in JavaScript. Therefore, Boolean(a) outputs false.
// • let b = "0"; → This is a string containing a character. In JavaScript, any non-empty string is truthy, even if the text inside it is "0" or "false". Therefore, Boolean(b) outputs true.

// 2. The Equality Check (Comparison Rules)

// When you run alert(a == b);, you are asking JavaScript: "Are these two things loosely equal?"
// Because you used == (loose equality) to compare a number (0) and a string ("0"), JavaScript triggers its comparison rule: convert the string into a number first.
// 1. It takes the string "0" and converts it to the number 0.
// 2. It then checks if 0 == 0.
// 3. Since 0 equals 0, the final output is true.


// strict equality vs in equality

// ==========================================
// 1. STRICT EQUALITY (===)
// Both the VALUE and the TYPE must match perfectly.
// ==========================================

console.log("--- Strict Equality (===) ---");

// Case A: Identical value and type
console.log(10 === 10);       // true  (Both are numbers)

// Case B: Same value, but different types
console.log(10 === "10");     // false (One is a number, one is text)

// Case C: Completely different values
console.log(10 === 20);       // false 

// Case D: Booleans vs Numbers
console.log(true === 1);      // false (Different types)


// ==========================================
// 2. STRICT INEQUALITY (!==)
// Returns true if the items are different in ANY way (value OR type).
// ==========================================

console.log("\n--- Strict Inequality (!==) ---");

// Case A: Different types? Yes, so it returns true.
console.log(10 !== "10");     // true  (They are not the same type)

// Case B: Different values? Yes, so it returns true.
console.log(10 !== 20);       // true  (They are not the same value)

// Case C: Are they different? No, they are identical, so it returns false.
console.log(10 !== 10);       // false (They are exactly the same)







