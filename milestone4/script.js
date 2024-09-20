var container = document.querySelector(".container");
var getMyResume = document.querySelector("#generated-form");
var form = document.querySelector("#my-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var personName = document.querySelector("#name").value;
    var personContact = document.querySelector("#contact")
        .value;
    var personEmail = document.querySelector("#email")
        .value;
    var education = document.querySelector("#education")
        .value;
    var experience = document.querySelector("#experience")
        .value;
    var skills = document.querySelector("#skills").value;
    var generatedResumeDetail = "\n     <h1>My Dynamically Resume<h1>\n     <hr>\n      <h2>Personal Detail</h2>\n      <hr>\n      <p><b>Name:</b>".concat(personName, "</p><hr>\n      <p><b>Contact:</b>").concat(personContact, "</p><hr>\n      <p><b>Email:</b>").concat(personEmail, "</p><hr>\n\n      <h2>Education</h2><hr>\n      <p>").concat(education, "</p><hr>\n\n      <h2>Experience</h2><hr>\n      <p>").concat(experience, "</p><hr>\n\n      <h2>Skills</h2><hr>\n      <p>").concat(skills, "</p><hr>\n\n    ");
    if (getMyResume) {
        getMyResume.innerHTML = generatedResumeDetail;
    }
    else {
        alert("Please enter missing element");
    }
});
