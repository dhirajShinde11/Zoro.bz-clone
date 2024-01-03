var crsr =document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger:{
        trigger : "#nav",
        scroller: "body",
        start:"top -10",
        end:"top -11",
        scrub:1


    }
      
})
gsap.to("#page2",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"bottom 30%",
        end:"bottom 70%",
        scrub:2
    }

        
})
gsap.from("#trending img,#trending-in",{
    y:100,
    opacity:0,
    durantion:1,
    scrollTrigger:{
        trigger:"#trending",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:3

    }
})
gsap.from("#suggest,#card",{
    y:200,
    opacity:0,
    durantion:1,
    scrollTrigger:{
        trigger:"#suggest",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:3

    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    durantion:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:3

    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    durantion:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        markers:true,
        start:"top 30%",
        end:"top 55%",
        scrub:3

    }
})