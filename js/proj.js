window.onload=function(){
    document.getElementById("autoplay").play();
}

let add = document.getElementById("add");
let subract = document.getElementById("subtract");
let int = document.getElementById("output");
let count = 0;
add.addEventListener('click', function () {
    count += 1; alert(count);
    int.innerHTML = count;
})
subract.addEventListener('click', function () {

    count -= 1;
    if (count < 0) {
        count = 0;
    }
    int.innerHTML = count;
    alert(count);
})

function myFunction() {
    window.alert("Confirmation de votre payement!");
}

function majus() {
    var x = document.getElementById("Nom");
    x.value = x.value.toUpperCase();
    var x = document.getElementById("Prenom");
    x.value = x.value.toUpperCase();
}
function changecolor() {
    document.bgColor = "#FFFggF";
}
function checkForm() {
    var valid = true;
    if (document.mainForm.firstName.value == "") {
        alert("Please type in your first name!");
        document.getElementById("firstNameError").
            style.display = "inline";
        valid = false;
    }
    return valid;
}

function timerFunc() {
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    document.getElementById("clock").value =
        "" + hour + ":" + min + ":" + sec;
}
