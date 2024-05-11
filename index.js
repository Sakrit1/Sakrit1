let modeBtn = document.getElementById("theme-toggle");
modeBtn.onclick = function(){
    document.body.classList.toggle('light-mode');
    if(document.body.style.backgroundColor === "hsl(0, 100%, 94%)"){
        modeBtn.style.backgroundColor="hsl(0, 100%, 94%)";
    }
    else{
        modeBtn.style.backgroundColor = "black";
    }
}

let mobileMode = document.getElementById("mobile-theme");
mobileMode.onclick = function(){
    document.body.classList.toggle('light-mode');

}


const mobileBtn = document.getElementById("mobileBtn");
const mobileNav = document.getElementById("mobile_menu");
const mobileLinks = document.querySelectorAll('.mobile-nav__link')
let isMobileNavOpen = false;
mobileBtn.addEventListener('click', ()=>{
    isMobileNavOpen = !isMobileNavOpen;
    if(isMobileNavOpen){
        mobileNav.style.display = "flex";
        document.body.style.overflowY ='hidden';
    }else{
        mobileNav.style.display = "none";
        document.body.style.overflowY ='auto';
    }

    
});

mobileLinks.forEach(link=>{
    link.addEventListener('click', ()=>{
        isMobileNavOpen = false;
        mobileNav.style.display = "none";
        document.body.style.overflowY = "auto";
    })


})
let isMobileThemeD = true;
mobileMode.addEventListener('click', () => {
    isMobileThemeD = !isMobileThemeD;
    if(!isMobileThemeD){
     
     mobileNav.style.backgroundColor = "rgb(232, 219, 219)";
    }
   else{
    mobileNav.style.backgroundColor = "black";
   }
})