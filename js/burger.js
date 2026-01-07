const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const overlay = document.querySelector('.menu-overlay');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    overlay.classList.toggle('active');

    document.body.style.overflow = offScreenMenu.classList.contains('active')
        ? 'hidden'
        : '';
});

overlay.addEventListener('click', () => {
    hamMenu.classList.remove('active');
    offScreenMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
});

