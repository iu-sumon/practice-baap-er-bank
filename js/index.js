document.getElementById('submit-btn').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const emailFieldValue = emailField.value;
    emailField.value = '';

    const passwordField = document.getElementById('password-field');
    const passwordFieldValue = passwordField.value;
    passwordField.value = '';

    if ((emailFieldValue == 'sumoniu@gmail.com') && (passwordFieldValue == 'sumon428')) {
        window.location.href = 'bank.html';
    }



})

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositInput = depositInput.value;
    //deposit
    const depositAmount = document.getElementById('deposit-amount');
    const previousDepositAmount = depositAmount.innerText;

    const totalDepositAmount = parseFloat(previousDepositAmount) + parseFloat(newDepositInput);

    depositAmount.innerText = totalDepositAmount;


    //update balance
    const balanceAmount = document.getElementById('balance-amount');
    const previousBalanceAmount = balanceAmount.innerText;

    const totalBalanceAmount = parseFloat(previousBalanceAmount) + parseFloat(newDepositInput);

    balanceAmount.innerText = totalBalanceAmount;

    depositInput.value = '';


})
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawInput = withdrawInput.value;

    //withdraw
    const withdrawAmount = document.getElementById('withdraw-amount');
    const previousWithdrawAmount = withdrawAmount.innerText;

    const totalWithdrawAmount = parseFloat(previousWithdrawAmount) + parseFloat(newWithdrawInput);

    withdrawAmount.innerText = totalWithdrawAmount;


    //update balance
    const balanceAmount = document.getElementById('balance-amount');
    const previousBalanceAmount = balanceAmount.innerText;

    const totalBalanceAmount = parseFloat(previousBalanceAmount) - parseFloat(newWithdrawInput);

    balanceAmount.innerText = totalBalanceAmount;

    withdrawInput.value = '';


})