// Common functionality for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            document.querySelector('.nav-list').classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Homepage specific functionality
    if (document.getElementById('main-image')) {
        // Image gallery functionality
        const thumbnails = document.querySelectorAll('.thumbnail');
        const mainImage = document.getElementById('main-image');
        
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Update main image
                mainImage.src = this.dataset.target;
                mainImage.alt = this.alt;
                
                // Update active thumbnail
                document.querySelector('.thumbnail.active').classList.remove('active');
                this.classList.add('active');
            });
        });

        // Simple image rotation for the hero
        const hero = document.querySelector('.hero');
        const images = ['static/duquesneincline.jpg', 'static/duquesneincline1.jpg', 'static/duquesneincline2.webp'];
        let currentIndex = 0;
        
        function rotateHeroImage() {
            currentIndex = (currentIndex + 1) % images.length;
            hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${images[currentIndex]})`;
        }
        
        // Rotate every 8 seconds
        setInterval(rotateHeroImage, 8000);
    }

    // Plan Visit page FAQ functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                answer.classList.toggle('active');
                question.classList.toggle('active');
            });
        });
    }

    // Mailing list form validation
    const mailingListForm = document.getElementById('mailingListForm');
    if (mailingListForm) {
        mailingListForm.addEventListener('submit', function(e) {
            let isValid = true;
            
            // Validate name
            const name = document.getElementById('name');
            if (!name.value.trim()) {
                document.getElementById('nameError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('nameError').style.display = 'none';
            }
            
            // Validate email
            const email = document.getElementById('email');
            if (!email.value.trim() || !email.validity.valid) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('emailError').style.display = 'none';
            }
            
            // Validate phone if provided
            const phone = document.getElementById('phone');
            if (phone.value && !phone.validity.valid) {
                document.getElementById('phoneError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('phoneError').style.display = 'none';
            }
            
            // Validate zip if provided
            const zip = document.getElementById('zip');
            if (zip.value && !zip.validity.valid) {
                document.getElementById('zipError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('zipError').style.display = 'none';
            }
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    }
});