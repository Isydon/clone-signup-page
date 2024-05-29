let eyeclose = document.getElementById("eyeclose");


eyeclose.onclick = function() {
    if (password.type === "password") {
        password.type = "text";
        eyeclose.src = "./images/eye-open.png";
    } else {
        password.type = "password";
        eyeclose.src = "./images/eye-close.png";
    }
}







