var head = document.head;
head.children[3].textContent = 'Register Form'
var bntColor = document.getElementById('bntColor');
bntColor.addEventListener('click', function() {
    var container = document.getElementsByClassName('container')
    var colorCode = '123456789AEFGHID';
    var hash = '#'
    for (let i = 0; i < 6; i++) {
        hash = hash + colorCode[Math.floor(Math.random() * 16)]
    }
    container[0].style.boxShadow = "1px 2px 2px 29px" + hash;

    var label = document.getElementsByTagName('label');
    for (let y = 0; y < label.length; y++) {
        label[y].style.color = hash
    }
    var h2 = document.getElementById('h2')
    var record = document.getElementById('record')
    var submit = document.getElementById('submit')
    h2.style.color = hash;
    bntColor.style.backgroundColor = hash;
    submit.style.backgroundColor = hash;
    record.style.color = hash;
});

function withoutName() {
    var courseNameArray = ['Web Design', 'Web Development', 'Apps Development', 'Graphic Design'];
    let text = '<option value="#">Select Course</option>';
    courseNameArray.forEach((i, k) => {
        text += '<option value="' +
            i + '">' + i + '</option>'
    });


    var course = document.getElementById('course');
    course.innerHTML = text
}
withoutName();

//======form Submit======//
var id = 0
var submit = document.getElementById('submit');
submit.addEventListener('click', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var radio = document.getElementById('radio').value;
    var course = document.getElementById('course').value;
    var alertPrimary = document.getElementById('alertPrimary')
        //console.log(phone)


    if (name == '' || email == '' || phone == '' || radio == '' || course == '') {
        alertPrimary.textContent = "You Cant't Avoid Those Fields";
        alertPrimary.classList.add('alert-danger');
        alertPrimary.classList.remove('alert-primary');
        alertPrimary.classList.remove('d-none');
    } else {
        var table = document.getElementById('table').getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(0);
        var newTdZero = newRow.insertCell(0)
        var newTdOne = newRow.insertCell(1)
        var newTdTwo = newRow.insertCell(2)
        var newTdThree = newRow.insertCell(3)
        var newTdFour = newRow.insertCell(4)
        var newTdFive = newRow.insertCell(5)
        id += 1
        newTdZero.innerHTML = id
        newTdOne.innerHTML = name
        newTdTwo.innerHTML = email
        newTdThree.innerHTML = phone
        newTdFour.innerHTML = radio
        newTdFive.innerHTML = course;
        alertPrimary.innerHTML = "Data Successfully Added";
        alertPrimary.classList.remove('d-none');
        var record = document.getElementById('record')
        record.textContent = "All Student Data"
    }
});

function setTime() {
    var alertPrimary = document.getElementById('alertPrimary')
    alertPrimary.classList.add('d-none')

}

setInterval(setTime, 10000)