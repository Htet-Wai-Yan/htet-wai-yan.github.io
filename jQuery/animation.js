
$(document).ready(function(){
  
  $(function(){
    // image filp animation
    $(".flip").flip({
        trigger: 'click'
    })
    // text typing animation
    $('.greeting h3').typedText('I am a Front-End Developer', 80)
  });
});
