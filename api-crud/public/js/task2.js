
let currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(index) {
    // This function will display the specified tab of the form ...
    const tabs = document.getElementsByClassName("tab");
    tabs[index].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (index == (tabs.length - 1)) {
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("submit_btn").style.display = "inline";
    } else if (index == 0) {
        document.getElementById("prevBtn").style.display = "none";
    }
    else {
        document.getElementById("prevBtn").style.display = "inline";
        document.getElementById("nextBtn").style.display = "inline";
        document.getElementById("submit_btn").style.display = "none";
    }
    // ... and run a function that displays the correct step indicator:
    fixStepIndicator(index)
}

function nextPrev(index) {
    const tabs = document.getElementsByClassName("tab");
    if (index === 1 && !validateForm()) {
        return false;
    }

    tabs[currentTab].style.display = "none";
    currentTab += index;
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    var tabs, inputs, i, isValid = true;
    tabs = document.getElementsByClassName("tab");
    inputs = tabs[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < inputs.length; i++) {
        // If a field is empty...
        if (inputs[i].value.trim() == "" || inputs[i].value.trim() == undefined) {
            inputs[i].classList.add("invalid");
            isValid = false;
        }
        else {
            inputs[i].classList.remove("invalid")
        }
        if (inputs[i].getAttribute('type') == "email") {
            if (!email_validation()) {
                inputs[i].classList.add("invalid")
                isValid = false;
            }
        }
        else if (inputs[i].getAttribute('type') == "radio" && !document.querySelector('input[name="gender"]:checked')) {
            document.getElementById("gender_error").style.display = "block"
            isValid = false;
        }
    }
    // If the isValid status is true, mark the step as finished and isValid:
    if (isValid) {
        document.getElementsByClassName("step")[currentTab].classList.add("finish");
    }
    return isValid; // return the isValid status
}

function fixStepIndicator(index) {
    const steps = document.querySelectorAll(".step");
    steps.forEach(step => step.classList.remove("active"));
    steps[index].classList.add("active");
}

function name_validation() {
    const firstName = document.getElementById("first_name")?.value?.trim();
    const lastName = document.getElementById("last_name")?.value?.trim();

    if (firstName && lastName) {
        localStorage.setItem("first_name", firstName);
        localStorage.setItem("last_name", lastName);
    }
}

function email_validation() {
    const email_regex = /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])$/
    const email = document.getElementById('email').value.trim();
    if (email == "" || email == null) {
        return false
    }
    else if (email.match(email_regex)) {
        localStorage.setItem("email", email)
        return true
    }
    else {
        return false
    }
}

function myFunction(gender) {
    document.getElementById("gender_error").style.display = "none";
    localStorage.setItem("gender", gender);
}

function age_validation() {
    const age = parseFloat(document.getElementById("age").value.trim());
    if (age === "" || age === null || isNaN(age)) {
        document.getElementById("submit_btn").disabled = true;
    }
    else if (age < 1) {
        document.getElementById("submit_btn").disabled = true;
        document.getElementById("age").classList.add("invalid");
    }
    else {
        document.getElementById("submit_btn").disabled = false;
        document.getElementById("age").classList.remove("invalid");
        localStorage.setItem("age", age);
    }
}
