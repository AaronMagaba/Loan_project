// Function to calculate monthly installment
function calculateInstallment(loanAmount, annualRate, years) {
    let monthlyRate = annualRate / 12 / 100; // Convert % to decimal monthly rate
    let months = years * 12;

    // Formula for EMI (Equated Monthly Installment)
    let emi = loanAmount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -months));
    return emi.toFixed(2);
}

// Function to simulate repayments month by month
function simulateRepayment(loanAmount, annualRate, years) {
    let emi = calculateInstallment(loanAmount, annualRate, years);
    emi = parseFloat(emi); // Convert back to number

    let balance = loanAmount;
    let month = 1;

    console.log("Loan Amount: " + loanAmount);
    console.log("Annual Interest Rate: " + annualRate + "%");
    console.log("Loan Duration: " + years + " years");
    console.log("Monthly Installment: " + emi + "\n");

    // Loop through each month until loan is paid
    while (balance > 0) {
        balance -= emi; // Deduct installment

        // Condition to check last payment
        if (balance <= 0) {
            console.log("Month " + month + ": Final payment made. Loan fully repaid! ✅\n");
            balance = 0;
        } else {
            console.log("Month " + month + ": Paid " + emi + " | Remaining Balance: " + balance.toFixed(2));
        }
        month++;
    }

    console.log("🎉 Congratulations! Your loan is cleared in " + (month - 1) + " months.");
}

// Run Example
simulateRepayment(500000, 12, 2); // Loan: 500,000 at 12% for 2 years

console.log("The End");
