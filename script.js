
/*==================================================
            EDIT THESE TWO LINES ONLY
==================================================*/

const FROM_NAME = "Prathamesh";
const TO_NAME = "My Lovely Sister";

/*==================================================
                    ELEMENTS
==================================================*/

const fromName = document.getElementById("fromName");
const toName = document.getElementById("toName");

const balloonContainer = document.getElementById("balloonContainer");
const balloonSection = document.getElementById("balloonSection");
const mainContent = document.getElementById("mainContent");
const bgMusic = document.getElementById("bgMusic");

fromName.textContent = FROM_NAME;
toName.textContent = TO_NAME;

/*==================================================
                BALLOON DATA
==================================================*/

const colors = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "pink"
];

let currentBalloon = 10;

/*==================================================
            CREATE BALLOONS
==================================================*/

function createBalloons() {

    balloonContainer.innerHTML = "";

    if (currentBalloon <= 0) {
        finishCountdown();
        return;
    }

    const balloon = document.createElement("div");

    balloon.className = "balloon " + colors[Math.floor(Math.random() * colors.length)];

    balloon.textContent = currentBalloon;

    balloon.onclick = popBalloon;

    balloonContainer.appendChild(balloon);

}

/*==================================================
                POP BALLOON
==================================================*/

function popBalloon(event) {

    const balloon = event.currentTarget;

    balloon.classList.add("pop");

    balloon.style.pointerEvents = "none";

    setTimeout(() => {

        currentBalloon--;

        createBalloons();

    }, 500);

}

/*==================================================
                FINISH
==================================================*/

function finishCountdown(){

    balloonSection.style.opacity = "0";

    setTimeout(()=>{

        balloonSection.style.display="none";

        mainContent.classList.remove("hidden");

        mainContent.animate([
            {
                opacity:0,
                transform:"translateY(50px)"
            },
            {
                opacity:1,
                transform:"translateY(0)"
            }
        ],{
            duration:1000,
            fill:"forwards"
        });

        bgMusic.play().catch(()=>{});

    },700);

}
createBalloons();
/*==================================================
        PART 2 - HEARTS • STARS • RIBBONS
==================================================*/

const heartsContainer = document.getElementById("hearts");
const starsContainer = document.getElementById("stars");
const ribbonsContainer = document.getElementById("ribbons");

/*==================================================
                RANDOM NUMBER
==================================================*/

function random(min, max) {
    return Math.random() * (max - min) + min;
}

/*==================================================
                HEART SHOWER
==================================================*/

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "absolute";
    heart.style.left = random(0, 100) + "vw";
    heart.style.top = "-50px";

    heart.style.fontSize = random(16, 36) + "px";
    heart.style.color = "#ff1744";

    heart.style.opacity = random(.5, 1);

    heart.style.animation =
        `fall ${random(5,9)}s linear forwards`;

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

/*==================================================
                STARS
==================================================*/

const starColors = [
    "#FFD700",
    "#00E5FF",
    "#7CFF6B",
    "#FF6BD6",
    "#FFFFFF"
];

function createStar() {

    const star = document.createElement("div");

    star.innerHTML = "★";

    star.style.position = "absolute";

    star.style.left = random(0,100) + "vw";
    star.style.top = "-40px";

    star.style.fontSize =
        random(10,26) + "px";

    star.style.color =
        starColors[
            Math.floor(
                Math.random()*starColors.length
            )
        ];

    star.style.animation =
        `fall ${random(6,10)}s linear forwards`;

    starsContainer.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },10000);

}

/*==================================================
                RIBBONS
==================================================*/

const ribbonColors=[
"#ff4d6d",
"#ffbe0b",
"#06d6a0",
"#118ab2",
"#8338ec"
];

function createRibbon(){

    const ribbon=document.createElement("div");

    ribbon.style.position="absolute";

    ribbon.style.left=random(0,100)+"vw";

    ribbon.style.top="-60px";

    ribbon.style.width="10px";

    ribbon.style.height=random(60,120)+"px";

    ribbon.style.borderRadius="20px";

    ribbon.style.transform=
        `rotate(${random(-40,40)}deg)`;

    ribbon.style.background=
        ribbonColors[
            Math.floor(
                Math.random()*ribbonColors.length
            )
        ];

    ribbon.style.animation=
        `fall ${random(5,8)}s linear forwards`;

    ribbonsContainer.appendChild(ribbon);

    setTimeout(()=>{

        ribbon.remove();

    },8000);

}

/*==================================================
                START EFFECTS
==================================================*/

setInterval(createHeart,250);

setInterval(createStar,350);

setInterval(createRibbon,300);

/*==================================================
                FALL ANIMATION
==================================================*/

const style=document.createElement("style");

style.textContent=`

@keyframes fall{

0%{

transform:translateY(0) rotate(0deg);
opacity:1;

}

100%{

transform:
translateY(110vh)
rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);

/*==================================================
        PART 3 - CONFETTI & FINAL EFFECTS
==================================================*/

const confettiColors = [
    "#ff4d6d",
    "#ffd60a",
    "#06d6a0",
    "#00bbf9",
    "#9b5de5",
    "#ffffff",
    "#ff9f1c"
];

/*==================================================
            CONFETTI BURST
==================================================*/

function launchConfetti() {

    for (let i = 0; i < 250; i++) {

        const piece = document.createElement("div");

        piece.style.position = "fixed";
        piece.style.left = "50%";
        piece.style.top = "45%";

        piece.style.width = Math.random() * 8 + 6 + "px";
        piece.style.height = Math.random() * 12 + 8 + "px";

        piece.style.background =
            confettiColors[
                Math.floor(Math.random() * confettiColors.length)
            ];

        piece.style.borderRadius = "2px";
        piece.style.pointerEvents = "none";
        piece.style.zIndex = "9999";

        const x = (Math.random() - 0.5) * 1600;
        const y = (Math.random() - 0.5) * 1200;

        piece.animate(
            [
                {
                    transform: "translate(0,0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform: `translate(${x}px,${y}px) rotate(${Math.random()*1080}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: 2500 + Math.random() * 1500,
                easing: "ease-out",
                fill: "forwards"
            }
        );

        document.body.appendChild(piece);

        setTimeout(() => piece.remove(), 4000);

    }

}

/*==================================================
            FLOATING SPARKLES
==================================================*/

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";
    sparkle.style.left = random(10,90) + "vw";
    sparkle.style.top = random(15,85) + "vh";

    sparkle.style.fontSize = random(14,30) + "px";
    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "20";

    sparkle.animate(
        [
            {
                opacity:0,
                transform:"scale(.3)"
            },
            {
                opacity:1,
                transform:"scale(1.3)"
            },
            {
                opacity:0,
                transform:"scale(.2)"
            }
        ],
        {
            duration:2500,
            fill:"forwards"
        }
    );

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },2500);

}

/*==================================================
        GLOWING FLOATING HEARTS
==================================================*/

function floatingHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="💖";

    heart.style.position="fixed";
    heart.style.left=random(0,100)+"vw";
    heart.style.bottom="-40px";

    heart.style.fontSize=random(20,42)+"px";

    heart.style.pointerEvents="none";
    heart.style.zIndex="25";

    heart.animate(

        [

            {

                transform:"translateY(0) scale(.5)",
                opacity:0

            },

            {

                opacity:1

            },

            {

                transform:`translateY(-${random(500,900)}px) scale(1.4)`,

                opacity:0

            }

        ],

        {

            duration:6000,
            easing:"ease-out",
            fill:"forwards"

        }

    );

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

}

/*==================================================
    MODIFY finishCountdown()
==================================================*/

/*
Open your existing finishCountdown() function
(from Part 1) and add ONE line:

launchConfetti();

immediately before:

bgMusic.play();

Example:

launchConfetti();
bgMusic.play().catch(()=>{});

*/

/*==================================================
    START FINAL EFFECTS
==================================================*/

setInterval(createSparkle,700);

setInterval(floatingHeart,900);
