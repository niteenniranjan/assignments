// Assignment-4: Bank Transactions 
// // Store all transactions in an array 
let transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];
// Variables to store counts and amounts 
let creditCount: number = 0;
let debitCount: number = 0;
let totalCredit: number = 0;
let totalDebit: number = 0;
let suspiciousCount: number = 0;
// Process each transaction using for loop 
for (let transaction of transactions) {
    // Check for Credit Transaction 
    if (transaction > 0) {
        creditCount++;
        totalCredit += transaction;
    }
    // Check for Debit Transaction 
    else if (transaction < 0) {
        debitCount++;
        //Convert negative value to positive
        totalDebit += -transaction;
    }
    //Check for Suspicious Transaction
    if (transaction > 10000 || transaction < -10000) {
        if
            (transaction > 0) {
            console.log(`Suspicious Credit Transaction with Amount:${transaction}`);
        }
        else {
            console.log(
                `Suspicious Debit Transaction with Amount: ${transaction}`);
        }
        suspiciousCount++;
    }
}
//Calculate remaining balance
let
    remainingAmount:
        number = totalCredit
        -
        totalDebit;
//Display the results
console.log("------------------------------------------");
console.log(" BANK TRANSACTION SUMMARY");
console.log("------------------------------------------");
console.log(`Total Credit Transactions: ${creditCount}`); 
console.log(`Total Debit Transactions: ${debitCount}`); 
console.log(`Total Amount Credited: ${totalCredit}`); 
console.log(`Total Amount Debited: ${totalDebit}`); 
console.log(`Total Amount Remaining: ${remainingAmount}`); 
console.log(`Total Suspicious Transactions: ${suspiciousCount}`); 
console.log("------------------------------------------");