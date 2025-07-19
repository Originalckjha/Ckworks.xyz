document.addEventListener('DOMContentLoaded', () => {
    // Enhanced Typing Animation with Color Shift
    const nameElement = document.getElementById('typing-name');
    const bioElement = document.getElementById('typing-bio');
    const nameText = 'Chandra Kishor Jha';
    const bioText = 'Educator + Techie with 6+ Years of Experience';
    
    function typeText(element, text, speed = 80, callback) {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                element.style.color = `hsl(${i * 10}, 70%, 50%)`; // Color shift
                i++;
            } else {
                clearInterval(timer);
                if (callback) callback();
            }
        }, speed);
    }
    
    typeText(nameElement, nameText, 100, () => typeText(bioElement, bioText, 80));

    // Parallax Particle Animation
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            speed: Math.random() * 1 + 0.5,
            parallax: Math.random() * 0.5 + 0.2
        });
    }

    let lastScroll = 0;
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.fill();
            p.y -= p.speed;
            if (p.y < 0) p.y = canvas.height;
        });
        requestAnimationFrame(animateParticles);
    }
    animateParticles();

    // Parallax on Scroll
    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        const delta = scroll - lastScroll;
        particles.forEach(p => p.y += delta * p.parallax);
        lastScroll = scroll;
    });

    // Slide-In with Burst Animations
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                createBurst(entry.target); // Trigger burst
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    // Simple Burst Effect (like sparks)
    function createBurst(target) {
        for (let i = 0; i < 20; i++) {
            const spark = document.createElement('div');
            spark.style.position = 'absolute';
            spark.style.width = '5px';
            spark.style.height = '5px';
            spark.style.background = '#007bff';
            spark.style.borderRadius = '50%';
            spark.style.top = `${Math.random() * 100}%`;
            spark.style.left = `${Math.random() * 100}%`;
            spark.style.opacity = '1';
            spark.style.transition = 'transform 0.5s ease-out, opacity 0.5s';
            target.appendChild(spark);

            setTimeout(() => {
                spark.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`;
                spark.style.opacity = '0';
            }, 10);

            setTimeout(() => target.removeChild(spark), 500);
        }
    }

    // Resize Handling
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
