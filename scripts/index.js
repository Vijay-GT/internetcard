document.addEventListener("DOMContentLoaded", function() {
 document.querySelector("#sendButton").addEventListener('click', function() {
     // Get the values from input fields
     var email = document.querySelector("#user-name").value;
     var phonenum = document.querySelector("#mobile-no").value;
     var textarea = document.querySelector("#message").value;

     // Regular expression for basic email validation
     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     // Regular expression for phone number validation (digits only, 0-10 characters)
     var phonePattern = /^\d{10}$/;

     // Validate if all fields are filled and valid
     if (!email || !emailPattern.test(email)) {
         alert("Please enter a valid email address.");
     } else if (!phonenum || !phonePattern.test(phonenum)) {
         alert("Please enter a valid phone number (10 digits).");
     } else if (!textarea) {
         alert("Please enter your message.");
     } else {
         // Store values in local storage if all validations pass
         localStorage.setItem("email", email);
         localStorage.setItem("phonenum", phonenum);
         localStorage.setItem("message", textarea);

         // Show success message
         alert("Message sent successfully and saved in local storage!");

         // Clear the form fields
         document.querySelector("#user-name").value = '';
         document.querySelector("#mobile-no").value = '';
         document.querySelector("#message").value = '';
     }
 });
});
