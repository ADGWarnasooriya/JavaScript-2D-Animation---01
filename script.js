var n1 = 0;

function m() {
    n1 = n1 + 1;
    if (n1 == 10) {
        n1 = 0;
    }
    var a0 = document.getElementById("a0");
    a0.src = "./png/Attack__00" + n1 + ".png";
}