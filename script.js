document.getElementsById('bookingForm').addEventListener('submit', function(event)
{
    event.preventDefault();
    alert('Booking successful');
});
document.addEventListener("DOMContentLoaded", function() {
    // You can add interactive features here later
    console.log("Page loaded successfully.");
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    function adjustNav() {
        if (mediaQuery.matches) {
            navLinks.forEach(link => {
                link.style.display = 'block'; // Stack links vertically
            });
        } else {
            navLinks.forEach(link => {
                link.style.display = 'inline'; // Stack links horizontally
            });
        }
    }

    // Initial check
    adjustNav();
    
    // Add listener for resizing
    mediaQuery.addListener(adjustNav);
});

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.cta-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add a class to change the button style temporarily
            this.classList.add('clicked');

            // Remove the class after a short delay
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300); // Adjust the duration as needed
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Simulate form submission process
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Display a success message
        responseMessage.textContent = `Thank you, ${name}! Your message has been sent. We will get back to you shortly.`;
        responseMessage.classList.remove('hidden');

        // Clear the form
        contactForm.reset();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const reviewForm = document.getElementById('reviewForm');
    const responseMessage = document.getElementById('responseMessage');
    const reviewsList = document.getElementById('reviewsList');

    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const review = document.getElementById('review').value;

        // Create a review item
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        reviewItem.innerHTML = `
            <h4>${name} - Rating: ${rating}</h4>
            <p>${review}</p>
        `;

        // Append the new review to the reviews list
        reviewsList.prepend(reviewItem);

        // Display a success message
        responseMessage.textContent = `Thank you, ${name}! Your review has been submitted.`;
        responseMessage.classList.remove('hidden');

        // Clear the form
        reviewForm.reset();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const bookingForm = document.getElementById('bookingForm');
    const responseMessage = document.getElementById('responseMessage');
    const autofillButton = document.getElementById('autofillButton');

    // Initialize Google Places Autocomplete
    const streetInput = document.getElementById('street');
    const autocomplete = new google.maps.places.Autocomplete(streetInput);

    // Handle form submission
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const city = document.getElementById('city').value;
        const street = document.getElementById('street').value;
        const zipcode = document.getElementById('zipcode').value;

        // Display a success message
        responseMessage.textContent = `Thank you, ${name}! Your booking has been confirmed.`;
        responseMessage.classList.remove('hidden');

        // Clear the form
        bookingForm.reset();
    });

    // Autofill address functionality
    autofillButton.addEventListener('click', function() {
        // For demo purposes, you can set a static address or use a geolocation API
        streetInput.value = "1600 Amphitheatre Parkway, Mountain View, CA"; // Example address
        document.getElementById('city').value = "Mountain View";
        document.getElementById('zipcode').value = "94043";
    });
});