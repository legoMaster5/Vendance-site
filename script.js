const info = document.querySelector('#main-info');
const works = document.querySelector('#works');
const inspiration = document.querySelector('#inspiration');
const linksPage = document.querySelector('#link-page');

const music = ['Driving', 'The Stream Hardphonk', 'Liquid', 'Pervasion', 'Space', 'Tear down', 'Worldtrip'];
const buttons = document.querySelectorAll('.action-btn');
const audio = document.querySelector('audio');
const inspBtn = document.querySelector('.insp-btn');

const links = document.querySelectorAll('.link');
const qrCodes = document.querySelectorAll('.qr');
// const images = document.querySelectorAll('.img');
let targetID;

let play = "", pause = "";

const media = window.matchMedia('(max-width: 1080px)');

screen.orientation.lock("portrait");

// document.documentElement.requestFullscreen().then(() => screen.orientation.lock("portrait"));

if (media.matches) {
    play = 'url(images/playMobile.png)';
    pause = 'url(images/pauseMobile.png)';
} else {
    play = 'url(images/play.png)';
    pause = 'url(images/pause.png)';
}


links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        targetID = link.getAttribute('href');
        document.querySelector(targetID).scrollIntoView(
            {
                behavior: 'smooth',
                block: 'start'
            }
        )
    })
})

qrCodes.forEach((qr) => {
    qr.addEventListener('click', () => {
        location.href = qr.id;
    })
})

// images.forEach((img) => {
//     img.addEventListener('click', () => {
//         location.href = qr.id;
//     })
// })

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        buttons.forEach((btn) => btn.style.backgroundImage = play);
        if (audio.paused) {
            btn.style.backgroundImage = pause;
            audio.src = `music/${music[btn.id]}.mp3`;
            audio.play();
        }
        else if (!audio.paused) {
            btn.style.backgroundImage = play;
            audio.pause()
        }
    });
});

let isPressed = false;

inspBtn.addEventListener('click', () => {
    if(isPressed == false) {
        // anime({
        //     targets: '.anime',
        //     opacity: [0, 1],
        //     duration: 20000,
        //     delay: 3000,
        // })
        document.getElementById('list').className = 'list';
        isPressed = true;
    }
    else {
        document.getElementById('list').className = 'list inactive';
        isPressed = false;
    }
})

$(document).ready(() => {
    $('.images').bxSlider({
        captions: true
    });
});