let text = "Hello World";

// length → number of characters
console.log(text.length);        // 11

// toUpperCase → makes text capital
console.log(text.toUpperCase()); // HELLO WORLD

// toLowerCase → makes text small
console.log(text.toLowerCase()); // hello world

// includes → checks word exists or not
console.log(text.includes("World")); // true

// slice → takes part of string
console.log(text.slice(0, 5));   // Hello

// replace → changes word
console.log(text.replace("World", "JS")); // Hello JS

// split → breaks string into array
console.log(text.split(" "));    // ["Hello", "World"]
