var attackImageNumber = 0;
var attackAnimationId = 0;
var attackAnimationMarginLeft = 0;
var attackAnimationStatus = false;


function attackAnimation() {
    attackImageNumber = attackImageNumber + 1;
    attackAnimationMarginLeft = attackAnimationMarginLeft + 10;
    if (attackImageNumber == 10) {
        attackImageNumber = 0;
    }
    var a0 = document.getElementById("a0");
    a0.src = "./png/Attack__00" + attackImageNumber + ".png";
    a0.style.marginLeft = attackAnimationMarginLeft + "px";
}

function attackAnimationStart() {

    if (attackAnimationStatus == false) {
        attackAnimationId = setInterval(attackAnimation, 200);
        attackAnimationStatus = true;
    }

}

function p() {

    clearInterval(attackAnimationId);
    var a0 = document.getElementById("a0");
    attackImageNumber = 1;
    a0.src = "./png/Attack__000.png";
    attackAnimationStatus = false;
}