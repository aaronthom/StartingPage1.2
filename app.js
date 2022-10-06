

const clickMe = document.querySelector('.robot');
const list = document.querySelector('ul');
const cursor = document.querySelector('.cursor');

clickMe.addEventListener('click', () => {
    list.classList.toggle('appear');
    cursor.classList.toggle('disappear');
});