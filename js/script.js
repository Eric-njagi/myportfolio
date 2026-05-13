// Basic JavaScript for interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const imageInput = document.getElementById('imageUpload');
    const heroPreview = document.getElementById('heroImagePreview');

    if (imageInput && heroPreview) {
        imageInput.addEventListener('change', function () {
            const file = this.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function () {
                heroPreview.style.backgroundImage = `url('${reader.result}')`;
                heroPreview.textContent = '';
            };
            reader.readAsDataURL(file);
        });
    }

    console.log('Portfolio loaded successfully!');
});
