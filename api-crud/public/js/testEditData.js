
// * Get E-mail address from URL
let queryString = window.location.search;
queryString = queryString.replace('?', '');
let params = queryString.split('=');
let emails = params[params.length - 1].split(',')
const sliderEditForm = document.querySelector('.sliderEditForm')

// * Selected Technology data
const selectedTechnology = async (id, technology) => {
    const technologyOpt = document.getElementById(id).querySelectorAll('option')
    for (let i = 0; i < technologyOpt.length; i++) {
        if (technology.split(',').includes(technologyOpt[i].value)) {
            let html = `<a class="ui label transition visible" data-value="${technologyOpt[i].value}" style="display: inline-block !important;">${technologyOpt[i].value}<i class="delete icon"></i></a>`
            $(html).insertAfter(document.getElementById(id));
            technologyOpt[i].selected = true
        }
    }
}

// * Selected Hobby data
const selectHobby = async (selector, hobby) => {
    const hobbyListElem = document.querySelectorAll(selector)
    hobbyListElem.forEach(element => {
        if (hobby.split(',').includes(element.value)) {
            element.checked = true
        }
    });
}

// * Selected Gender
const selectGender = async (selector, gender) => {
    const genderListElem = document.querySelectorAll(selector)
    genderListElem.forEach(element => {
        if (element.value == gender) {
            element.checked = true
        }
    });
}

// * Create Dynamic form for update data
emails.map(async (email, index) => {
    let myData = JSON.parse(localStorage.getItem(email))
    let activeClass = index === 0 ? 'active' : ''
    const nextBtn = document.getElementById('nextBtn')
    const prevBtn = document.getElementById('prevBtn')
    if (index > 0) { nextBtn.style.display = 'inline'; prevBtn.style.display = 'inline' }
    else { nextBtn.style.display = 'none'; prevBtn.style.display = 'none' }
    let html = `<div class="carousel-item ${activeClass}">
                    <form class="container" method="post" id="${myData.email}" action="" novalidate>
                        <div class="mb-3">
                            <label for="firstName" class="form-label">First name</label>
                            <input type="text" oninput="firstNameValidation(this, 'firstNameRequiredError_${myData.email}', 'firstNameMaxLengthError_${myData.email}')" value="${myData.firstName}" class="form-control" id="firstName">
                            <div id="firstNameRequiredError_${myData.email}" class="invalid-feedback">
                                First name is required.
                            </div>
                            <div id="firstNameMaxLengthError_${myData.email}" class="invalid-feedback">
                                Max 20 character.
                            </div>

                        </div>

                        <div class="mb-3">
                            <label for="lastName" class="form-label">Last name</label>
                            <input type="text" oninput="lastNameValidation(this, 'lastNameRequiredError_${myData.email}', 'lastNameMaxLengthError_${myData.email}')" value="${myData.lastName}" class="form-control" id="lastName">
                            <div id="lastNameRequiredError_${myData.email}" class="invalid-feedback">
                                Last name is required.
                            </div>
                            <div id="lastNameMaxLengthError_${myData.email}" class="invalid-feedback">
                                Max 20 character.
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" disabled value="${myData.email}" class="form-control" id="email">
                            <div id="emailRequiredError" class="invalid-feedback">
                                Email is required.
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="phoneNo" class="form-label">Phone no.</label><br>
                            <input type="number" oninput="phoneNoValidation(this, 'phoneNoRequiredError_${myData.email}', 'phoneNoInvalidError_${myData.email}')" value="${myData.phoneNo.split(' ').slice(-1)[0]}" name="phoneNo" id="phoneNo${index}" class="form-control">
                            <div id="phoneNoRequiredError_${myData.email}" class="invalid-feedback">
                                Phone No is required.
                            </div>
                            <div id="phoneNoInvalidError_${myData.email}" class="invalid-feedback">
                                Invalid Phone No!
                            </div>
                        </div>

                        <label class="form-label">Gender</label>
                        <div class="input-group mb-3">
                            <div class="form-check ml-3">
                                <input class="form-check-input" onchange="genderValidation('gender_${myData.email}', 'genderRequiredError_${myData.email}')" type="radio" email="${myData.email}" name="gender_${myData.email}"
                                    id="male" value="male">
                                <label class="form-check-label" for="male">Male</label>
                            </div>
                            <div class="form-check ml-3">
                                <input class="form-check-input" onchange="genderValidation('gender_${myData.email}', 'genderRequiredError_${myData.email}')" type="radio" email="${myData.email}" name="gender_${myData.email}"
                                    id="female" value="female">
                                <label class="form-check-label" for="female">Female</label>
                            </div>
                            <div class="form-check ml-3">
                                <input class="form-check-input" onchange="genderValidation('gender_${myData.email}', 'genderRequiredError_${myData.email}')" type="radio" email="${myData.email}" name="gender_${myData.email}"
                                    id="other" value="other">
                                <label class="form-check-label" for="other">Other</label>
                            </div>
                            <div id="genderRequiredError_${myData.email}" class="invalid-feedback">
                                Please select your Gender!
                            </div>
                        </div>

                        <div class="row  mb-3 ">
                            <div class="col-lg-4 col-md-6 d-flex  align-items-center">
                                <div class="inline w-100 field">
                                    <label>Technology</label>
                                    <select class="label ui selection fluid dropdown" onchange="technologyValidation('technology_${myData.email}', 'technologyRequiredError_${myData.email}')" name="technology" id="technology_${myData.email}" multiple>
                                        <option value="python">Python</option>
                                        <option value="php">PHP</option>
                                        <option value="html">HTML</option>
                                        <option value="css">CSS</option>
                                        <option value="javascript">JavaScript</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div id="technologyRequiredError_${myData.email}" class="invalid-feedback">
                            Please select any one technology!
                        </div>

                        <label class="form-label">Hobby</label>
                        <div class="input-group mb-3">
                            <div class="form-check ml-3">
                                <input class="form-check-input" onclick="hobbyValidation('hobby_${myData.email}', 'hobbyRequiredError_${myData.email}')" type="checkbox" name="hobby_${myData.email}"
                                    value="cricket" id="cricket">
                                <label class="form-check-label" for="cricket">Cricket</label>
                            </div>
                            <div class="form-check ml-3">
                                <input class="form-check-input" onclick="hobbyValidation('hobby_${myData.email}', 'hobbyRequiredError_${myData.email}')" type="checkbox" name="hobby_${myData.email}"
                                    value="reading" id="reading">
                                <label class="form-check-label" for="reading">Reading</label>
                            </div>
                            <div class="form-check ml-3">
                                <input class="form-check-input" onclick="hobbyValidation('hobby_${myData.email}', 'hobbyRequiredError_${myData.email}')" type="checkbox" name="hobby_${myData.email}"
                                    value="traveling" id="traveling">
                                <label class="form-check-label" for="traveling">Traveling</label>
                            </div>
                            <div class="form-check ml-3">
                                <input class="form-check-input" onclick="hobbyValidation('hobby_${myData.email}', 'hobbyRequiredError_${myData.email}')" type="checkbox" name="hobby_${myData.email}"
                                    value="movies" id="movies">
                                <label class="form-check-label" for="movies">Movies</label>
                            </div>
                            <div id="hobbyRequiredError_${myData.email}" class="invalid-feedback">
                                Please select any one Hobby!
                            </div>
                        </div>    
                        
                        <button type="button" onclick="updateForm(this)" email="${myData.email}" class="btn btn-success">Update</button>
                    </form>
                </div>`
    sliderEditForm.innerHTML += html
    setTimeout(async () => {
        await selectGender(`input[name="gender_${myData.email}"]`, myData.gender);
        await selectHobby(`input[name="hobby_${myData.email}"]`, myData.hobby);
        await selectedTechnology(`technology_${myData.email}`, myData.technology);
        const phoneInputField = document.querySelector(`#phoneNo${index}`);
        const phoneInput = window.intlTelInput(phoneInputField, {
            utilsScript:
                "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        });
    }, 1);

})

// * First name validation
function firstNameValidation(elem, elemRequiredError, elemMaxLengthError) {
    const firstName = elem.value.trim();
    const firstNameRequiredError = document.getElementById(elemRequiredError)
    const firstNameMaxLengthError = document.getElementById(elemMaxLengthError)

    if (firstName === "") {
        firstNameMaxLengthError ? firstNameMaxLengthError.style.display = "none" : '';
        firstNameRequiredError.style.display = "block";
        return false;
    } else {
        if (firstName.length > 20) {
            firstNameRequiredError ? firstNameRequiredError.style.display = "none" : '';
            firstNameMaxLengthError ? firstNameMaxLengthError.style.display = "block" : '';
            return false;
        }
        firstNameMaxLengthError ? firstNameMaxLengthError.style.display = "none" : '';
        firstNameRequiredError ? firstNameRequiredError.style.display = "none" : '';
        return firstName;
    }
}

// * Last name validation
function lastNameValidation(elem, elemRequiredError, elemMaxLengthError) {
    const lastName = elem.value.trim();
    const lastNameRequiredError = document.getElementById(elemRequiredError);
    const lastNameMaxLengthError = document.getElementById(elemMaxLengthError)

    if (lastName === "") {
        lastNameMaxLengthError ? lastNameMaxLengthError.style.display = "none" : '';
        lastNameRequiredError.style.display = "block";
        return false;
    } else {
        if (lastName.length > 20) {
            lastNameRequiredError ? lastNameRequiredError.style.display = "none" : '';
            lastNameMaxLengthError ? lastNameMaxLengthError.style.display = "block" : '';
            return false;
        }
        lastNameMaxLengthError ? lastNameMaxLengthError.style.display = "none" : '';
        lastNameRequiredError ? lastNameRequiredError.style.display = "none" : '';
        return lastName;
    }
}

// * Phone No. validation
function phoneNoValidation(elem, elemRequiredError, elemInvalidError) {
    const phoneNo_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const phoneNo = elem.value.trim();
    const phoneNoRequiredError = document.getElementById(elemRequiredError)
    const phoneNoInvalidError = document.getElementById(elemInvalidError)

    if (phoneNo == "" || phoneNo == null) {
        phoneNoRequiredError ? phoneNoRequiredError.style.display = "block" : '';
        phoneNoInvalidError ? phoneNoInvalidError.style.display = "none" : '';
        return false
    }
    else {
        phoneNoRequiredError ? phoneNoRequiredError.style.display = "none" : '';
        if (phoneNo.match(phoneNo_regex)) {
            phoneNoInvalidError ? phoneNoInvalidError.style.display = "none" : '';
            return phoneNo
        } else {
            phoneNoInvalidError ? phoneNoInvalidError.style.display = "block" : '';
            return false
        }
    }
}

// * Gender validation
function genderValidation(selector, elemRequiredError) {
    const gender = document.querySelector(`input[name="${selector}"]:checked`)?.value
    const genderRequiredError = document.getElementById(elemRequiredError)
    if (gender == undefined || gender == null) {
        genderRequiredError ? genderRequiredError.style.display = "block" : ''
        return false
    }
    genderRequiredError ? genderRequiredError.style.display = "none" : '';
    return gender
}

// * Hobby Validation
function hobbyValidation(selector, elemRequiredError) {
    const hobbyListElem = document.querySelectorAll(`input[name="${selector}"]:checked`)
    const hobbyRequiredError = document.getElementById(elemRequiredError)
    if (hobbyListElem.length > 0) {
        let hobby = ''
        hobbyRequiredError ? hobbyRequiredError.style.display = "none" : ''
        hobbyListElem.forEach(element => {
            hobby += `${element.value},`
        });
        return hobby.replace(/.$/, '')
    } else {
        hobbyRequiredError ? hobbyRequiredError.style.display = "block" : ''
        return false
    }
}

// * Technology validation
function technologyValidation(elem, elemRequiredError) {
    const technologyOpt = document.getElementById(elem).options
    const technologyRequiredError = document.getElementById(elemRequiredError)
    if (technologyOpt.selectedIndex != -1) {
        let technology = ''
        technologyRequiredError ? technologyRequiredError.style.display = "none" : ''
        for (let i = 0; i < technologyOpt.length; i++) {
            if (technologyOpt[i].selected) {
                technology += `${technologyOpt[i].value},`
            }
        }
        return technology.replace(/.$/, '')
    }
    else {
        technologyRequiredError ? technologyRequiredError.style.display = "block" : ''
        return false
    }
}


// * Update button function call
function updateForm(elem) {
    const userEmail = elem.getAttribute('email')
    const form = document.getElementById(userEmail)

    const firstName = firstNameValidation(form.querySelector('input[id="firstName"'), null);
    const lastName = lastNameValidation(form.querySelector('input[id="lastName"'), null);
    const phoneNo = phoneNoValidation(form.querySelector('input[name="phoneNo"'), null, null);
    const gender = genderValidation(`gender_${userEmail}`, null);
    const hobby = hobbyValidation(`hobby_${userEmail}`, null);
    const technology = technologyValidation(form.querySelector('select').id, null);

    // * Validate every field  
    if (firstName && lastName && phoneNo && gender && hobby && technology) {
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: userEmail,
            phoneNo: phoneNo,
            gender: gender,
            hobby: hobby,
            technology: technology
        }
        localStorage.setItem(userEmail, JSON.stringify(data))
        window.location.href = "/dataList.html"
    }
}