const block = document.querySelector('.main_sulphur');
    const img = block.querySelector('img');

    const blockTop = block.offsetTop;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      // 1:1 движение картинки вместе со страницей
      const offset = scrollY - blockTop;

      img.style.transform = `translateY(${offset}px)`;
    });