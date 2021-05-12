const burgerMenu = document.querySelector(".burgerMenu");
const nav = document.querySelector(".nav-links");
const names = document.querySelector("#names");
const errNames = document.querySelector("#errNames");
const email = document.querySelector("#email");
const errEmail = document.querySelector("#errEmail");
const phone = document.querySelector("#phone");
const errPhone = document.querySelector("#errPhone");
const subject = document.querySelector("#subject");
const errSubject = document.querySelector("#errSubject");
const brief = document.querySelector("#brief");
const errBrief = document.querySelector("#errBrief");
const errOption = document.querySelector("#errOption");
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

const navSlide = () => {
  burgerMenu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navSlide();

function submitForm() {
  if (names.value === "") {
    errNames.style.display = "block";
    errNames.innerText = "Please fill out this field.";
    setTimeout(() => {
      errNames.style.display = "none";
      errNames.innerText = "";
    }, 3000);
    return;
  }

  if (email.value === "") {
    errEmail.style.display = "block";
    errEmail.innerText = "Please fill out this field.";
    setTimeout(() => {
      errEmail.style.display = "none";
      errEmail.innerText = "";
    }, 3000);
    return;
  }

  if (!emailRegex.test(email.value)) {
    errEmail.style.display = "block";
    errEmail.innerText = "Invalid email address.";
    setTimeout(() => {
      errEmail.style.display = "none";
      errEmail.innerText = "";
    }, 3000);
    return;
  }

  if (phone.value === "") {
    errPhone.style.display = "block";
    errPhone.innerText = "Please fill out this field.";
    setTimeout(() => {
      errPhone.style.display = "none";
      errPhone.innerText = "";
    }, 3000);
    return;
  }

  if (!phoneRegex.test(phone.value)) {
    errPhone.style.display = "block";
    errPhone.innerText = "Only numbers and phone characters are accepted.";
    setTimeout(() => {
      errPhone.style.display = "none";
      errPhone.innerText = "";
    }, 3000);
    return;
  }

  if (subject.value === "") {
    errSubject.style.display = "block";
    errSubject.innerText = "Please fill out this field.";
    setTimeout(() => {
      errSubject.style.display = "none";
      errSubject.innerText = "";
    }, 3000);
    return;
  }

  if (brief.value === "") {
    errBrief.style.display = "block";
    errBrief.innerText = "Please fill out this field.";
    setTimeout(() => {
      errBrief.style.display = "none";
      errBrief.innerText = "";
    }, 3000);
    return;
  }
  window.location.href = "./enquiry.html";
}

function submitRadioForm() {
  if (names.value === "") {
    errNames.style.display = "block";
    errNames.innerText = "Please fill out this field.";
    setTimeout(() => {
      errNames.style.display = "none";
      errNames.innerText = "";
    }, 3000);
    return;
  }

  if (email.value === "") {
    errEmail.style.display = "block";
    errEmail.innerText = "Please fill out this field.";
    setTimeout(() => {
      errEmail.style.display = "none";
      errEmail.innerText = "";
    }, 3000);
    return;
  }

  if (!emailRegex.test(email.value)) {
    errEmail.style.display = "block";
    errEmail.innerText = "Invalid email address.";
    setTimeout(() => {
      errEmail.style.display = "none";
      errEmail.innerText = "";
    }, 3000);
    return;
  }

  if (phone.value === "") {
    errPhone.style.display = "block";
    errPhone.innerText = "Please fill out this field.";
    setTimeout(() => {
      errPhone.style.display = "none";
      errPhone.innerText = "";
    }, 3000);
    return;
  }

  if (!phoneRegex.test(phone.value)) {
    errPhone.style.display = "block";
    errPhone.innerText = "Only numbers and phone characters are accepted.";
    setTimeout(() => {
      errPhone.style.display = "none";
      errPhone.innerText = "";
    }, 3000);
    return;
  }

  var group = document.radioForm.test;
  for (var i = 0; i < group.length; i++) {
    if (group[i].checked) break;
  }
  if (i === group.length)
    return (
      (errOption.style.opacity = "1"),
      setTimeout(() => {
        errOption.style.opacity = "0";
      }, 3000)
    );

  if (brief.value === "") {
    errBrief.style.display = "block";
    errBrief.innerText = "Please fill out this field.";
    setTimeout(() => {
      errBrief.style.display = "none";
      errBrief.innerText = "";
    }, 3000);
    return;
  }

  window.location.href = "./enquiry.html";
}
