const mainContainer = document.querySelector('.main-container');
const screenScroll = gsap.utils.toArray('.screen-scroll');

const lenis = new Lenis();
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

gsap.to(screenScroll, {
    scrollTrigger: {
        trigger: '.main-container',
        pin: true,
        start: 'top top',
        end: '+=3000',
        scrub: 1,
        markers: true,
    },
    xPercent: -100 * (screenScroll.length - 1),
    ease: 'none',
    duration: 5,
})

// let tl = gsap.timeline({
//     scrollTrigger : {
//         trigger: '.main-container',
//         start: "-100% center",
//         end : "100% center",
//         scrub: 1,
//         markers: true,
//         pin: true,
//     }
// });

// tl.to('.main-container', {
//     xPercent : 200,
//     duration: .5,
// })