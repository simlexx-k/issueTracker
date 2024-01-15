// script.js
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("issueForm").addEventListener("submit", function(event) {
        event.preventDefault();

        var datetime = document.getElementById("datetime").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        // Validate and store in localStorage
        if (isValidEmail(email)) {
            var userResponseDate = {
                datetime: datetime};
            var userResponseEmail = {
                email: email};
            var userResponseMessage = {
                message: message    
            };

            // Retrieve existing responses or initialize an empty array
            var storedResponsesDate = JSON.parse(localStorage.getItem("userResponseDate")) || [];
            var storedResponsesEmail = JSON.parse(localStorage.getItem("userResponseEmail")) || [];
            var storedResponsesMessage = JSON.parse(localStorage.getItem("userResponseMessage")) || [];

            // Add the new response
            storedResponsesDate.push(userResponseDate);
            storedResponsesEmail.push(userResponseEmail);
            storedResponsesMessage.push(userResponseMessage);
 

            // Save the updated array back to localStorage
            localStorage.setItem("userResponsesDate", JSON.stringify(storedResponsesDate));
            localStorage.setItem("userResponsesEmail", JSON.stringify(storedResponsesEmail));
            localStorage.setItem("userResponsesMessage", JSON.stringify(storedResponsesMessage));

            // Optionally, you can clear the form after submission
            document.getElementById("issueForm").reset();

            // Display a success message or perform other actions
            alert("Response successfully stored!");
        } else {
            alert("Please enter a valid email address.");
        }
    });

    function isValidEmail(email) {
        // A simple email validation regex, you can use a more robust one if needed
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
