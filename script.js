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
    var ninjaImageTag = document.getElementById("ninjaImageTag");
    ninjaImageTag.src = "./png/Attack__00" + attackImageNumber + ".png";
    ninjaImageTag.style.marginLeft = attackAnimationMarginLeft + "px";
}

function attackAnimationStart() {

    if (attackAnimationStatus == false) {
        attackAnimationId = setInterval(attackAnimation, 200);
        attackAnimationStatus = true;
    }

}

function attackAnimationStop() {

    clearInterval(attackAnimationId);
    var ninjaImageTag = document.getElementById("ninjaImageTag");
    attackImageNumber = 1;
    ninjaImageTag.src = "./png/Attack__000.png";
    attackAnimationStatus = false;
}