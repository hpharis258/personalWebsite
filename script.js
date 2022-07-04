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

 const routes = [
    {
      path: '/',
      template: '<h1>Home</h1>'
    },
    {
      path: '/about',
      template: '<h1>About</h1>',
    },
    {
      path: '/contact',
      template: '<h1>Contact</h1>',
    },
  ];

function home()
{
    page = document.getElementById("wholePage");
    
}