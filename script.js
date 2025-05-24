document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            // Prevent form submission until validation is complete
            event.preventDefault();
            let isValid = true;
            let errorMessages = [];

            // --- Name Validation ---
            const nameInput = document.getElementById('name');
            if (!nameInput.value.trim()) {
                isValid = false;
                errorMessages.push("Name is required.");
            }

            // --- Email Validation ---
            const emailInput = document.getElementById('email');
            const emailValue = emailInput.value.trim();
            if (!emailValue) {
                isValid = false;
                errorMessages.push("Email is required.");
            } else {
                // Basic email format validation
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailValue)) {
                    isValid = false;
                    errorMessages.push("Please enter a valid email address (e.g., user@example.com).");
                }
            }

            // --- Password Validation ---
            const passwordInput = document.getElementById('password');
            if (!passwordInput.value) { // Check for empty password
                isValid = false;
                errorMessages.push("Password is required.");
            } else if (passwordInput.value.length < 6) {
                // Example: Check for minimum password length
                isValid = false;
                errorMessages.push("Password must be at least 6 characters long.");
            }

            // --- Age Validation (Optional) ---
            const ageInput = document.getElementById('age');
            if (ageInput.value) {
                const age = parseInt(ageInput.value, 10);
                if (isNaN(age) || age < 0 || age > 150) {
                    isValid = false;
                    errorMessages.push("Please enter a valid age.");
                }
            }

            // --- Occupation Validation (Required) ---
            const occupationInput = document.getElementById('occupation');
            if (!occupationInput.value.trim()) {
                isValid = false;
                errorMessages.push("Occupation is required.");
            }

            // --- Hobbies, Interests, Education, AboutMe are optional for now ---
            // No specific validation for these fields in this step.
            
            // --- Displaying Error Messages ---
            if (!isValid) {
                // Join all error messages into a single string with new lines
                alert("Validation Errors:\n\n" + errorMessages.join("\n"));
            } else {
                // If validation passes, you can proceed with form submission
                alert('Registration form submitted successfully (simulated)!');
                // registrationForm.submit(); // Uncomment to allow actual form submission
                registrationForm.reset(); // Reset form after successful "submission"
            }
        });
    }
});
