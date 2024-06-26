document.addEventListener('DOMContentLoaded', () => {
    const images = ['./images/Image1.jpg', './images/Image2.jpg', './images/Image3.jpg', './images/Image4.jpg']; // Liste des images
    const carouselInner = document.querySelector('.carousel-inner');

    // Effacer le contenu initial
    carouselInner.innerHTML = '';

    // Ajouter les images dynamiquement
    images.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = `Image ${index}`;
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

    // Animation du carrousel
    let index = 0;
    const totalImages = images.length;

    setInterval(() => {
        index++;
        if (index === totalImages) {
            setTimeout(() => {
                carouselInner.style.transition = 'none';
                carouselInner.style.transform = 'translateX(0)';
                // Force reflow to reset the transition
                carouselInner.offsetHeight;
                carouselInner.style.transition = 'transform 0s ease';
                index = 0;
            }, 500); // Temps de transition correspondant à celui défini dans la CSS
        }
        carouselInner.style.transition = 'transform 1s ease';
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);

    function onScroll() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');

        let currentSection = '';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
});
