// Wrap your code in a DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function() {
    let menuIcon = document.querySelector(".menuIcon");
    let sidenav = document.getElementById("sidenav");
    let menu = document.getElementById("menu");
    sidenav.style.right = "-250px";

    menuIcon.onclick = function(){
        if(sidenav.style.right == "-250px"){
            sidenav.style.right = "0";
        } else {
            sidenav.style.right = "-250px";
        }
    };
});
