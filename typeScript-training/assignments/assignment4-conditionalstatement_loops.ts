// Assignment: Conditional Statements & Loops
// Employee Table - Calculate Hike Percentage

// Employee data
let employees = [
    {
        name: "Alice Johnson",
        baseSalary: 75000.0,
        experience: 5.1,
        rating: 4.2
    },
    {
        name: "Bob Smith",
        baseSalary: 68000.0,
        experience: 3.2,
        rating: 3.8
    },
    {
        name: "Carol Davis",
        baseSalary: 82000.0,
        experience: 7.1,
        rating: 4.5
    },
    {
        name: "David Brown",
        baseSalary: 90000.0,
        experience: 10.2,
        rating: 2.5
    },
    {
        name: "Eva Green",
        baseSalary: 60000.0,
        experience: 2.4,
        rating: 3.5
    }
];

// Map to store Employee Name and Hike Percentage
let employeeHikeMap = new Map<string, number>();

// Loop through all employees
for (let employee of employees) {

    let variablePayPercentage: number;
    let bonus: number;
    let reward: number = 0;

    // Determine variable pay percentage and bonus based on rating
    if (employee.rating >= 4.0) {
        variablePayPercentage = 15.0;
        bonus = 1500;
    }
    else if (employee.rating >= 3.0 && employee.rating < 4.0) {
        variablePayPercentage = 10.0;
        bonus = 1200;
    }
    else {
        variablePayPercentage = 3.0;
        bonus = 300;
    }

    // Employees with 5 or more years of experience get extra reward
    if (employee.experience >= 5) {
        reward = 5000;
    }

    // Calculate Hike
    let hike =
        (employee.baseSalary * variablePayPercentage / 100)
        + bonus
        + reward;

    // Calculate Hike Percentage
    let hikePercentage = (hike / employee.baseSalary) * 100;

    // Store employee name and hike percentage in Map
    employeeHikeMap.set(employee.name, hikePercentage);
}

// Print Employee Name and Hike Percentage
console.log("Employee Hike Percentage");
console.log("========================");

for (let [employeeName, hikePercentage] of employeeHikeMap) {
    console.log(`${employeeName} : ${hikePercentage.toFixed(2)}%`);
}
