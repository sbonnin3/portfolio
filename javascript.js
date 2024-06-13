document.addEventListener('DOMContentLoaded', () => {
    const images = ['image1.png', 'image2.png', 'image3.png']; // Liste des images
    const carouselInner = document.querySelector('.carousel-inner');

    // Effacer le contenu initial
    carouselInner.innerHTML = '';

    // Ajouter les images dynamiquement
    images.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = `Image ${index + 1}`;
        carouselInner.appendChild(imgElement);
    });

    // Ajouter des clones des images pour une transition infinie
    images.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = `Image ${index + 1}`;
        carouselInner.appendChild(imgElement);
    });
});