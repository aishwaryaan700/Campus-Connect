
"use strict";

// 1. Select all role buttons.
const roleCards = document.querySelectorAll(".role-card");

// 2. Select the message element.
const roleMessage = document.querySelector("#role-message");

// 3. Attach a click event to every role button.
roleCards.forEach(function (card) {

    card.addEventListener("click", function () {

        // 4. Read the role from the clicked button.
        const selectedRole = card.dataset.role;

        // 5. Remove the selected style from every card.
        roleCards.forEach(function (item) {
            item.classList.remove("selected");
        });

        // 6. Highlight the clicked card.
        card.classList.add("selected");

        // 7. Update the message shown on the page.
        roleMessage.textContent =
            selectedRole +
            " selected. Login functionality will be added later.";

        // 8. Log the selected role for debugging.
        console.log("Selected role:", selectedRole);
    });

});

// Confirm that the JavaScript file loaded.
console.log("Campus Connect frontend loaded successfully.");
