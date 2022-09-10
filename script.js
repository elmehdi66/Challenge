//---------------------slider -------------------//
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//----------------------bars----------------------------//

function toggleNav(){
  var nav = document.getElementById('nav');
  if (nav.classList.contains("nav-hidden")) {
      nav.classList.replace("nav-hidden", "nav-showed")
  } else {
      nav.classList.replace("nav-showed","nav-hidden")
  }
  
}