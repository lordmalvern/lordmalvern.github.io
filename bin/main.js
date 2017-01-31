$(document).ready(function(){
  $('section[data-type="background"]').each(function(){
    var $bg = $(this);
    $(window).scroll(function(){
      var yPos = -($(window).scrollTop() / $bg.data('speed'));
      var coords = "50% " + yPos + "px";
      $bg.css({ backgroundPosition: coords });
    });
  });
});
