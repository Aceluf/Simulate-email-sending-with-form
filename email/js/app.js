// Variables
const sendBtn = document.getElementById('sendBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    resetBtn = document.getElementById('resetBtn'),
    sendEmailForm = document.getElementById('email-form');




// Event Listeners

eventListener();

function eventListener() {

    // App init
    document.addEventListener('DOMContentLoaded', appInit);

    // validate Fields
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);

    // send email
    sendEmailForm.addEventListener('submit', sendEmail);
    // reset form
    resetBtn.addEventListener('click', resetForm);
}




// Functions

// App Initializer

function appInit() {
    // disable send btn
    sendBtn.disabled = true;
}

// send email
function sendEmail(e) {
    e.preventDefault();
    
    // spinner
    const spinner = document.querySelector('#spinner');

    spinner.style.display = 'block';

    // create mail sent img
    const sentEmailImg = document.createElement('img');
    sentEmailImg.src = 'img/mail.gif';
    sentEmailImg.style.display = 'block';

    // spinner hide
    setTimeout(function () {
        spinner.style.display = 'none';

        // show mail img after
        sendEmailForm.querySelector('#loaders').appendChild(sentEmailImg);

        // rest the form after 5sec
        setTimeout(function () {
            sendEmailForm.reset();
            sentEmailImg.remove();
        }, 5000)
    }, 3000);
}

// function to validate fields

function validateField() {
    let errors;

    // validate fields length
    validateLength(this);

    // validate email
    if (this.type === 'email') {
        validateEmail(this);
    }

    // both validation will return error
    errors = document.querySelectorAll('.error');

    // enable send btn
    if (email.value !== '' && subject.value !== '' && message.value !== '') {
        if (errors.length === 0) {
            sendBtn.disabled = false;
        }
    }
}

// validate length

function validateLength(field) {
    if (field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

// validate email

function validateEmail(field) {
    let emailText = field.value;
    if (emailText.indexOf('@') !== -1) {
      field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

// reset form

function resetForm() {
    
    sendEmailForm.reset();
}