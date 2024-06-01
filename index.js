window.addEventListener('scroll', function(){
    var navbar = document.getElementById('navbar');
    if (window.scrollY > ) { // You can adjust the value based on when you want the effect to happen
        navbar.classList.add('navbar-scrolled');
        navbar.classList.remove('navbar-normal');
    } else {
        navbar.classList.remove('navbar-scrolled');
        navbar.classList.add('navbar-normal');
    }
});