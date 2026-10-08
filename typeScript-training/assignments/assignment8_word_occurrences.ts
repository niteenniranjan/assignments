// Assignment 2: Search for all occurrences of "Java"

let paragraph: string =
    "Java is a popular programming language. Java is used for web development, mobile applications, and more.";

let searchWord: string = "Java";

let count: number = 0;
let indexes: number[] = [];

// Start searching from index 0
let index: number = paragraph.indexOf(searchWord);

while (index !== -1) {

    // Increase occurrence count
    count++;

    // Store the index
    indexes.push(index);

    // Search for the next occurrence
    index = paragraph.indexOf(searchWord, index + searchWord.length);
}

// Print the result
console.log("Total number of occurrences: " + count);
console.log("Indexes of the word Java: " + indexes.join(", "));