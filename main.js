var typed=new Typed(".text",{
    strings:["UI/UX Designer", "Graphic Designer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");




function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

function toggleNavMenu() {
    const navMenu = document.getElementById("navMenu");
    
    navMenu.classList.toggle("show");
    if(navMenu.className=='show'){
        document.body.style.overflow='hidden'
    }
    else{
        
        document.body.style.overflow='auto'
    }
    
}

function togglePlus(){
    const menuIcon = document.getElementById("menuIcon");
    const closeIcon = document.getElementById("closeIcon");

    menuIcon.classList.remove('show');
    closeIcon.classList.add('show');
}

function toggleCross(){
    const menuIcon = document.getElementById("menuIcon");
    const closeIcon = document.getElementById("closeIcon");

    closeIcon.classList.remove('show');
    menuIcon.classList.add('show');
}

function removeBg(){
    
    const navMenu = document.getElementById("navMenu");
    const menuIcon = document.getElementById("menuIcon");
    const closeIcon = document.getElementById("closeIcon");

    navMenu.classList.remove('show');
    document.body.style.overflow='auto'
    closeIcon.classList.remove('show');
    menuIcon.classList.add('show');

}