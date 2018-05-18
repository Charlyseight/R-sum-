$('a[href^="#"]').click(function(){
  var the_id = $(this).attr("href");
  $("[data-active]").attr("data-active","false");
  $("[target]").attr("target","false");
  $(this).attr("data-active", "true")
  $(the_id).attr("target","true")
  $('html, body').animate({
    scrollTop:$(the_id).offset().top-50
  }, 200);
  return false;
});

$(document).ready(function(){
    $("button").on("click",function(){
     $("nav").toggleClass("change").slideToggle();
    });
});