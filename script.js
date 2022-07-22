const form = document.getElementById("form")


form.addEventListener("submit", e => {
    e.preventDefault();

    const firstName = form["firstname"].value;
    const lastName = form["lastname"].value;
    const email = form["email"].value;
    const password = form["password"].value;

    if (firstName === '') {
        addErrorTo("firstname", "First Name is required");
    } else {
        removeErrorFrom("firstname");
    }
    if (lastName === '') {
        addErrorTo("lastname", "Last Name Name is required");
    } else {
        removeErrorFrom("lastname");
    }
    if (email === '') {
        addErrorTo("email", "Email is required");
    } else if (!isValid("email")) {
        addErrorTo("email", "Email is not valid");
    } else {
        removeErrorFrom("email");
    }
    if (password === '') {
        addErrorTo("password", "Password is required");
    } else {
        removeErrorFrom("password");
    }

});

function addErrorTo(field, message) {
    const small = form[field].parentNode.querySelector("small");
    small.innerText = message;
    small.style.opacity = "1";
}
function removeErrorFrom(field) {
    const small = form[field].parentNode.querySelector("small");
    small.style.opacity = "0";
}

function isValid(email) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

