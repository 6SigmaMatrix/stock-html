var navlink = document.getElementById("nav-links");
  var bar=document.getElementById("bar");
  bar.addEventListener('click',()=>{
    bar.classList.toggle('active');
    navlink.classList.toggle('active');
  })

function hideMenu(){
    navlink.classList.remove('active');
  }
  
$('.counter').counterUp({
                delay:30,
                time: 5000
            });

$('.owl-hero').owlCarousel({
    center: true,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        993:{
            items:3
        }
    }
});

var plan = document.querySelector('.plans-wrapper').querySelectorAll('.plans-box');
    console.log(plan);
    plan.forEach(element =>{
        element.addEventListener('mouseover',function(){
            plan.forEach(nav=>nav.classList.remove('active'))
            this.classList.add('active');
        })
    });

var planbtn = document.querySelector('.plan-choose').querySelectorAll('.slider');
var switchtext=document.querySelector('.plan-choose').querySelectorAll('.switch-text');
var switchtext1=document.querySelector('.plan-choose').querySelectorAll('.switch-text1');
console.log(planbtn);
$(planbtn).click(function() {
    $(switchtext).removeClass("active");
    $(switchtext1).addClass("active");
    $(switchtext).addClass('active');
    

});

