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

console.log(dots);

var slideIndex = 1;

currentDiv(slideIndex);

function throttle(func,wait = 20, immediate=true){
  var timeout;
  return function(){
    var context = this.args = arguments;
    var later = function(){
      timeout =null;
      if(!immediate) func.apply(context,args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later,wait);
    if(callNow)func.apply(context,args);
  };
};


let moveIn = document.querySelectorAll(".moveIn");
function checkPos(e){
  
  moveIn.forEach(i => {
    const moveInAt = (window.scrollY + window.innerHeight);
    const thresValue= i.offsetTop + (i.height)/2;
    const imageBottom = i.offsetTop + i.height;
    const isHalfShown = moveInAt > thresValue
    const isNotScrollPast = window.scrollY < imageBottom;
    if(isHalfShown && isNotScrollPast){
      i.classList.add("visible");
    }else{
      i.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll',throttle(checkPos));
