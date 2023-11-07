// TESTIMONIAL SLIDER
    $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    margin:10,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:false,
        }
    }
});
// MODUL SLIDER

$('.multiple-items').slick({
    infinite: true,
    nav:true,
    slidesToShow: 4,
    slidesToScroll: 4
  });

// COUNTER

function numCounter(tagId,maxCount,speed){
var initialNumber = 0;
function counter(){
    document.getElementById(tagId).innerHTML = initialNumber;
    ++initialNumber;
}
var counterDelay = setInterval(counter,speed);
function totalTime(){
    clearInterval(counterDelay);
}
var totalPeriod = speed * (maxCount);  
setTimeout(totalTime, totalPeriod);
}
numCounter("client",1539,10);
numCounter("project",2125,10);
numCounter("award",3127,10);
numCounter("member",9533,10);

$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $("header").addClass("b-active");
        $(".back-to-top").fadeIn();
        $("header a").addClass("a-active");
     }
    else {
        $("header").removeClass("b-active");
        $("header a").removeClass("a-active");
        $(".back-to-top").fadeOut();
       }
});
$(window).ready(function(){
    $(".back-to-top").click(function(){
        $("html").animate({scrollTop: '0'});
      });

});