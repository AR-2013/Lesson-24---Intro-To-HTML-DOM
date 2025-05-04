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
        message = 'Your password must be atleast 8 characters.';
        msgBox.style.color = 'red';
    } else if (age === '') {   
        message = 'Age must be between 12 and 50.';
        msgBox.style.color = 'red';
    }
    else {
        message = 'Login Succesful!';
        msgBox.style.color = 'green';
    }
}