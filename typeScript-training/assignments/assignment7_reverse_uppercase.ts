// Assignment 1: String Operations

let sentence: string = "Java programming is fun and challenging";

// Split the sentence into words
let words: string[] = sentence.split(" ");

// 1. Count the total number of words
console.log("Total number of words: " + words.length);

// 2. Print the sentence words in reverse order
let reverseWords: string[] = words.reverse();

console.log("Words in reverse order: " + reverseWords.join(" "));

// 3. Convert the first character of each word to uppercase
let originalWords: string[] = sentence.split(" ");

let uppercaseSentence: string = "";

for (let word of originalWords) {
    let newWord: string = word.charAt(0).toUpperCase() + word.slice(1);

    uppercaseSentence = uppercaseSentence + newWord + " ";
}

console.log("Original sentence with first character uppercase:");
console.log(uppercaseSentence.trim());