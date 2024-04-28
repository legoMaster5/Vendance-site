const main_link = document.querySelector('.mainLink');
const works_link = document.querySelector('.worksLink');
const inspiration_link = document.querySelector('.inspirationLink');
const links_link = document.querySelector('.linksLink');

const info = document.querySelector('#mainInfo');
const works = document.querySelector('#works');
const inspiration = document.querySelector('#inspiration');
const linksPage = document.querySelector('#linkPage');


main_link.addEventListener('click', () => {
    info.className = '';
    works.className = 'inactive';
    inspiration.className = 'inactive';
    linksPage.className = 'inactive';
})

works_link.addEventListener('click', () => {
    info.className = 'inactive';
    works.className = '';
    inspiration.className = 'inactive';
    linksPage.className = 'inactive';
})

inspiration_link.addEventListener('click', () => {
    info.className = 'inactive';
    works.className = 'inactive';
    inspiration.className = '';
    linksPage.className = 'inactive';
})

links_link.addEventListener('click', () => {
    info.className = 'inactive';
    works.className = 'inactive';
    inspiration.className = 'inactive';
    linksPage.className = '';
})