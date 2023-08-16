document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const emailValue = emailField.value;
    const passwordField = document.getElementById('user-password')
    const passwordValue = passwordField.value;
    console.log(emailValue, passwordValue);
    if (emailValue === "apusaha392@gmail.com" && passwordValue === "password123") {
        location.href = 'bank.html'
    } else {
        console.log('invalid user');
    }
})