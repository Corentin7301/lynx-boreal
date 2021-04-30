import {
    gsap
} from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.refresh()

let speciesNameAnimation = gsap.timeline()
speciesNameAnimation
    .from(".speciesName", {
        x: 400,
        duration: 1
    }, "+=0.5")



    gsap.utils.toArray(".frame").forEach(function (e) {
        let scientificName = e.querySelectorAll(".scientificName");
        let animatedSquare1 = e.querySelectorAll(".animatedSquare1");
        let animatedSquare2 = e.querySelectorAll(".animatedSquare2");
        let firstScrollBottom = e.querySelector(".firstScrollBottom");
        
    
        let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: e,
                    pin: e,
                    scrub: 0.5,
                    start: "top top",
                    end: "+=50%",
                    // markers:true
                }
            })
            .from(scientificName, {
                scale: 0.7,
                duration: 2,
                ease: 'power2.out',
                stagger: 0.6
            }, 0)
            .from(animatedSquare1, {
                x: -550,
                duration: 2,
                ease: 'power2.out',
                stagger: 0.6
            }, 0)
            .from(animatedSquare2, {
                x: 750,
                duration: 2,
                ease: 'power2.out',
                stagger: 0.6
            }, 0)
            .from(firstScrollBottom, {
                xPercent: 150,
                duration: 5,
                ease: 'power2.out',
                stagger: 0.6
            }, 0)
            .to({}, {
                duration: 0.3
            })
    })