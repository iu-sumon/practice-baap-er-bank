document.getElementById('submit-btn').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const emailFieldValue = emailField.value;
    emailField.value = '';

    const passwordField = document.getElementById('password-field');
    const passwordFieldValue = passwordField.value;
    passwordField.value = '';

    if(emailFieldValue=='' && passwordFieldValue=='')
    {
        alert('invaild');
     
    }
    
    if ((emailFieldValue == 'sumoniu@gmail.com') && (passwordFieldValue == 'sumon428')) {
        window.location.href = 'bank.html';
    }



})