document.addEventListener('DOMContentLoaded', function() {
    var showPasswordCheckbox = document.querySelector('#show-password');
    var passwordInput = document.querySelector('#password');

    showPasswordCheckbox.addEventListener('change', function() {
        passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
    });
});