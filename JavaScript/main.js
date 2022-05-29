let allLinks = document.querySelectorAll("nav a");
allLinks.forEach(function(e) {
    e.onclick = function(link) {
        allLinks.forEach(e => e.classList.remove("active"))
        e.classList.add("active")
    }
});


let btn = document.querySelector(".btnup");
console.log(btn);
window.onscroll = function() {
    if (scrollY >= 900) {
        btn.style.cssText = "right:10px";
    } else {
        btn.style.cssText = "right: -40px";
    }
}
btn.onclick = function() {
    scrollTo({
        top: 0,
        left: 0,
    });
};