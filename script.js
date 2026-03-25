function checkPassword() {
    let password = document.getElementById("password").value;
    let result = document.getElementById("result");
    let feedback = document.getElementById("feedback");
    let bar = document.getElementById("bar");

    feedback.innerHTML = "";
    let strength = 0;

    let commonPasswords = ["123456", "password", "qwerty"];

    if (commonPasswords.includes(password)) {
        result.innerText = "Very Weak - Common Password!";
        result.style.color = "darkred";
        bar.style.width = "20%";
        return;
    }

    if (password.length >= 8) {
        strength++;
    } else {
        addFeedback("At least 8 characters.");
    }

    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
        strength++;
    } else {
        addFeedback("Use uppercase and lowercase.");
    }

    if (/[0-9]/.test(password)) {
        strength++;
    } else {
        addFeedback("Add a number.");
    }

    if (/[@#$%^&+=!]/.test(password)) {
        strength++;
    } else {
        addFeedback("Add a special character.");
    }

    if (strength === 4) {
        result.innerText = "Strong Password";
        result.style.color = "green";
        bar.style.width = "100%";
        bar.style.background = "green";
    } else if (strength === 3) {
        result.innerText = "Moderate Password";
        result.style.color = "orange";
        bar.style.width = "70%";
        bar.style.background = "orange";
    } else {
        result.innerText = "Weak Password";
        result.style.color = "red";
        bar.style.width = "40%";
        bar.style.background = "red";
    }
}

function addFeedback(message) {
    let li = document.createElement("li");
    li.innerText = message;
    document.getElementById("feedback").appendChild(li);
}