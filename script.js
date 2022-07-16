function modeSwitch() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    element.classList.toggle("#navBar")
 }


 let scrollToTopBtn = document.getElementById("scrollToTopBtn");
 let rootElement = document.documentElement;

 function scrollToTop()
 {
     rootElement.scrollTo(
         {
             top:0,
             behavior: "smooth"
         }
     );
 }
function home()
{
    page = document.getElementById("wholePage");
    
}

