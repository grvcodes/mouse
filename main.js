let currentDiv= function(n){
  var i;
  console.log(n);
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("selected", "");
  }
  console.log(slideIndex,n)
  dots[n-1].className += " selected";
  x[n-1].style.display = "block";  
}

var x = document.getElementsByClassName("slides");
var dots = document.querySelectorAll(".dots");


dots.forEach((i,k)=>{
  console.log(k);
  i.addEventListener('click',()=>currentDiv(k+1))
});

var slideIndex = 1;

currentDiv(slideIndex);
