AOS.init();

const back = document.querySelector(".fa-circle-chevron-left");
const next = document.querySelector(".fa-circle-chevron-right");

let image = document.querySelector(".image");
let title = document.querySelector(".content-info-text h2");
let text = document.querySelector(".content-info-text p");

let images = 0;

const info = [
    {
        img: "./src/assets/gow-content-1.jpg",
        h2: "Mergulhe na História",
        p: "Desvende os mistérios de uma narrativa épica e emocional em God of War, viajando pelos mitos nórdicos ao lado de Kratos e seu filho Atreus, enquanto eles embarcam em uma jornada marcada por traições, deuses poderosos e segredos sombrios."

    },
    {
        img: "./src/assets/gow-content-2.jpg",
        h2: "Desfrute um Combate Épico",
        p: "Cada batalha é uma dança mortal, onde a habilidade estratégica se une à força bruta. Explore a diversidade de inimigos desafiadores e mergulhe em um sistema de combate robusto que evolui constantemente."
    },
    {
        img: "./src/assets/gow-content-3.jpg",
        h2: "Aprecie Cenários Deslumbrantes",
        p: "Deixe-se envolver pela grandiosidade dos nove reinos, desde as terras gélidas de Midgard até as paisagens divinas de Alfheim. Cada cenário é meticulosamente projetado, oferecendo uma experiência única e imersiva."
    }
]

function content() {
    image.src = info[images].img;
    title.innerText = info[images].h2;
    text.innerText = info[images].p;
    document.getElementById("content").style.backgroundImage = 'url(' + info[images].img + ')';
}

function previous() {
    images = (images - 1 + info.length) % info.length;
    content();
}

function after() {
    images = (images + 1) % info.length;
    content();
}

back.addEventListener('click', previous);
next.addEventListener('click', after);

const menu = document.querySelector('.menu-absolute');
const menuClosed = document.getElementById("menu");
const menuOpen = "fa-x";
const button = document.querySelector(".header-button");

function menuEvent() {
    menuClosed.classList.toggle("fa-bars");
    menuClosed.classList.toggle(menuOpen);
    menu.classList.toggle("open");
    button.classList.toggle("closed");
}

menu.addEventListener('click', menuEvent);