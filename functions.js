var $ = document;

window.addEventListener("scroll", () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    let filled = $.querySelectorAll('.scroll-ind-filled');
    filled[0].style.width = scrolled + "%";
})