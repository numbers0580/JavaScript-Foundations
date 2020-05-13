// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/*  Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively.
    Create another value called name and give it the value of your own name.
*/
let principal = 200000;
let interestRate = 0.05;
let years = 30;
let name = "Peter Wood";




// 🏡 Task 1.5: Simple Math
/*  To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate. 

    Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12. 

    Create another variable called `periods` and give it the value of years*12.
*/
let monthlyInterestRate = interestRate / 12;
let periods = years * 12;



// 🏡 Task 2: Harder Math
/*  Create your calculator! Use the formula in the ReadMe to run calculations on your numbers. Save the final value into a variable called monthlyRate.

    Hint: while these calculations can be done in one line, it might be helpful to create a variable called "numerator" to calculate the numerator,
        and another called "denominator" to calculate the denominator 

    Hint #2: you'll need to use the `math` object for parts of this calculation!

    When your math is correct, monthlyRate will equal 1073.64
*/
let numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods);
let denominator = Math.pow((monthlyInterestRate), periods) - 1;
let monthlyRate = principal * numerator / denominator;


// 🏡 Task 3: Function
/*  Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"

    If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/
function mortgageCalculator() {
    let name = "Peter Wood";
    let principal = 200000;
    let interestRate = 0.05;
    let years = 30;

    let monthlyInterestRate = interestRate / 12;
    let periods = years * 12;

    let numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods);
    let denominator = Math.pow((1 + monthlyInterestRate), periods) - 1;
    let monthlyRate = principal * numerator / denominator;
    
    monthlyRate = Number(Math.round(monthlyRate+'e2')+'e-2');

    return name + ", your monthly rate is $" + monthlyRate;
}
console.log("Task 3 result below:");
console.log(mortgageCalculator());



// 🏡 Task 4: Arguments and Parameters
/*  Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.

    For example,
    mortgageCalculator(200000, 0.05, 30); <-- should return 1,073.64
*/
function mortgageCalculator2(p, i, n) {
    let name = "Peter Wood";

    let monthlyInterestRate = i / 12;
    let periods = n * 12;

    let numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods);
    let denominator = Math.pow((1 + monthlyInterestRate), periods) - 1;
    let monthlyRate = p * numerator / denominator;
    
    monthlyRate = Number(Math.round(monthlyRate+'e2')+'e-2');

    return name + ", your monthly rate is $" + monthlyRate;
}
console.log("Task 4 result below:");
console.log(mortgageCalculator2(200000, 0.05, 30));




// 🏡 Task 5: Conditionals
/*  Add another paramter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).

    Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660,
    interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate doesn't change.
*/
function mortgageCalculator3(principal, interestRate, years, creditScore) {
    let name = "Peter Wood";

    if(creditScore > 740) {
        interestRate -= 0.005;
    } else if(creditScore < 660) {
        interestRate += 0.005;
    }

    let monthlyInterestRate = interestRate / 12;
    let periods = years * 12;

    let numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods);
    let denominator = Math.pow((1 + monthlyInterestRate), periods) - 1;
    let monthlyRate = principal * numerator / denominator;
    
    monthlyRate = Number(Math.round(monthlyRate+'e2')+'e-2');

    return name + ", your monthly rate is $" + monthlyRate;
}
console.log("Task 5 result (750 score) below:");
console.log(mortgageCalculator3(200000, 0.05, 30, 750));
console.log("Task 5 result (650 score) below:");
console.log(mortgageCalculator3(200000, 0.05, 30, 650));



// 🏡 Task 6: Loops
/*  Write a new function called variableInterestRate. This function should be the same as mortgageCalculator,
    except it should console.log the monthly payment for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate.
    Complete these calculations using a for loop.

    For example, variableInterestRate(200000, 0.04, 30) should console.log:

    "{Name}, with an interest rate of 0.02, your monthly rate is $739"
    "{Name}, with an interest rate of 0.025, your monthly rate is $790"
    "{Name}, with an interest rate of 0.03, your monthly rate is $843"
    "{Name}, with an interest rate of 0.035, your monthly rate is $898"
    "{Name}, with an interest rate of 0.04, your monthly rate is $955"
    "{Name}, with an interest rate of 0.045, your monthly rate is $1013"
    "{Name}, with an interest rate of 0.05, your monthly rate is $1074"
    "{Name}, with an interest rate of 0.055, your monthly rate is $1136"
    "{Name}, with an interest rate of 0.06, your monthly rate is $1199"
*/
function variableInterestRate(principal, interestRate, years) {
    console.log("Task 6 results below:");
    let iRate = interestRate - 0.02;
    iRate = Number(Math.round(iRate+'e3')+'e-3');

    while(iRate <= (interestRate + 0.025)) {
        let name = "Peter Wood";
        let periods = years * 12;
        let monthlyInterestRate = iRate / 12;

        let numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods);
        let denominator = Math.pow((1 + monthlyInterestRate), periods) - 1;
        let monthlyRate = principal * numerator / denominator;

        monthlyRate = Number(Math.round(monthlyRate+'e2')+'e-2');

        console.log(name + ", with an interest rate of " + iRate + ", your monthly rate is $" + monthlyRate);

        iRate += 0.005;
        iRate = Number(Math.round(iRate+'e3')+'e-3');
    }

    return "";
}
console.log(variableInterestRate(200000, 0.04, 30));


// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/*  Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */


/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */


/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */


/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */

function mortgageNfees(principal, interestRate, years, propTax, insurance, hoaFees) {
    let name = "Peter Wood";
    let periods = years * 12;
    let monthlyInterest = interestRate / 12;

    let numerator = monthlyInterest * Math.pow((1 + monthlyInterest), periods);
    let denominator = Math.pow((1 + monthlyInterest), periods) - 1;
    let monthlyRate = principal * numerator / denominator;
    
    monthlyRate = Number(Math.round(monthlyRate+'e2')+'e-2');

    return name + ", your monthly rate is $" + monthlyRate + ". Monthly Property Taxes, Insurance, and HOA fees are $" + (propTax/12) + ", $" + (insurance/12) + ", $" + (hoaFees/12) + " totalling $" + (monthlyRate + (propTax/12) + (insurance/12) + (hoaFees/12));
    
}
console.log("Stretch: Added in Property Taxes of $1020/year, Homeowner's Insurance of $600/year, and HOA fees of $1500/year below.");
console.log(mortgageNfees(200000, 0.05, 30, 1020, 600, 1500));


function maxLoanCalculator(monthlyRate, interestRate, years) {
    let name = "Peter Wood";
    let periods = years * 12;
    //console.log("Months is " + periods);
    let monthlyInterest = interestRate / 12;
    //console.log("Monthly Interest is " + monthlyInterest);

    let numerator = Math.pow((1 + monthlyInterest), periods) - 1;
    //console.log("Numerator is " + numerator);
    let denominator = monthlyInterest * Math.pow((1 + monthlyInterest), periods);
    //console.log("Denominator is " + denominator);
    let maxLoanAmount = monthlyRate * numerator / denominator;
    //console.log("Unrounded Loan is " + maxLoanAmount);

    maxLoanAmount = Math.round(maxLoanAmount);
    //console.log("Rounded Loan is " + maxLoanAmount);

    return name + ", your maximum loan with a max monthly payment of $" + monthlyRate + ", and an APR of " + (interestRate * 100) + "% over " + years + " years is: $" + maxLoanAmount;
}
console.log("Stretch: Build a calculator that accepts monthly payment and interest rate and returns the maximum loan.");
console.log("Note: I would also need to know the length (years) of the loan to do this calculation, so I will make assumptions of 15, 20, and 30 years below.")
console.log("Stretch: Calculator: $1200/mo, 4.25% APR, 15 years");
console.log(maxLoanCalculator(1200, 0.0425, 15));
console.log("Stretch: Calculator: $1200/mo, 4.25% APR, 20 years");
console.log(maxLoanCalculator(1200, 0.0425, 20));
console.log("Stretch: Calculator: $1200/mo, 4.25% APR, 30 years");
console.log(maxLoanCalculator(1200, 0.0425, 30));