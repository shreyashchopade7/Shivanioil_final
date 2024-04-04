function validateForm() {
    var valid = true;

    if (!validateEmail()) {
        valid = false;
    }

    if (!validatePassword()) {
        valid = false;
    }
    window.location.href = "index.html";
    var phone = document.getElementById("phone").value;

    // Validate phone number length
    if (phone.length !== 10) {
        document.getElementById("phone-error").innerText = "Phone number must be 10 digits long";
        valid = false;
    } else {
        document.getElementById("phone-error").innerText = "";
    }

    return valid;
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        document.getElementById("email-error").innerText = "Invalid email address";
        return false;
    } else {
        document.getElementById("email-error").innerText = "";
        return true;
    }
}

function validatePassword() {
    var password = document.getElementById("password").value;

    // Validate length
    if (password.length < 8) {
        document.getElementById("password-error").innerText = "Password must be at least 8 characters long";
        return false;
    } else {
        document.getElementById("password-error").innerText = "";
    }

    // Validate uppercase letters
    var upperCaseLetters = /[A-Z]/g;
    if (!password.match(upperCaseLetters)) {
        document.getElementById("password-error").innerText = "Password must contain at least one uppercase letter";
        return false;
    } else {
        document.getElementById("password-error").innerText = "";
    }

    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (!password.match(lowerCaseLetters)) {
        document.getElementById("password-error").innerText = "Password must contain at least one lowercase letter";
        return false;
    } else {
        document.getElementById("password-error").innerText = "";
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (!password.match(numbers)) {
        document.getElementById("password-error").innerText = "Password must contain at least one number";
        return false;
    } else {
        document.getElementById("password-error").innerText = "";
    }

    // Validate special characters
    var specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    if (!password.match(specialCharacters)) {
        document.getElementById("password-error").innerText = "Password must contain at least one special character";
        return false;
    } else {
        document.getElementById("password-error").innerText = "";
    }

    return true;
}
