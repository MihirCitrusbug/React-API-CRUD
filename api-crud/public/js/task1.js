
function first_name_validation() {
    const first_name = document.getElementById("first_name").value.trim();
    const first_name_error = document.getElementById("first_name_error");

    if (first_name === "") {
        first_name_error.style.display = "block";
        return false;
    } else {
        first_name_error.style.display = "none";
        return true;
    }
}

// * Last name validation
function last_name_validation() {
    const last_name = document.getElementById('last_name').value.trim();
    const last_name_error = document.getElementById("last_name_error");

    if (last_name === "") {
        last_name_error.style.display = "block";
        return false;
    } else {
        last_name_error.style.display = "none";
        return true;
    }
}

// * Email validation
function email_validation() {
    const email_regex = /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])$/
    const email = document.getElementById('email').value.trim();
    const email_error = document.getElementById("email_error")
    if (email == "" || email == null) {
        email_error.textContent = "This field is required";
        email_error.style.display = "block"
        return false
    }
    else {
        email_error.textContent = "";
        email_error.style.display = "none"
        if (email.match(email_regex)) {
            email_error.textContent = "";
            email_error.style.display = "none"
            return true
        } else {
            email_error.textContent = "Invalid email address!";
            email_error.style.display = "block"
            return false
        }
    }
}

// * Phone No. validation
function phoneNo_validation() {
    const phoneNo_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const phoneNo = document.getElementById("phoneNo").value.trim();
    const phoneNo_error = document.getElementById("phoneNo_error");
    if (phoneNo == "" || phoneNo == null) {
        phoneNo_error.textContent = "This field is required";
        phoneNo_error.style.display = "block"
        return false
    }
    else {
        phoneNo_error.textContent = "";
        phoneNo_error.style.display = "none"
        if (phoneNo.match(phoneNo_regex)) {
            phoneNo_error.textContent = "";
            phoneNo_error.style.display = "none"
            return true
        } else {
            phoneNo_error.textContent = "Invalid Phone number!";
            phoneNo_error.style.display = "block"
            return false
        }
    }
}

// * Zip code validation
function zipcode_validation() {
    const zipcode_regex = /(^\d{6}$)|(^\d{6}-\d{4}$)/;
    const zipcode = document.getElementById("zipcode").value.trim();
    const zipcode_error = document.getElementById("zipcode_error")
    if (zipcode == "" || zipcode == null) {
        zipcode_error.textContent = "This field is required";
        zipcode_error.style.display = "block"
        return false
    }
    else {
        zipcode_error.textContent = "";
        zipcode_error.style.display = "none"
        if (zipcode.match(zipcode_regex)) {
            zipcode_error.textContent = "";
            zipcode_error.style.display = "none"
            return true
        } else {
            zipcode_error.textContent = "Invalid Zipcode!"
            zipcode_error.style.display = "block"
            return false
        }
    }
}

// * Date of Birth validation
function dob_validation() {
    const dob = document.getElementById('dob').value
    if (dob == "" || dob == null) {
        document.getElementById("dob_error").style.display = "block"
        return false
    }
    else {
        document.getElementById("dob_error").style.display = "none"
        return true
    }
}

function submit_func() {
    const validationFlags = [
        first_name_validation(),
        last_name_validation(),
        email_validation(),
        phoneNo_validation(),
        zipcode_validation(),
        dob_validation()
    ];
    if (validationFlags.every(flag => flag)) {
        Swal.fire('Good job!', 'You clicked the button!', 'success')
            .then(() => window.location.reload());
    }
}
