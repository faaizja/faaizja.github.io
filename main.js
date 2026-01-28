document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            if (name && email) {
                alert(`Thanks for reaching out, ${name}! This is a demo form, but the validation works.`);
                contactForm.reset();
            } else {
                alert("Please fill out all required fields.");
            }
        });
    }

    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.padding = '0.8rem 10%';
            nav.style.transition = '0.3s';
        } else {
            nav.style.padding = '1.5rem 10%';
        }
    });
});