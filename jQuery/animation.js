
$(document).ready(function(){
  
  $(function(){
    // // image filp animation
    // $(".flip").flip({
    //     trigger: 'click'
    // })
    // text typing animation
    $('.grid-items-1 h2').typedText('Front-End Developer', 80)
    // carousel
    $('.slider').slick({
      arrows: false,
      autoplay: true,
      autoplay: 3000,
      dots: false,
      infinite: true,
      // mobileFirst: true,
    })
    // circle progress bar
    jQuery(function($) {
      $('.bootstrap').circleProgress({
        max: 100,
        value: 80,
        textFormat: 'percent',
      });
    })

    jQuery(function($) {
      $('.jQuery').circleProgress({
        max: 100,
        value: 60,
        textFormat: 'percent',
      });
    })

    jQuery(function($) {
      $('.react').circleProgress({
        max: 100,
        value: 10,
        textFormat: 'percent',
      });
    })

    jQuery(function($) {
      $('.nodeJs').circleProgress({
        max: 100,
        value: 5,
        textFormat: 'percent',
      });
    })

    jQuery(function($) {
      $('.flutter').circleProgress({
        max: 100,
        value: 40,
        textFormat: 'percent',
      });
    })
  })
});
