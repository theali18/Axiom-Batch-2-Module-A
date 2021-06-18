const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

// showError
function showError(input, msg) {
    const fControl = input.parentElement;
    fControl.className = "form-control error";
    const small = fControl.querySelector("small");
    small.innerText = msg;
}

// showSuccess
function showSuccess(input) {
    const fControl = input.parentElement;
    fControl.className = "form-control success";
}

// cEmail
function cEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// check data
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // username
    if (username.value === "") {
        showError(username, "Required");
    } else if (username.value.length < 4) {
        showError(username, "username must be greater the 3");
    } else showSuccess(username);

    // email
    if (email.value === "") {
        showError(email, "Required");
    } else if (!cEmail(email.value)) {
        showError(email, "Please Enter Valid Email");
    } else showSuccess(email);

    // password
    if (password.value === "") {
        showError(password, "Required");
    } else if (password.value.length < 6) {
        showError(password, "Password must be greater then 6");
    } else showSuccess(password);

    // cpassword
    if (cpassword.value === "") {
        showError(cpassword, "Required");
    } else if (!(password.value === cpassword.value)) {
        showError(cpassword, "Please Enter Same Password");
    } else showSuccess(cpassword);
});