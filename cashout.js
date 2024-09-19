
document.getElementById('btn-cash-out')
.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Cash out button clicked');

    // Get cash out amount
    const cashOut = document.getElementById('input-cash-out').value;
    const cashoutNumber = parseFloat(cashOut);

    // Get pin number
    const pinNumber = document.getElementById('cashout-pin-number').value;
    console.log(cashOut, pinNumber);

    // Verify pin number
    if (pinNumber === '1234') {
        // Get current balance
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        // Ensure the cashout amount is valid and less than or equal to the balance
        if (cashoutNumber > 0 && cashoutNumber <= balanceNumber) {
            // Reduce the balance
            const newBalance = balanceNumber - cashoutNumber;
            document.getElementById('account-balance').innerText = newBalance;
            console.log('Money is reducing');
        } else {
            alert('Insufficient balance or invalid amount');
        }
    } else {
        alert('Failed to cash out. Please try again later.');
    }
});
