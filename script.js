const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error (input) {
    input.className = 'form-control is-invalid'
}

function success (input) {
    input.className = 'form-control is-valid'
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(username.value === '') {
        error(username);
    } else {
        success(username);
    }
    if(email.value === '') {
        error(email);
    } else {
        success(email);
    }
    if(password.value === '') {
        error(password);
    } else {
        success(password);
    }
    if(repassword.value === '') {
        error(repassword);
    } else {
        success(repassword);
    }
})