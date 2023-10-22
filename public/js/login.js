/////////////////// Handler function for login form submission ////////////////////////////////////////////////////////////////////////////
const loginFormHandler = async (event) => {
    event.preventDefault();
    /////////////////// Collect values of the username and password input /////////////////////////////////////////////////////////////////
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    /////////////////// If both fields have content, send a POST request to the API endpoint /////////////////////////////////////////////
    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        /////////////////// If successful, redirect the browser to the homepage //////////////////////////////////////////////////////////
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in');
        }
    }
};

/////////////////// Event listener for login form submission ////////////////////////////////////////////////////////////////////////////
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', loginFormHandler);
