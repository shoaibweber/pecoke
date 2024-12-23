
var parent = document.querySelector("#fdots");
var dots = 0;

for (dots = 0; dots < 5; dots++) {
  parent.innerHTML += `<div class="dots rounded-circle"></div>`

};

var optop = document.getElementById("backtop");
var scrol = window.scrollY;

window.addEventListener("scroll" , () =>{
  var val = window.pageYOffset;
if(val>=400){
  optop.classList.add("onbacktop")
}
else{ optop.classList.remove("onbacktop")}
});





let lite = document.querySelector(".gallery .litebox")

var img1 = document.getElementById("imageone");
var img2 = document.getElementById("imagetwo");
var img3 = document.getElementById("imagethree");
var img4 = document.getElementById("imagefour");
var img5 = document.getElementById("imagefive");
var img6 = document.getElementById("imagesix");

lite.addEventListener("click", () =>{
  img1.classList.remove("scale");
  img2.classList.remove("scale");
  img3.classList.remove("scale");
  img4.classList.remove("scale");
  img5.classList.remove("scale");
  img6.classList.remove("scale");
  lite.classList.remove("opnlight");
})

img1.addEventListener("click" , () => {
  img1.classList.add("scale");
  lite.classList.add("opnlight");
  console.log(lite)

});

img2.addEventListener("click" , () => {
  img2.classList.add("scale");
  lite.classList.add("opnlight");
});

img3.addEventListener("click" , () => {
  img3.classList.add("scale");
  lite.classList.add("opnlight");
});

img4.addEventListener("click" , () => {
  img4.classList.add("scale");
  lite.classList.add("opnlight");
});

img5.addEventListener("click" ,() => {
  img5.classList.add("scale");
  lite.classList.add("opnlight");
});

img6.addEventListener("click" , () => {
  img6.classList.add("scale");
  lite.classList.add("opnlight");
});




window.addEventListener('load', function () {
  var width = window.innerWidth;
  var height = window.innerHeight;
  if (width <= 991) {

    document.getElementById("pera").innerText = "At peacock nails, we respect and celebrate our guests from all walks of life.We are an LGBTQ+ affirming salon that nurtures the bodies."
  }
  else { document.getElementById("pera").innerText = "At peacock nails, we respect and celebrate our guests from all walks of life. We are an LGBTQ+ affirming salon that nurtures the bodies and spirits of those who need a retreat from their busy lives." }
});


window.addEventListener('load', function () {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var apera = `At Peacock Nails, we respect and celebrate our guests from all walks of life. We are an LGBTQ+ affirming salon that nurtures the bodies and spirits of those who need a retreat from their busy lives.

  Our woman-owned business focuses on the health, safety, and comfort of clients. Peacock Nails’ experienced and friendly technicians serve every guest with care and are up to date on the latest nail trends and treatment standards.`
  if (width <= 991) {

    document.getElementById("aboutpera").innerText = "At Peacock Nails, we respect and celebrate our guests from all walks of life. We are an LGBTQ+ affirming salon that nurtures the bodies and spirits of those who need a retreat from their busy lives..."
  }
  else { document.getElementById("aboutpera").innerText = apera }
});

var swiper = new Swiper(".slide", {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".fdots",
    clickable: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  // Responsive breakpoints
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 20
    },


  }
});

var drop1 = document.getElementById("dropone");
var drop2 = document.getElementById("droptwo");
var drop3 = document.getElementById("dropthree");

drop1.addEventListener("mouseover" , () =>{
 var d = document.querySelector("#dropone img").attributes[0].value="img/hoverarrow.svg";});

 drop1.addEventListener("mouseout" , () =>{
  var d = document.querySelector("#dropone img").attributes[0].value="img/downarrow.svg";});

  drop2.addEventListener("mouseover" , () =>{
    var d = document.querySelector("#droptwo img").attributes[0].value="img/hoverarrow.svg";});
   
    drop2.addEventListener("mouseout" , () =>{
     var d = document.querySelector("#droptwo img").attributes[0].value="img/downarrow.svg";});

     drop3.addEventListener("mouseover" , () =>{
      var d = document.querySelector("#dropthree img").attributes[0].value="img/hoverarrow.svg";});
     
      drop3.addEventListener("mouseout" , () =>{
       var d = document.querySelector("#dropthree img").attributes[0].value="img/downarrow.svg";});


var a = "Watch Video"
var main = document.getElementById("main");
var sub = a.split("");
console.log(sub);
var b = 0;
for(b=0; b<sub.length; b++){

    main.innerHTML +=`<span class="mains">${sub[b]}</span>`;
    
};


var tl = gsap.timeline();

  tl.from(".heeroheading h1" , {y:100, opacity:0, duration:.8})
  gsap.from(".heeroshape" , {rotate:360, duration:100 , repeat:-1,})
  tl.from(".heeroimg" , {x:-100, opacity:0, duration:.8})
gsap.from(".aimg",{x:100, opacity:0, duration:1, scrollTrigger:{trigger:".aimg", scroller:"body", start:"top 400  " , end:" top 400",scrub:2}})
gsap.from(".abouttext",{x:-100, opacity:0, duration:1, scrollTrigger:{trigger:".aimg", scroller:"body" ,start:"top 300  ", end:"top 400", scrub:2 }})
gsap.from(".featuretext",{y:-100, opacity:0, duration:1, scrollTrigger:{trigger:".featuretext", scroller:"body" ,start:"top 300 " , end:"top 400", scrub:2}})
gsap.from(".featureservice .card",{y:100, opacity:0,  duration:1, stagger:.2, scrollTrigger:{trigger:".featureservice", scroller:"body" ,start:"top 100  "}})
gsap.from(".otherservice .card",{y:100, opacity:0,  duration:1, stagger:.2, scrollTrigger:{trigger:".otherservice", scroller:"body" , start:"top 200"}})
gsap.from("#main .mains",{ opacity:0,stagger:.1});

var tog = document.getElementById("togle");
tog.addEventListener("click" , () =>{ 
  tog.classList.toggle("closetog");
});

