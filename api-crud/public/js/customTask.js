
// * First name validation
function firstNameValidation() {
    const firstName = document.getElementById('firstName').value.trim();
    const firstNameRequiredError = document.getElementById("firstNameRequiredError");
    const firstNameMaxLengthError = document.getElementById("firstNameMaxLengthError");

    if (firstName === "") {
        firstNameMaxLengthError.style.display = "none";
        firstNameRequiredError.style.display = "block";
        return false;
    } else {
        if (firstName.length > 20) {
            firstNameRequiredError.style.display = "none";
            firstNameMaxLengthError.style.display = "block";
            return false;
        }
        firstNameMaxLengthError.style.display = "none";
        firstNameRequiredError.style.display = "none";
        return firstName;
    }
}

// * Last name validation
function lastNameValidation() {
    const lastName = document.getElementById('lastName').value.trim();
    const lastNameRequiredError = document.getElementById("lastNameRequiredError");
    const lastNameMaxLengthError = document.getElementById("lastNameMaxLengthError");

    if (lastName === "") {
        lastNameMaxLengthError.style.display = "none";
        lastNameRequiredError.style.display = "block";
        return false;
    } else {
        if (lastName.length > 20) {
            lastNameRequiredError.style.display = "none";
            lastNameMaxLengthError.style.display = "block";
            return false;
        }
        lastNameRequiredError.style.display = "none";
        lastNameMaxLengthError.style.display = "none";
        return lastName;
    }
}

// * Email validation
function emailValidation() {
    const email_regex = /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])$/
    const email = document.getElementById('email').value.trim();
    const emailRequiredError = document.getElementById("emailRequiredError")
    const emailInvalidError = document.getElementById("emailInvalidError")
    const emailMaxLengthError = document.getElementById("emailMaxLengthError")

    if (email == "" || email == null) {
        emailRequiredError.style.display = "block"
        emailInvalidError.style.display = "none"
        emailMaxLengthError.style.display = "none"
        return false
    }
    else {
        emailRequiredError.style.display = "none"
        emailMaxLengthError.style.display = "none"
        if (email.match(email_regex)) {
            if (email.length > 50) {
                emailInvalidError.style.display = "none"
                emailMaxLengthError.style.display = "block"
                return false
            }
            emailInvalidError.style.display = "none"
            return email
        } else {
            emailInvalidError.style.display = "block"
            return false
        }
    }
}

// * Phone No. validation
function phoneNoValidation() {
    const phoneNo_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const phoneNo = document.getElementById("phoneNo").value.trim();
    const phoneNoRequiredError = document.getElementById("phoneNoRequiredError")
    const phoneNoInvalidError = document.getElementById("phoneNoInvalidError")

    if (phoneNo == "" || phoneNo == null) {
        phoneNoRequiredError.style.display = "block"
        phoneNoInvalidError.style.display = "none"
        return false
    }
    else {
        phoneNoRequiredError.style.display = "none"
        if (phoneNo.match(phoneNo_regex)) {
            phoneNoInvalidError.style.display = "none"
            return phoneNo
        } else {
            phoneNoInvalidError.style.display = "block"
            return false
        }
    }
}

// * Gender validation
function genderValidation() {
    const gender = document.querySelector('input[name="gender"]:checked')?.value
    const genderRequiredError = document.getElementById("genderRequiredError")
    if (gender == undefined || gender == null) {
        genderRequiredError.style.display = "block"
        return false
    }
    genderRequiredError.style.display = "none"
    return gender
}

// * Hobby Validation
function hobbyValidation() {
    const hobbyListElem = document.querySelectorAll('input[name="hobby"]:checked')
    const hobbyRequiredError = document.getElementById("hobbyRequiredError")
    if (hobbyListElem.length > 0) {
        let hobby = ''
        hobbyRequiredError.style.display = "none"
        hobbyListElem.forEach(element => {
            hobby += `${element.value},`
        });
        return hobby.replace(/.$/, '')
    } else {
        hobbyRequiredError.style.display = "block"
        return false
    }
}

// * Technology validation
function technologyValidation() {
    const technologyOpt = document.getElementById('technology').options
    const technologyRequiredError = document.getElementById("technologyRequiredError")
    if (technologyOpt.selectedIndex != -1) {
        let technology = ''
        technologyRequiredError.style.display = "none"
        for (let i = 0; i < technologyOpt.length; i++) {
            if (technologyOpt[i].selected) {
                technology += `${technologyOpt[i].value},`
            }
        }
        return technology.replace(/.$/, '')
    }
    else {
        technologyRequiredError.style.display = "block"
        return false
    }
}

// * Submit button function call
function submitForm() {
    const firstName = firstNameValidation();
    const lastName = lastNameValidation();
    const email = emailValidation();
    const phoneNo = phoneNoValidation();
    const gender = genderValidation();
    const hobby = hobbyValidation();
    const technology = technologyValidation();
    const fullPhoneNo = `${document.querySelector(".iti__selected-flag").title.split(' ').slice(-1)[0]} ${phoneNo}`
    if (firstName && lastName && email && phoneNo && gender && hobby && technology) {
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNo: fullPhoneNo,
            gender: gender,
            hobby: hobby,
            technology: technology
        }
        localStorage.setItem(email, JSON.stringify(data))
        window.location.href = "/dataList.html"
    }
}