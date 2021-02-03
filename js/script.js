document.getElementById('toggle-button').addEventListener('click', function() { document.getElementById('smallnav').classList.toggle('active') })
    // const smallnavbarLinks = document.getElementsByClassName('smallnav')[0]

// toggleButton.addEventListener('click', () => {
//     smallnavbarLinks.classList.toggle('active')
// })

function navtoggle(x) {
    x.classList.toggle("change");
    document.getElementsByClassName('tnav')[0].classList.toggle("active");
}