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
