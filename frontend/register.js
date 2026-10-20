
"use strict";

// Find the registration form.
const registrationForm = document.querySelector("#registration-form");

// Find the message area.
const registrationMessage = document.querySelector("#registration-message");

// Handle form submission.
registrationForm.addEventListener("submit", function (event) {

    // Prevent the browser from reloading the page.
    event.preventDefault();

    // Read the values entered by the user.
    const studentId = document.querySelector("#student-id").value.trim();
    const studentName = document.querySelector("#student-name").value.trim();
    const studentEmail = document.querySelector("#student-email").value.trim();
    const course = document.querySelector("#student-course").value;

    // Display a confirmation message.
    registrationMessage.textContent =
        "Form validated for " + studentName +
        " (" + studentId + "), course: " + course + ".";

    console.log("Registration form submitted:", {
        studentId,
        studentName,
        studentEmail,
        course
    });
});
