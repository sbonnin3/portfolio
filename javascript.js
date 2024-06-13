document.addEventListener('DOMContentLoaded', () => {
    const images = ['./images/Image1.jpg', './images/Image2.jpg', './images/Image3.jpg']; // Liste des images
    const carouselInner = document.querySelector('.carousel-inner');

    // Effacer le contenu initial
    carouselInner.innerHTML = '';

    // Ajouter les images dynamiquement
    images.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = `Image ${index + 1}`;
        imgElement.onerror = () => console.error(`Failed to load image: ${image}`); // Ajoutez une gestion des erreurs
        carouselInner.appendChild(imgElement);
    });

    // Vérifiez le contenu du carrousel après l'ajout des images
    console.log('Carousel content:', carouselInner.innerHTML);

    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });

            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });

    const logoutButton = document.getElementById('logout');
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('loggedIn');
        window.location.href = 'index.html';
    });
});
