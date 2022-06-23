function showMenu(y) {
    y.classList.toggle("change");
    var x = document.getElementsByClassName("menu")[0];
    x.classList.toggle("new");
    document.body.classList.add('lock-scroll');
}

function hideMenu(){
    var y = document.getElementsByClassName("menu")[0];
    y.classList.toggle("new");
    var x = document.getElementsByClassName("menu-button")[0];
    x.classList.toggle("change");
    document.body.classList.remove('lock-scroll');
}
