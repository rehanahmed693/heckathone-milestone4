let container = document.querySelector(".container") as HTMLDivElement;
let getMyResume = document.querySelector("#generated-form") as HTMLDivElement;
let form = document.querySelector("#my-form") as HTMLFormElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  let personName = (document.querySelector("#name") as HTMLInputElement).value;
  let personContact = (document.querySelector("#contact") as HTMLInputElement)
    .value;
  let personEmail = (document.querySelector("#email") as HTMLInputElement)
    .value;
  let education = (document.querySelector("#education") as HTMLInputElement)
    .value;
  let experience = (document.querySelector("#experience") as HTMLInputElement)
    .value;
  let skills = (document.querySelector("#skills") as HTMLInputElement).value;

  let generatedResumeDetail = `
     <h1>My Dynamically Resume<h1>
     <hr>
      <h2>Personal Detail</h2>
      <hr>
      <p><b>Name:</b>${personName}</p><hr>
      <p><b>Contact:</b>${personContact}</p><hr>
      <p><b>Email:</b>${personEmail}</p><hr>

      <h2>Education</h2><hr>
      <p>${education}</p><hr>

      <h2>Experience</h2><hr>
      <p>${experience}</p><hr>

      <h2>Skills</h2><hr>
      <p>${skills}</p><hr>

    `;

  if (getMyResume) {
    getMyResume.innerHTML = generatedResumeDetail;
  } else {
    alert("Please enter missing element");
  }
});
