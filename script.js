const main_link = document.querySelector('.mainLink');
const works_link = document.querySelector('.worksLink');
const inspiration_link = document.querySelector('.inspirationLink');
const links_link = document.querySelector('.linksLink');

const info = document.querySelector('#mainInfo');
const works = document.querySelector('#works');
const inspiration = document.querySelector('#inspiration');
const linksPage = document.querySelector('#linkPage');

const site = document.querySelector('.site');

const music = ['Driving', 'The Stream Hardphonk', 'Liquid', 'Lolor', 'Pervasion', 'Space', 'Tear down', 'Worldtrip'];
const buttons = document.querySelectorAll('.actionBtn');
const audio = document.querySelector('audio');
let isPlaying = 0;

const links = document.querySelectorAll('.link');
let targetID;

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

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log(btn.id);
        console.log(isPlaying)
        if(isPlaying == 0) {
            isPlaying = 1;
            btn.style.backgroundImage = "url(images/pause.png)";
            audio.src = `music/${music[btn.id]}.mp3`;
            audio.play();
        }
        else if(isPlaying == 1) {
            isPlaying = 0;
            btn.style.backgroundImage = "url(images/play.png)";
            audio.pause()
        }
    });
});



