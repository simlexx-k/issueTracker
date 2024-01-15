// responses.js
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve stored responses from localStorage
    var storedResponses = JSON.parse(localStorage.getItem("userResponses")) || [];

    // Get the table body element
    var issueTableBody = document.querySelector("#issueTable tbody");

    // Display each response in the table
    storedResponses.forEach(function(response) {
        var row = document.createElement("tr");

        // Columns for Date and Time, Email, and Issue
        var datetimeCell = document.createElement("td");
        datetimeCell.textContent = response.datetime;

        var emailCell = document.createElement("td");
        emailCell.textContent = response.email;

        var issueCell = document.createElement("td");
        issueCell.textContent = response.message;

        // Checkbox for completion status
        var completionCell = document.createElement("td");
        var completionCheckbox = document.createElement("input");
        completionCheckbox.type = "checkbox";
        completionCheckbox.checked = response.completed || false; // Set the checkbox based on stored data
        completionCheckbox.addEventListener("change", function() {
            response.completed = completionCheckbox.checked;
            updateLocalStorage(storedResponses);
        });

        completionCell.appendChild(completionCheckbox);

        // Append cells to the row
        row.appendChild(datetimeCell);
        row.appendChild(emailCell);
        row.appendChild(issueCell);
        row.appendChild(completionCell);

        // Append the row to the table body
        issueTableBody.appendChild(row);
    });
});

function updateLocalStorage(data) {
    // Save the updated array back to localStorage
    localStorage.setItem("userResponses", JSON.stringify(data));
}
