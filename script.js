const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error (input, message) {
    input.className = 'form-control is-invalid'
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback'
}

function success (input) {
    input.className = 'form-control is-valid'
}

function checkEmail(input) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)) {
        success(input);
    } else {
        error(input, 'Lütfen geçerli bir email adresi giriniz!')
    }
};

function checkRequired(inputs) {
    inputs.forEach(input => {
        const firstLetter = input.id.charAt(0).toUpperCase();
        const otherLetters = input.id.slice(1);
        const wholeWord = firstLetter+otherLetters;

        if(input.value === '') {
            error(input, `${wholeWord} is required!`);
        } else {
            success(input);
        }
    });
}

function checkLength(input, min, max){
    const firstLetter = input.id.charAt(0).toUpperCase();
    const otherLetters = input.id.slice(1);
    const wholeWord = firstLetter+otherLetters;

    if(input.value.length < min) {
        error(input, `${wholeWord} en az ${min} karakter olmalıdır!`);
    } else if(input.value.length > max) {
        error(input, `${wholeWord} en fazla ${max} karakter olmalıdır!`);
    } else {
        success(input);
    }
}
function checkPasswords(input1, input2) {
    if(input1.value !== input2.value) {
        error(input2, 'Parolalar eşleştirilemedi!')
    }
}
function checkPhone(input) {
    var exp = /^\d{10}$/;
    if(!exp.test(input.value)) {
        error(input, 'Hatalı bir telefon numarası girdiniz!')
    } else {
        success(input)
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
  
    checkRequired([username,email,phone,password,repassword]);
    checkEmail(email);
    checkLength(username,7,15);
    checkLength(password,8,150);
    checkPasswords(password,repassword);
    checkPhone(phone);
})