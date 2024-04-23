let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  let nextButton = document.getElementById('next-btn')
  if(slideIndex == 8){
    nextButton.innerText = "Submit"
} else{
    nextButton.innerText = "Next"
}
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  
}

function SelectOption(n) {
  const button = document.getElementsByClassName("button");
  
  let clicked;
  clicked = button[n];
  for (let i = 0; i < button.length; i++) {
    button[i].classList.remove("selected")
  }
  clicked.classList.add("selected")
  
}
