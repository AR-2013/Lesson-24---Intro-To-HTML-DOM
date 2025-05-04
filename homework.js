function validate(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message').value;

    let message = '';

    if (email === ''){
        message = 'Please enter an email.';
        msgBox.style.color = 'red';
    } else if (pass === '') {
        message = 'Your password must be atleast 5 characters.';
        msgBox.style.color = 'red';
    } else if (age === '') {   
        message = 'Age has to be between 15 and 25.';
        msgBox.style.color = 'red';
    }
    else {
        message = 'Login Succesful!';
        msgBox.style.color = 'green';
    }
}