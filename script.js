// Project/Portfolio liks

var t2a = document.getElementById('project-link');
t2a.addEventListener('click', function(){
    t2a.innerText = "know";
    window.open("https://play.google.com/store/apps/details?id=com.yashanand.time2achieve","_blank");
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