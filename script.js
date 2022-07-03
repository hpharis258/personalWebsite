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

 let routes = {};
 let templates = {};
 let app = document.getElementById("application");

 function home() {
    let app_div = document.getElementById("application");
    let div = document.createElement('div');
    let link = document.createElement('a');
    link.href = '#/home';
    link.innerText = 'home';

    div.innerHTML = '<h1>Home</h1>';
    div.appendChild(link);

    app_div.appendChild(div);
};

function about() {
    let app_div = document.getElementById("application");
    let div = document.createElement('div');
    let link = document.createElement('a');
    link.href = '#/about';
    link.innerText = 'about';

    div.innerHTML = '<h1>About</h1>';
    div.appendChild(link);

    app_div.appendChild(div);
};

function route (path, template) {
    if (typeof template === 'function') {
        return routes[path] = template;
    }
    else if (typeof template === 'string') {
        return routes[path] = templates[template];
    } else {
        return;
    };
};

function template(name, templateFunction)
{
    return templates[name] = templateFunction;
}

template('home', function(){
    home();
});

template('about', function(){
    about();
});

route('/', 'home');
route('/about', 'about');

function resolveRoute(route) {
    try {
        return routes[route];
    } catch (e) {
        throw new Error(`Route ${route} not found`);
    };
};

function router(evt) {
    let url = window.location.hash.slice(1) || '/';
    let route = resolveRoute(url);

    route();
};
window.addEventListener('load', router);
window.addEventListener('hashchange', router);