function locomotiveAnimation(){
         gsap.registerPlugin(ScrollTrigger);

        const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
        });

        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, 
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
        });
 
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

        ScrollTrigger.refresh();
}

locomotiveAnimation();

function navAnimation(){
    gsap.to(".nav-part1 svg",{
        transform: "translateY(-100%)",
        scrollTrigger:{
            trigger: ".page1",
            scroller: ".main",
            start : "top 0%",
            end:"top -6%",
            scrub: true
        }
        
    })

     gsap.to(".nav-part2 .link",{
        transform: "translateY(-100%)",
        opacity: 0,
        duration:.5,
        scrollTrigger:{
            trigger: ".page1",
            scroller: ".main",
            start : "top 0%",
            end:"top -10%",
            scrub: true
        }
        
    })
}

navAnimation()

function logoAnimation(){
    gsap.to(".nav-part1 svg",{
        transform: "translateY(.2%)",
        scrollTrigger: {
            trigger:".page6",
            scroller:".main",
            start:"top -9%",
            end:"top 0%",
            scrub:true
        }
    })
    gsap.from(".nav-part1 svg",{
        transform: "translateY(-100%)",
        scrollTrigger: {
            trigger:".page6",
            scroller:".main",
            start:"top 0%",
            end:"top 0%",
            scrub:true
        }
    })
}

logoAnimation()

function videoAnimation(){

    const videoContainer = document.querySelector(".videoContainer");
    const cursor = document.querySelector(".cursor");

    videoContainer.addEventListener("mouseenter",()=>{
        gsap.to(cursor,{
            opacity:1,
            scale:1
        })
    })

    videoContainer.addEventListener("mouseleave",()=>{
        gsap.to(cursor,{
            opacity:0,
            scale:0
        })
    })

    videoContainer.addEventListener("mousemove",(details)=>{
        gsap.to(cursor,{
            left: details.x-50,
            top: details.y-80,
            duration: .7
        })

    })
}

videoAnimation();

function textAnimation(){
    gsap.from(".heading h1",{
        y:"50%",
        stagger: .5,
        opacity:0,
        delay:.5,
        duration: 1,   
    })

    gsap.from(".videoContainer",{
        scale: .9,
        y:"50%",
        opacity:0,
        delay:1.3,
        duration:1
    })
}

textAnimation();

function cursorAnimaton(){
    document.addEventListener("mousemove",(details)=>{
        gsap.to(".bubble",{
            left: details.x,
            top: details.y
        })
    })

    document.querySelectorAll(".child").forEach((elem)=>{
        elem.addEventListener("mouseenter",()=>{
            gsap.to(".bubble",{
            transform: "translate(-50%,-50%) scale(1)",
           })
        })
        elem.addEventListener("mouseleave",()=>{
            gsap.to(".bubble",{
            transform: "translate(-50%,-50%) scale(0)"
           })
        })
    })

    document.querySelector("#child1").addEventListener("mouseenter",()=>{
        gsap.to(".bubble",{
            backgroundColor:" #F1EFE0",
        })
    })

     document.querySelector("#child2").addEventListener("mouseenter",()=>{
        gsap.to(".bubble",{
            backgroundColor:" #FFFFFF",
        })
    })

     document.querySelector("#child3").addEventListener("mouseenter",()=>{
        gsap.to(".bubble",{
            backgroundColor:" #DFD1D1",
        })
    })

     document.querySelector("#child4").addEventListener("mouseenter",()=>{
        gsap.to(".bubble",{
            backgroundColor:"#EEEEEE",
        })
    })




}

cursorAnimaton();


