
window.addEventListener('mousemove', function(e) {
    // Coordonnées du curseur par rapport à la fenêtre
    const x = e.clientX;
    const y = e.clientY;

    // --- Effet de déplacement de la galerie ---
    const xDecimal = x / window.innerWidth,
          yDecimal = y / window.innerHeight;

    const gallery = document.getElementById("playground");
    const maxX = gallery.offsetWidth - window.innerWidth,
          maxY = gallery.offsetHeight - window.innerHeight;

    const panX = maxX * xDecimal * -1,
          panY = maxY * yDecimal * -1;

    gallery.animate({
        transform: `translate(${panX}px, ${panY}px)`
    }, {
        duration: 4000,
        fill: "forwards",
        easing: "ease"
    });

    // --- Effet de parallaxe sur chaque image ---
    const centerX = window.innerWidth / 3;
    const centerY = window.innerHeight / 3;

    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    const percentage = 25; // Pourcentage de déplacement par rapport à la taille de l'image

    document.querySelectorAll('.tile img').forEach(img => {
        const translateX = -deltaX * percentage;
        const translateY = -deltaY * percentage;
        img.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });
});
