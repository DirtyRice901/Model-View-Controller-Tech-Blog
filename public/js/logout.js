/////////////////// Logout function to send a logout request to the user API endpoint ////////////////////////////////////////////////////
const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    /////////////////// If successful, redirect the browser to the homepage //////////////////////////////////////////////////////////
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log out');
    }
};
/////////////////// Event listener for logout button ////////////////////////////////////////////////////////////////////////////////////
const logoutButton = document.querySelector('#logout');
logoutButton.addEventListener('click', logout);