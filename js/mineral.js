document.addEventListener('DOMContentLoaded', () => {
  const block = document.querySelector('.main_mineral');
  const img = block.querySelector('img');

  const blockTop = block.offsetTop;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const offset = scrollY - blockTop;

    img.style.transform = `translateY(${offset}px)`;
  });
});
