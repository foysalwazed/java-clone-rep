// Add money to the account
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    // Step 2: Get the money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // Get the pin number
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(typeof pinNumberInput);

    // Step 3: Verify pin number
    if (pinNumberInput === '1234') {
        console.log('Adding money to your account');

        // Step 4: Get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(typeof balance);

        // Step 5: Add addMoneyInput to balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);

        // Ensure that the values are valid numbers
        if (!isNaN(addMoneyNumber) && !isNaN(balanceNumber)) {
            const newBalance = addMoneyNumber + balanceNumber;
            console.log(newBalance);

            // Step 6: Update the balance in the UI/DOM
            document.getElementById('account-balance').innerText = newBalance;
        } else {
            alert('Please enter valid numbers for adding money.');
        }

    } else {
        alert('Failed to add money! Please try again.');
    }
});
