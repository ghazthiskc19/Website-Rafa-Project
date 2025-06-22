const mainContainer = document.querySelector('.main-container');
const screenScroll = gsap.utils.toArray('.screen-scroll');
const textScreen = gsap.utils.toArray('h1.text-9xl, h2.text-8xl, h2.text-2xl')
const lastSection = screenScroll[screenScroll.length - 1];
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);
gsap.registerPlugin(ScrollTrigger);


let mainTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.main-container',
    pin: true,
    start: 'top top',
    end: '+=4000',
    scrub: 1
  }
})


mainTimeline.to(screenScroll, {
  xPercent: -100 * (screenScroll.length - 1),
  ease: 'none',  
  duration: 3
})

textScreen.forEach(el =>{
  const textSpan = el.querySelectorAll('.text-animate')
    gsap.from(textSpan, {
      y: 120,
      stagger: 0.2,
      scrollTrigger: {
        trigger: textScreen,
          start: "top 40%",
          end: "top 10%",
          toggleActions: "play none none none",
          scrub: 1
      },
    })
})
