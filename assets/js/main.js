

// variables for navbar menu toggle
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navbarMenuBtn = document.querySelector('.navbar-menu-btn');

// variables for navbar search toggle
const navbarForm = document.querySelector('.navbar-form');
const navbarFormCloseBtn = document.querySelector('.navbar-form-close');
const navbarSearchBtn = document.querySelector('.navbar-search-btn');


// navbar menu toggle function
function navIsActive() {
  header.classList.toggle('active');
  nav.classList.toggle('active');
  navbarMenuBtn.classList.toggle('active');
}

navbarMenuBtn.addEventListener('click', navIsActive);



// navbar search toggle function
const searchBarIsActive = () => navbarForm.classList.toggle('active');

navbarSearchBtn.addEventListener('click', searchBarIsActive);
navbarFormCloseBtn.addEventListener('click', searchBarIsActive);


// show more

shower = document.querySelector("#show")
displ = document.querySelectorAll("#displ")

shower.addEventListener('click', show)

for (var index = 0; index < displ.length; index++) {
  displ[index].style.display = "none"
}
function show() {
  if (displ[0].style.display == "none") {
      for (var index = 0; index < displ.length; index++) {
          displ[index].style.display = "block"
      }
      shower.textContent = "HIDE"
  } else {
      for (var index = 0; index < displ.length; index++) {
          displ[index].style.display = "none"
      }
      shower.textContent = "LOAD MORE"
  }
}