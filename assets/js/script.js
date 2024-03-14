const ketik = new Typed(".typing", {
    strings: ["WEB DEVELOPER", "FRONTEND DEVELOPER", "UI DESIGNER"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    showCursor: true,
    cursorChar: '|',
});

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