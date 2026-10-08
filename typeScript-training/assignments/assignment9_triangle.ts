// Assignment 3: Print * in triangle pattern

let rows: number = 5;

// Outer loop controls the number of rows
for (let i = 1; i <= rows; i++) {

    let pattern: string = "";

    // Inner loop prints * for each row
    for (let j = 1; j <= i; j++) {
        pattern = pattern + "*";
    }

    // Print the current row
    console.log(pattern);
}