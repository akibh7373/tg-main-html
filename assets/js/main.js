document.addEventListener('DOMContentLoaded', () => {
    gsap.from('h1', {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: 'power3.out'
    });
});