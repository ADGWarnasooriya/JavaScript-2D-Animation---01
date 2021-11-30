var n1 = 0;
var p1 = 0;
var mL1 = 0;


function m() {
    n1 = n1 + 1;
    mL1 = mL1 + 10;
    if (n1 == 10) {
        n1 = 0;
    }
    var a0 = document.getElementById("a0");
    a0.src = "./png/Attack__00" + n1 + ".png";
    a0.style.marginLeft = mL1 + "px";
}

function n() {
    p1 = setInterval(m, 200);
}

function p() {

    clearInterval(p1);
    var a0 = document.getElementById("a0");
    a0.src = "./png/Attack__000.png";
    n1 = 1;
}