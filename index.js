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
        .forEach((element) => element.classList.remove("error"));

    document
        .querySelectorAll("textarea")
        .forEach((element) => element.classList.remove("error"));

    document
        .querySelectorAll(".show")
        .forEach((element) => element.classList.remove("show"));
}

function formSubmit() {
    clearErrors();
    let errorFlag = false;
    let form = document.getElementById("form")?.elements;
    if (!form) {
        return
    }
    const minOneWordRegex = new RegExp("\\b\\w+\\b");
    const emptyValidatorFields = ["fname", "lname", "message", "query"];
    emptyValidatorFields.forEach((currentElem) => {
        currentElemDOM = form[currentElem];
        if (!validator(currentElemDOM.value, minOneWordRegex)) {
            document
                .getElementById(currentElem + "error")
                ?.classList.add("show");
            // if (currentElem != "query") currentElemDOM.classList.add("input-error");
            errorFlag = true;
        }
    });
    const emailRege = new RegExp("^[\\w\\-\\.]+@([\\w-]+\\.)+[\\w-]{2,}$");
    let currentElem = form["email"];
    if (!validator(currentElem.value, emailRege)) {
        document.getElementById("emailerror")?.classList.add("show");
        // currentElem.classList.add("input-error");
        errorFlag = true;
    }
    currentElem = form["consent"];
    if (!currentElem.checked) {
        document.getElementById("consenterror")?.classList.add("show");
        errorFlag = true;
    }
    if (!errorFlag) {
        showSuccess();
    }
}
