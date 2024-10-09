// resume link
var resumeLink = document.getElementsByClassName("resume");
resumeLink[0].addEventListener("click", function(){
    window.open("https://drive.google.com/file/d/1yJTL04HKfLu_WqkPKTreIT-ygT4Fxr6U/view?usp=sharing","_blank");
});

// add smooth scroll on click naviagition menu items

var navMenuAncherTag = document.querySelectorAll('.nav-menu a');
var interval;


for(var i=0;i<navMenuAncherTag.length;i++){
 navMenuAncherTag[i].addEventListener('click',function(event){
     event.preventDefault(); // remove default action of ancher tag
     var targetSectionId = this.textContent.trim().toLowerCase();
     var targetSection = document.getElementById(targetSectionId);
     console.log(targetSection);
    // interval = setInterval(scrollVertically,20, targetSection);

    interval = setInterval(function(){
        scrollVertically(targetSection);
    },20);

 });
}

function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top <= 0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,20);
}