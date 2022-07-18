function validateEmail() {
    let email = document.getElementById("email-input").value;
    if (email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) document.getElementById("email-input-section").classList.remove("email-section-error");
    else document.getElementById("email-input-section").classList.add("email-section-error");
}

//# sourceMappingURL=index.38e5f07e.js.map
