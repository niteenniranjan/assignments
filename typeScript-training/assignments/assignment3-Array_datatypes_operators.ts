// Store the names of the students
let studentNames: string[] = ["Suresh", "Mahesh", "Naresh"];

// Store the original marks
let marks: number[] = [75, 80, 82];

// Create an array to store the updated marks
let updatedMarks: number[] = [0, 0, 0];

// Variable to store the total marks
let totalMarks: number = 0;

// Loop through each student's marks
for (let i = 0; i < marks.length; i++) {

    // Add 10 marks using the += assignment operator
    marks[i]! += 10;

    // Store the updated marks
    updatedMarks[i] = marks[i]!;

    // Add the updated marks to the total
    totalMarks += updatedMarks[i]!;
}

// Calculate the average marks
let averageMarks: number = totalMarks / marks.length;

// Display the updated marks
console.log("Updated Marks:");

for (let i = 0; i < studentNames.length; i++) {

    // Display student name and updated marks
    console.log(studentNames[i] + ": " + updatedMarks[i]);
}

// Display the average marks
console.log("Average Marks: " + averageMarks.toFixed(1));