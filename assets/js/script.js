"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
// const sectionText = document.querySelector("[data-section-text]");
const sectionBtn = document.querySelector("[data-modal-section-btn]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;
    // sectionText.innerHTML = this.querySelector("[data-testimonials-section]").innerHTML;
    // sectionBtn.innerHTML = this.querySelector("[data-testimonials-sectionBtn]").innerHTML;
    testimonialsModalFunc();
  });
}

// add click event to modal close button
//modalCloseBtn.addEventListener("click", testimonialsModalFunc);
//overlay.addEventListener("click", testimonialsModalFunc);

//---------------------------------

//const filterItems = document.querySelectorAll("[data-filter-item]");
// const projectmodalTitle = document.querySelector("[project-data-modal-title]");
// const projectmodalContainer = document.querySelector("[project-data-modal-container]");
// const projectmodalCloseBtn = document.querySelector("[project-data-modal-close-btn]");
// const projectoverlay = document.querySelector("[project-data-overlay]");

// const projectModalFunc = function () {
//   projectmodalContainer.classList.toggle("active");
//   projectoverlay.classList.toggle("active");
// }

//add click event to all the projects
// for (let j = 0; j < filterItems.length; j++) {
//   filterItems[j].addEventListener("click", function(){
//     // projectmodalTitle.innerHTML = this.querySelector("[data-project-title]").innerHTML;
//     projectModalFunc();
//   });

// }

// add click event to modal close button
// projectmodalCloseBtn.addEventListener("click", projectModalFunc);
// projectoverlay.addEventListener("click", projectModalFunc);

// custom select variables
//const select = document.querySelector("[data-select]");
//const selectItems = document.querySelectorAll("[data-select-item]");
//const selectValue = document.querySelector("[data-selecct-value]");
//const filterBtn = document.querySelectorAll("[data-filter-btn]");
//
//select.addEventListener("click", function () {
//  elementToggleFunc(this);
//});

// add event in all select items
//for (let i = 0; i < selectItems.length; i++) {
//  selectItems[i].addEventListener("click", function () {
//    let selectedValue = this.innerText.toLowerCase();
//    selectValue.innerText = this.innerText;
//    elementToggleFunc(select);
//    filterFunc(selectedValue);
//  });
//}

// filter variables
//project variables

//const filterFunc = function (selectedValue) {
//  for (let i = 0; i < filterItems.length; i++) {
//    if (selectedValue === "all") {
//      filterItems[i].classList.add("active");
//    } else if (selectedValue === filterItems[i].dataset.category) {
//      filterItems[i].classList.add("active");
//    } else {
//      filterItems[i].classList.remove("active");
//    }
//  }
//};

// add event in all filter button items for large screen
//let lastClickedBtn = filterBtn[0];
//
//for (let i = 0; i < filterBtn.length; i++) {
//  filterBtn[i].addEventListener("click", function () {
//    let selectedValue = this.innerText.toLowerCase();
//    selectValue.innerText = this.innerText;
//    filterFunc(selectedValue);
//
//    lastClickedBtn.classList.remove("active");
//    this.classList.add("active");
//    lastClickedBtn = this;
//  });
//}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

const logoBtn = document.querySelectorAll("[data-nav-logo]");

for (let i = 0; i < logoBtn.length; i++) {
  logoBtn[i].addEventListener("click", function () {
    pages[0].classList.remove("active");
    pages[1].classList.add("active");
    navigationLinks[0].classList.remove("active");
    navigationLinks[1].classList.add("active");
    window.scrollTo(0, 0);
  });
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

  function sendEmail() {
    emailjs.init("FOumSOD01Zec_DIch"); // Initialize EmailJS with your user ID
    emailjs.send("service_yrg7v1v", "template_a6noxuq", {
      from_name: document.getElementById("personName").value,
      from_email: document.getElementById("personEmail").value,
      message: document.getElementById("personMessage").value
    }).then(function(response) {
      console.log("Sent successfully:", response);
      alert("Mail sent successfully");
    }).catch(function(error) {
      console.error("Failed to send mail:", error);
      alert("Failed to send mail");
    });
  }


// Get certificate elements
const thumbnails = document.querySelectorAll('.cert-image');
const fullImageContainer = document.getElementById('fullImageContainer');
const fullImage = document.getElementById('fullImage');

// Loop through all thumbnails and add click event listeners
thumbnails.forEach(thumbnail => {
    thumbnail.onclick = function() {
        fullImage.src = thumbnail.src;  // Set the full image source to the thumbnail's source
        fullImageContainer.style.display = 'flex';  // Show the full image container
    };
});

// Hide full image on click
fullImageContainer.onclick = function() {
    fullImageContainer.style.display = 'none';
};