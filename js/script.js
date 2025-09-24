document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle (if you add a hamburger menu)
    // Example: If you have a button with id="mobile-menu-toggle" and a nav with class="main-nav"
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.querySelector('.container nav ul');

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            let isValid = true;

            // Basic validation for name
            if (name.value.trim() === '') {
                alert('Name cannot be empty.');
                name.focus();
                isValid = false;
            }

            // Basic validation for email
            if (isValid && !isValidEmail(email.value.trim())) {
                alert('Please enter a valid email address.');
                email.focus();
                isValid = false;
            }

            // Basic validation for message
            if (isValid && message.value.trim() === '') {
                alert('Message cannot be empty.');
                message.focus();
                isValid = false;
            }

            if (isValid) {
                // If all validations pass, you can submit the form or do an AJAX call
                alert('Form submitted successfully!');
                contactForm.reset(); // Clear the form
                // In a real application, you would send this data to a server
                console.log('Form Data:', {
                    name: name.value.trim(),
                    email: email.value.trim(),
                    subject: document.getElementById('subject').value.trim(),
                    message: message.value.trim()
                });
            }
        });
    }

    function isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});
