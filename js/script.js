document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Send the email using EmailJS
    emailjs.send("service_6r3npu9", "template_5matxdn", {
        from_name: name,
        message: message,
        subject: subject,
        from_email: email
    })
    .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
    }, function(error) {
        console.log("FAILED...", error);
        alert("Failed to send email. Please try again.");
    });
});


const fab = document.getElementById('fab');

// Hide the FAB initially
fab.style.display = 'none';

// Show or hide the FAB based on scroll position
window.addEventListener('scroll', function() {
    if (window.scrollY > 600) { // Adjust the value as needed
        fab.style.display = 'flex'; // Show the FAB
    } else {
        fab.style.display = 'none'; // Hide the FAB
    }
});

// Scroll to top functionality
fab.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling to the top
    });
});
