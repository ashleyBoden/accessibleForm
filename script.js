function togglePassword() {
    var passwordInput = document.getElementById("password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        document.getElementById("show-password").style.backgroundImage = "url(Assets/show.png)";
    } else {
        passwordInput.type = "password";
        document.getElementById("show-password").style.backgroundImage = "url(Assets/hidden.png)";
    }
}

function toggleConfirmPassword() {
    var confirmPasswordInput = document.getElementById("confirm-password");

    if (confirmPasswordInput.type === "password") {
        confirmPasswordInput.type = "text";
        document.getElementById("show-confirm-password").style.backgroundImage = "url(Assets/show.png)";
    } else {
        confirmPasswordInput.type = "password";
        document.getElementById("show-confirm-password").style.backgroundImage = "url(Assets/hidden.png)";
    }   
}

function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var errorMessage = document.getElementById("password-error");

    if (password !== confirmPassword) {
        errorMessage.hidden = false;
        document.getElementById("confirm-password").style.borderColor = "red";
        return false;
    } else {
        errorMessage.hidden = true;
        document.getElementById("confirm-password").style.borderColor = "green";
        return true;

    }
}