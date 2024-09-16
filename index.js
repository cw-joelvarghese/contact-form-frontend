function validator(input, regex) {
    return regex.test(input);
}

function showSuccess() {
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}

function clearErrors() {
    document
        .querySelectorAll("input")
        .forEach((elem) => elem.classList.remove("error"));

    document
        .querySelectorAll("textarea")
        .forEach((elem) => elem.classList.remove("error"));

    document
        .querySelectorAll(".show")
        .forEach((elem) => elem.classList.remove("show"));
}

function sub(e) {
    clearErrors();
    let errorFlag = false;
    let form = document.getElementById("form").elements;
    const minOneWordRegex = new RegExp("\\b\\w+\\b");
    const emptyValidatorFields = ["fname", "lname", "message", "query"];
    emptyValidatorFields.forEach((currentElem) => {
        currentElemDOM = form[currentElem];
        if (!validator(currentElemDOM.value, minOneWordRegex)) {
            document
                .getElementById(currentElem + "error")
                .classList.add("show");
            if (currentElem != "query") currentElemDOM.classList.add("error");
            errorFlag = true;
        }
    });
    const emailRege = new RegExp("^[\\w\\-\\.]+@([\\w-]+\\.)+[\\w-]{2,}$");
    let currentElem = form["email"];
    if (!validator(currentElem.value, emailRege)) {
        document.getElementById("emailerror").classList.add("show");
        currentElem.classList.add("error");
        errorFlag = true;
    }
    currentElem = form["consent"];
    if (!currentElem.checked) {
        document.getElementById("consenterror").classList.add("show");
        errorFlag = true;
    }
    if (!errorFlag) {
        showSuccess();
    }
}
