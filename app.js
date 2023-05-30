
// Function to calculate the monthly payment
function calculateMonthlyPayment(loanAmount, interestRate, loanTenure) {
  const monthlyInterestRate = interestRate / 100 / 12;
  const totalPayments = loanTenure * 12;
  const discountFactor = (Math.pow(1 + monthlyInterestRate, totalPayments) - 1) / (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments));
  return loanAmount / discountFactor;
}

// Function to calculate the total interest paid
function calculateTotalInterest(loanAmount, monthlyPayment, loanTenure) {
  const totalPayments = loanTenure * 12;
  return (monthlyPayment * totalPayments) - loanAmount;
}

// Function to update the monthly payment, monthly interest paid, and total interest paid
function updateResults() {
  const loanAmountInput = document.getElementById('loan-amount');
  const interestRateInput = document.getElementById('interest-rate');
  const loanTenureInput = document.getElementById('loan-tenure');
  const monthlyPaymentInput = document.getElementById('monthly-payment');
  const monthlyInterestInput = document.getElementById('monthly-interest');
  const totalInterestInput = document.getElementById('total-interest');

  const loanAmount = parseFloat(loanAmountInput.value);
  const interestRate = parseFloat(interestRateInput.value);
  const loanTenure = parseFloat(loanTenureInput.value);

  if (!isNaN(loanAmount) && !isNaN(interestRate) && !isNaN(loanTenure)) {
    const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTenure);
    const totalInterest = calculateTotalInterest(loanAmount, monthlyPayment, loanTenure);

    monthlyPaymentInput.value = monthlyPayment.toFixed(2);
    monthlyInterestInput.value = (monthlyPayment - (loanAmount / (loanTenure * 12))).toFixed(2);
    totalInterestInput.value = totalInterest.toFixed(2);
  } else {
    monthlyPaymentInput.value = '';
    monthlyInterestInput.value = '';
    totalInterestInput.value = '';
  }
}

// Event listener for form submission
const loanForm = document.getElementById('loan-form');
loanForm.addEventListener('submit', function (e) {
  e.preventDefault();
  updateResults();
});
