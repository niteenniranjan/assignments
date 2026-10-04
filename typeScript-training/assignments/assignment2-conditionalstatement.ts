let customerName: string = "John Doe";
let creditScore: number = 720;
let income: number = 55000.0;
let isEmployed: boolean = true;
let debtToIncomeRatio: number = 35.0;

function checkLoanEligibility(
    name: string,
    creditScore: number,
    income: number,
    isEmployed: boolean,
    dti: number
): void {

    if (creditScore > 750) {
        console.log(name + " is eligible for the loan.");
    }
    else if (creditScore >= 650 && creditScore <= 750) {

        if (income >= 50000) {

            if (isEmployed == true) {

                if (dti < 40) {
                    console.log(name + " is eligible for the loan.");
                }
                else {
                    console.log(name + " is not eligible for the loan.");
                }

            }
            else {
                console.log(name + " is not eligible for the loan.");
            }

        }
        else {
            console.log(name + " is not eligible for the loan.");
        }

    }
    else {
        console.log(name + " is not eligible for the loan.");
    }
}

checkLoanEligibility(
    customerName,
    creditScore,
    income,
    isEmployed,
    debtToIncomeRatio
);