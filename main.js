const show_nav_bar = () => {
    nav_bar = document.getElementById('nav_bar_mobile');

    if (nav_bar.style.display != "flex"){
        nav_bar.style.display = "flex"
    } else {
        nav_bar.style.display = "none"
    }
}