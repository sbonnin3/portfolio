document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simuler une vérification côté serveur (à remplacer par une véritable vérification)
        if (username === 'UtilisateurPortfolio' && password === 'EhK/mjVXZa"462çjhd(r') {
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'portfolio.html';
        } else {
            alert('Identifiant ou mot de passe incorrect');
        }
    });
});