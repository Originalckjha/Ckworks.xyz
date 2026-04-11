document.addEventListener('DOMContentLoaded', () => {
    initNavHighlight();
});

function initNavHighlight() {
    const links = document.querySelectorAll('nav a[href^="#"]');
    if (!links.length) return;

    window.addEventListener('scroll', () => {
        let current = '';
        document.querySelectorAll('section[id], footer[id]').forEach(el => {
            if (window.pageYOffset >= el.offsetTop - 200) current = el.id;
        });
        links.forEach(link => {
            link.classList.toggle('nav-active', link.getAttribute('href') === `#${current}`);
        });
    });
}
