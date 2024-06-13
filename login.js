document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'SimonBONNIN' && password === 'Simon002') {
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'portfolio.html';
        } else {
            alert('Identifiant ou mot de passe incorrect');
        }
    });
});
