const mainContainer = document.querySelector('.main-container');
const screenScroll = document.querySelectorAll('.screen-scroll');
const svgScroll = document.querySelector('.svg-animate');
console.log(svgScroll);
const lastSection = screenScroll[screenScroll.length - 1];
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
let scrollLength = 12;

let mainTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.main-container',
    pin: true,
    start: 'top top',
    end: `+=${scrollLength * window.innerWidth}`,
    scrub: true
  }
})

mainTimeline.to(screenScroll, {
  xPercent: -100 * (screenScroll.length - 1),
  ease: 'none',
  duration: screenScroll.length,
}, 'horizontal-scroll')

mainTimeline.to(lastSection, {
})

const svgPathFirst = screenScroll[0].querySelector('.svg-path')
mainTimeline.from(svgPathFirst, {
  drawSVG: 0,
  ease: "none",
  duration: 2
}, 'horizontal-scroll')

let startValue;
let endValue;
screenScroll.forEach((textEachScreen, indexScreen) =>{
  if(textEachScreen != screenScroll[0]){
    const textScreen = textEachScreen.querySelectorAll('.text-9xl, .text-8xl, .text-2xl, .text-5xl')
    const svgPath = textEachScreen.querySelector(".svg-path");
    console.log(svgPath)
    textScreen.forEach(el =>{
      const textSpans = el.querySelectorAll('.text-animate')
      if(indexScreen == 1){
        startValue = "40% 80%";
        endValue = "70% 80%";
      }else if(indexScreen == 2){
        startValue = "10% 90%";
        endValue = "70% 90%";
      }else if(indexScreen == 3){
        startValue = "30% 90%"
        endValue = "100% 90%"
      }else if(indexScreen == 4){
        startValue = "10% 90%"
        endValue = "80% 90%"
      }else if(indexScreen == 5){
        startValue = "10% 80%"
        endValue = "80% 80%"  
      }
      gsap.from(textSpans, {
        y: 120,
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
          containerAnimation: mainTimeline,
          start: startValue,
          end: endValue,
          toggleActions: "play none none none",
          scrub: true,
          markers: true
        },
      })
    })

    if(svgPath == null) return;
    if(indexScreen == 2){
      startValue = "50% 80%";
      endValue = "100% 80%";
    }else if(indexScreen == 4){ 
      startValue = "-50% center";
      endValue = "30% center";
    }else if(indexScreen == 5){ 
      startValue = "-20% center";
      endValue = "40% center";
    }
    gsap.from(svgPath, {
      drawSVG: 0,
      ease: "none",
      scrollTrigger: {
        markers: true,
        trigger: textEachScreen,
        containerAnimation: mainTimeline,
        start: startValue,
        end: endValue,
        scrub: true,
        toggleActions: "play none none none",
      },
    })
  }
})

const textScreenOne = screenScroll[0].querySelectorAll('.text-9xl, .text-8xl, .text-2xl, .text-5xl')
textScreenOne.forEach(el =>{
const textSpans = el.querySelectorAll('.text-animate')
gsap.from(textSpans, {
    y: 120,
    stagger: 0.2,
    scrollTrigger: {
      trigger: el,
      start: "-150% 30%",
      end: "150% 30%",
      toggleActions: "play none none none",
      scrub: 1
    },
  })
})