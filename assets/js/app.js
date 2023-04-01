tns({
    container: '.slider__element',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    autoplayButtonOutput: false,
    navPosition: 'bottom',
    mouseDrag: true
});

let navigation = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 15) {
        navigation.classList.add('navbar--move')
    } else {
        navigation.classList.remove('navbar--move')
    }
})