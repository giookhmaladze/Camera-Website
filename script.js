
let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}



function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

let slideIndexes = 1
function plusSlide(g) {
  showSlide(slideIndexes += g);
}
showSlide(slideIndexes)
function showSlide(g){
  let sld;
  let slides = document.getElementsByClassName("mySlide");
  if (g > slides.length) {slideIndexes = 1}    
  if (g < 1) {slideIndexes = slides.length}
  for (sld = 0; sld < slides.length; sld++){
    slides[sld].style.display = "none";  
  }
  slides[slideIndexes-1].style.display = "block";  
}










