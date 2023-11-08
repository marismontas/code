const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

var state = false;
function toggle(passwordId) {
    var passwordInput = document.getElementById(passwordId);
    var eyeIcon = document.getElementById("eye");

    if (state) {
        passwordInput.setAttribute("type", "password");
        eyeIcon.style.color = "#7a797e";
        state = false;
    } else {
        passwordInput.setAttribute("type", "text");
        eyeIcon.style.color = "#5887ef";
        state = true;
    }
}
