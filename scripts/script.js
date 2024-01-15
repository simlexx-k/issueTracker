// script.js
document.getElementById("issueForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get form values
    var datetime = document.getElementById("datetime").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Perform validation
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // You can add more validation logic here...

    // Display the collected data (you might want to send it to a server in a real application)
    console.log("Date and Time: " + datetime);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // Optionally, you can clear the form after submission
    document.getElementById("issueForm").reset();
});

function isValidEmail(email) {
    // A simple email validation regex, you can use a more robust one if needed
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
