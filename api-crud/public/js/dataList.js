let keys = Object.keys(localStorage), i = keys.length;
while (i--) {
    value = JSON.parse(localStorage.getItem(keys[i]))
    let html = `<tr draggable="true" ondragstart="start()" ondragover="dragover()">
                    <td><input class="form-check-input" type="checkbox" onclick="selectData()" name="checkbox" value="${value.email}" id="${value.email}"></td>
                    <td>${value.firstName}</td>
                    <td>${value.lastName}</td>
                    <td>${value.email}</td>
                    <td>${value.gender}</td>
                    <td>${value.hobby}</td>
                    <td>${value.technology}</td>
                    <td><a type="button" href="/viewData.html?email=${value.email}" class="btn btn-primary" >View</a></td>
                </tr>`
    document.getElementById('tableBodyData').innerHTML += html;
}
function start() {
    row = event.target
}
function dragover() {
    var e = event;

    let children = Array.from(e.target.parentNode.parentNode.children);
    if (children.indexOf(e.target.parentNode) > children.indexOf(row)) {
        e.target.parentNode.after(row);
    }
    else {
        e.target.parentNode.before(row);
    }

}


function selectData() {
    const selectedElm = document.querySelectorAll('input[name="checkbox"]:checked')
    if (selectedElm.length == 0) {
        document.getElementById("editBtn").disabled = true
        document.getElementById("deleteBtn").disabled = true
    }
    else if (selectedElm.length == 1) {
        document.getElementById("editBtn").disabled = false
        document.getElementById("deleteBtn").disabled = false
    }
    else {
        // document.getElementById("editBtn").disabled = true
        document.getElementById("deleteBtn").disabled = false
    }
}

function deleteData() {
    const selectedElm = document.querySelectorAll('input[name="checkbox"]:checked')
    selectedElm.forEach(element => {
        localStorage.removeItem(element.value)
        window.location.reload()
    });
}

// function editData() {
//     const selectedElm = document.querySelectorAll('input[name="checkbox"]:checked')
//     selectedElm.forEach(element => {
//         window.location = `/editData.html?email=${element.value}`
//     });
// }

function editData() {
    const selectedElm = document.querySelectorAll('input[name="checkbox"]:checked')
    let emails = ''
    selectedElm.forEach((element, index) => {
        emails += `${element.value},`
    });
    window.location = `/slider.html?emails=${emails.replace(/.$/, '')}`
}