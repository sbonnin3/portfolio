document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validation côté client pour empêcher les caractères spéciaux
        const usernameRegex = /^[A-Za-z0-9]{5,}$/;
        const passwordRegex = /^.{8,}$/;

        if (!usernameRegex.test(username) || !passwordRegex.test(password)) {
            alert('Identifiant ou mot de passe incorrect');
            return;
        }

        // Simulate server-side verification for demonstration
        // En production, vérifiez les identifiants côté serveur
        if (username === 'admin' && password === 'password') {
            window.location.href = 'portfolio.html';
        } else {
            alert('Identifiant ou mot de passe incorrect');
        }
    });
});
