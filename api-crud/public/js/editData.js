
// * Get E-mail address from URL
let queryString = window.location.search;
queryString = queryString.replace('?', '');
let params = queryString.split('=');
let email = params[1];

// * Get E-mail address data from localStorage
let myData = JSON.parse(localStorage.getItem(email))

// * Fill First name value in field
document.getElementById('firstName').value = myData.firstName

// * Fill Last name value in field
document.getElementById('lastName').value = myData.lastName

// * Fill E-mail value in field
document.getElementById('email').value = myData.email

// * Fill Phone no value in field
document.getElementById('phoneNo').value = myData.phoneNo

// * Selected Technology data
const technologyOpt = document.getElementById('technology').options
for (let i = 0; i < technologyOpt.length; i++) {
    if (myData.technology.split(',').includes(technologyOpt[i].value)) {
        technologyOpt[i].selected = true
    }
}

// * Selected Hobby data 
const hobbyListElem = document.querySelectorAll('input[name="hobby"]')
hobbyListElem.forEach(element => {
    if (myData.hobby.split(',').includes(element.value)) {
        element.checked = true
    }
});

// * Select Gender data
const genderListElem = document.querySelectorAll('input[name="gender"]')
genderListElem.forEach(element => {
    if (element.value == myData.gender) {
        element.checked = true
    }
});

// * Update button function call
function updateForm() {
    const firstName = firstNameValidation();
    const lastName = lastNameValidation();
    const email = emailValidation();
    const phoneNo = phoneNoValidation();
    const gender = genderValidation();
    const hobby = hobbyValidation();
    const technology = technologyValidation();
    if (firstName && lastName && email && phoneNo && gender && hobby && technology) {
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNo: phoneNo,
            gender: gender,
            hobby: hobby,
            technology: technology
        }
        localStorage.setItem(email, JSON.stringify(data))
        window.location.href = "/dataList.html"
    }
}