document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
  } );
  
  splide.mount();