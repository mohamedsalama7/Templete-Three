let sectionSkills = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".our-skills .skill-progress span");
window.onscroll = function(){
    if ( scrollY >= sectionSkills.offsetTop - 200){
        spans.forEach(function(ele){
            ele.style.width = ele.dataset.width;
        })
    }
    else if ( scrollY < sectionSkills.offsetTop - 500 ){
        spans.forEach(function(ele){
            ele.style.width = "0";
        })
    }

}