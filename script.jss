// Simple form validation for contact form
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }
    alert("Your message has been sent!");
    return true;
}
