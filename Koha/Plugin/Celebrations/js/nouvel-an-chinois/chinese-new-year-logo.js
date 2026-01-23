document.addEventListener('DOMContentLoaded', () => {
    const logoDiv = document.getElementById('logo');
    if (!logoDiv) return;

    logoDiv.style.display = 'none';

    if (document.getElementById('custom-logo-link')) return;

    const logoLink = document.createElement('a');
    logoLink.href = '/cgi-bin/koha/opac-main.pl';
    logoLink.id = 'custom-logo-link';

    const logoImg = new Image();
    logoImg.src = '/api/v1/contrib/Celebrations-api/static/images/logo2025.webp';
    logoImg.alt = 'Koha logo spécial';
    logoImg.style.height = '40px';
    logoImg.style.width = 'auto';
    logoImg.style.display = 'block';
    logoImg.style.margin = '0 auto';

    logoLink.appendChild(logoImg);

    const navbar = document.querySelector('nav.navbar');
    if (navbar) {
        navbar.insertBefore(logoLink, navbar.firstChild);
    }
});
