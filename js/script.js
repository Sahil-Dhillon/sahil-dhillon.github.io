function navtoggle(x) {
    x.classList.toggle("change");
    document.getElementsByClassName('tnav')[0].classList.toggle("active");
}


window.addEventListener('scroll', function() {
    value = window.scrollY;

    bg = document.querySelector('#bg');
    bg.style.backgroundSize = 100 + value * 2 + "px";
    if (value === 1333) {

        s1 = document.querySelector('.s1');
        // s1.style.position = 'absolute'
        s1.style.overflow = 'auto'


    }
})