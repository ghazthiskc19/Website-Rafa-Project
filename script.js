const mainContainer = document.querySelector('.main-container');
const screenScroll = document.querySelectorAll('.screen-scroll');
const svgScroll = document.querySelector('.svg-animate');
const lastSection = screenScroll[screenScroll.length - 1];
const tlWrapper = document.querySelector('.tl-wrapper');
const aboutWrapper = document.querySelector('.about-me');
const slideFix = gsap.utils.toArray('.about-me .slide-fix'); 

const lenis = new Lenis();
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
let scrollLength = 12;

let masterTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: tlWrapper,
    pin: true,
    start: 'top top',
    end: `+=${mainContainer.offsetWidth + (aboutWrapper.offsetWidth * slideFix.length - 1)}`,
    scrub: true,
    // markers: true,
    // markers: {startColor: "red", endColor: "red", fontSize: "18px"}, 
  }
})

masterTimeline.to(screenScroll, {
  xPercent: -100 * (screenScroll.length),
  ease: 'none',
  duration: 100
}, 'horizontal-scroll')


const svgPathFirst = screenScroll[0].querySelector('.svg-path')
masterTimeline.from(svgPathFirst, {
  drawSVG: 0,
  ease: "none",
  duration: 5
}, 'horizontal-scroll')

masterTimeline.to(lastSection, {
})

slideFix.forEach(slide => {
  masterTimeline.to(slide, {
      clipPath: "ellipse(100% 140% at 50% 50%)",
      // markers: true,
      id: "kampret",
      duration: 10
  });
});

screenScroll.forEach((textEachScreen, indexScreen) =>{
  if(textEachScreen != screenScroll[0]){
    const svgPath = textEachScreen.querySelector(".svg-path");
    const textSpans = textEachScreen.querySelectorAll('.text-animate')
    masterTimeline.from(textSpans, {
      y: 120,
      stagger: 0.2,
      scrollTrigger: {
        trigger: textEachScreen,
        containerAnimation: masterTimeline,
        start: "center right",
        end: "75% right",
        toggleActions: "play none none none",
        scrub: true,
        markers: true,
        markers: {startColor: "cyan", endColor: "cyan"},
      },
    })

    if(svgPath == null) return;
    gsap.from(svgPath, {
      drawSVG: 0,
      ease: "none",
      scrollTrigger: {
        trigger: textEachScreen,
        containerAnimation: masterTimeline,
        start: "center right",
        start: "right right",
        scrub: true,
        toggleActions: "play none none none",
        markers: {startColor: "yellow", endColor: "yellow"},
      },
    })
  }
})

const textSpans = screenScroll[0].querySelectorAll('.text-animate')
gsap.from(textSpans, {
  y: 120,
  stagger: 0.2,
  scrollTrigger: {
    trigger: screenScroll[0],
    start: "-50% 0%",
    end: "50% 00%",
    toggleActions: "play none none none",
    scrub: 1,
    markers: true,
  },
})


const yearSpan = document.querySelector('#year')
yearSpan.textContent = new Date().getFullYear();