function loco(){
    gsap.registerPlugin(ScrollTrigger);
  
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
        
  }
  
  
  loco();
  


  gsap.to('.upper',{
    scrollTrigger:{
        trigger:".upper",
        scroller:'#main',
        // pin: true,
        start:"top 0%",
        scrub:true,
        // markers:true
    },
    // y:-100,
    height: 0,
    // width: 0
  })

  gsap.to('.dipper img',{
    scrollTrigger:{
        trigger:".dipper img",
        scroller:'#main',
        // pin: true,
        start:"top 50%",
        scrub:true,
        // markers:true
    },
    y:-250,
    // ease: Expo.easeInOut
    // height: 0,
    // width: 0
  })



  gsap.to('.dipper',{
    scrollTrigger:{
        trigger:".dipper",
        scroller:'#main',
        pin: true,
        start:"top 50%",
        // end:"top -200%",
        scrub:true,
        // markers:true
    },
    // y: 100,
    ease:Expo.easeInOut,
    height: 0,
  })


  gsap.to('#section1',{
    scrollTrigger:{
      trigger:'#section1',
      scroller:"#main",
      start: "top 0",
      // end:'top 600%',
      pin: true,
      // markers: true,
    }
  })



  gsap.to('.threeupper',{
    scrollTrigger:{
        trigger:".threeupper",
        scroller:'#main',
        // pin: true,
        start:"top -10%",
        scrub:true,
        // markers:true
    },
    // y:-100,
    height: 0,
    // width: 0
  })




  gsap.to('.threedipper',{
    scrollTrigger:{
        trigger:".threedipper",
        scroller:'#main',
        pin: true,
        start:"top 50%",
        // end:"top -200%",
        scrub:true,
        // markers:true
    },
    // y: 100,
    // ease:Expo.easeInOut,
    height: 0,
  })


  gsap.to('#section3',{
    scrollTrigger:{
      trigger:'#section3',
      scroller:"#main",
      start: "top 0",
      // end:'top 600%',
      pin: true,
      // markers: true,
    }
  })

  
  gsap.from('.fourbottom',{
    scrollTrigger:{
      trigger:'.fourbottom',
      scroller:"#main",
      start: "top 130%",
      // markers: true,
      scrub: true
    },
    // y: 350,
    height:0

  })


var imgcover = document.querySelectorAll('.imgcover')


imgcover.forEach(imgcover=>{
  gsap.to(imgcover,{
    scrollTrigger:{
      trigger:imgcover,
      scroller:"#main",
      start: "top 60%",
      // markers: true,
      // scrub: true
    },
    // y: 350,
    height:0,
    duration:1.3  ,
    ease:Expo.easeInOut
  
  })

})




gsap.from('.round1',{
  rotate:'-15deg',
  scrollTrigger:{
    scroller:'#main',
    trigger:'.round1',
    start: 'top 130%',
    // markers:true,
    scrub: 6
  },

})

gsap.from('.round2',{
  rotate:'-15deg',
  scrollTrigger:{
    scroller:'#main',
    trigger:'.round2',
    start: 'top 130%',
    // markers:true,
    scrub: 6
  },

})

gsap.from('.round3',{
  rotate:'-15deg',
  scrollTrigger:{
    scroller:'#main',
    trigger:'.round3',
    start: 'top 130%',
    // markers:true,
    scrub: 6
  },

})


gsap.from('#mars',{
  rotate:'23deg',
  scrollTrigger:{
    scroller:'#main',
    trigger:'#mars',
    start: 'top 130%',
    // markers:true,
    scrub: 6
  },

})


gsap.from('#mooncircle',{
  rotate:'23deg',
  scrollTrigger:{
    scroller:'#main',
    trigger:'#mooncircle',
    start: 'top 130%',
    // markers:true,
    scrub: 6
  },

})


gsap.from('#eathorbit',{
  rotate:'23deg',
  scrollTrigger:{
    scroller:'#main',
    trigger:'#eathorbit',
    start: 'top 130%',
    // markers:true,
    scrub: 6
  },

})


gsap.from('#spacestation',{
  rotate:'23deg',
  scrollTrigger:{
    scroller:'#main',
    trigger:'#spacestation',
    start: 'top 130%',
    // markers:true,
    scrub: 4
  },

})







  const lerp = (x, y, a) => x * (1 - a) + y * a;
  var cityimg = document.querySelector(".moon")
  
  // cityimg.forEach(cityimg => {
    cityimg.addEventListener("mousemove",function(dets){
      var dims = cityimg.getBoundingClientRect()
          // console.log(dims);
          var xstart = dims.x
          var xend = dims.x + dims.width;
    
          var zeroone = gsap.utils.mapRange(xstart,xend ,0 ,1, dets.clientX)
    
         gsap.to(".moon",{
              x:  lerp(-70,70,zeroone),
              duration:.3
         })
    })  




