
// Check Prime Number
function checkPrime(n: number): void {
    const divisors: number[] = [];

    // Find all divisors
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisors.push(i);
        }
    }

    if (n === 1) {
        console.log(`Input: n=${n}`);
        console.log("Output: false");
        console.log(
            "Explanation: 1 has only 1 divisor (1 itself), " +
            "which is not sufficient to be considered a prime number."
        );
    } else {
        if (divisors.length === 2) {
            console.log(`Input: n=${n}`);
            console.log("Output: true");
            console.log(
                "Explanation: The number has exactly two divisors " +
                "(1 and itself), making it a prime number."
            );
        } else {
            console.log(`Input: n=${n}`);
            console.log("Output: false");
            console.log(
                "Explanation: The number has more than two divisors, " +
                "so it is not a prime number."
            );
        }
    }

    console.log("--------------------------");
}

// Array of numbers to test
const numbers: number[] = [1, 7, 25];

// Iterate through the array
numbers.forEach((n) => {
    checkPrime(n);
});
