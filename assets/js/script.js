'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar functionality
document.addEventListener("DOMContentLoaded", function() {
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  // sidebar toggle functionality for mobile
  if (sidebar && sidebarBtn) {
    sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
  }
});



// testimonials functionality
document.addEventListener("DOMContentLoaded", function() {
  const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
  const modalContainer = document.querySelector("[data-modal-container]");
  const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
  const overlay = document.querySelector("[data-overlay]");

  // modal variables
  const modalImg = document.querySelector("[data-modal-img]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalText = document.querySelector("[data-modal-text]");

  // modal toggle function
  const testimonialsModalFunc = function () {
    if (modalContainer && overlay) {
      modalContainer.classList.toggle("active");
      overlay.classList.toggle("active");
    }
  }

  // add click event to all modal items
  if (testimonialsItem.length > 0) {
    for (let i = 0; i < testimonialsItem.length; i++) {
      testimonialsItem[i].addEventListener("click", function () {
        if (modalImg && modalTitle && modalText) {
          modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
          modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
          modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
          modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

          testimonialsModalFunc();
        }
      });
    }
  }

  // add click event to modal close button
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  }
  if (overlay) {
    overlay.addEventListener("click", testimonialsModalFunc);
  }
});



// Portfolio filter functionality removed since Portfolio section was removed



// contact form functionality
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  // add event to all form input field
  if (form && formInputs.length > 0 && formBtn) {
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
  }
});



// page navigation functionality
document.addEventListener("DOMContentLoaded", function() {
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  console.log("Navigation links found:", navigationLinks.length);
  console.log("Pages found:", pages.length);

  // add event to all nav link
  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function (e) {
      e.preventDefault();
      
      const clickedLinkText = this.innerHTML.toLowerCase();
      console.log("Clicked link:", clickedLinkText);

      // Remove active class from all pages and links
      for (let j = 0; j < pages.length; j++) {
        pages[j].classList.remove("active");
      }
      for (let j = 0; j < navigationLinks.length; j++) {
        navigationLinks[j].classList.remove("active");
      }

      // Add active class to matching page and current link
      for (let j = 0; j < pages.length; j++) {
        if (clickedLinkText === pages[j].dataset.page) {
          pages[j].classList.add("active");
          this.classList.add("active");
          window.scrollTo(0, 0);
          console.log("Activated page:", pages[j].dataset.page);
          break;
        }
      }
    });
  }
});