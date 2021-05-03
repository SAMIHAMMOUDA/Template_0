/*global $, alert ,consoale*/
 $(function(){

    'use strict';

      $(".arrow i").click(function(){
        $('html , body').animate({
          scrollTop:$(".feature").offset().top
        },1000);
    });


    // Our Work 
    $('.show-more').click(function(){
      $('.hidden').fadeIn(2000)
    });


    // Testimonials
   var  leftArrow=$('.testimonials .fa-chevron-left') ;
   var  rightArrow=$('.testimonials .fa-chevron-right') ;

    function checkClient(){
      if($('.client:first').hasClass('active')){
        leftArrow.fadeOut()
      }else{
        leftArrow.fadeIn()
      }

      if($('.client:last').hasClass('active')){
        rightArrow.fadeOut()
      }else{
        rightArrow.fadeIn()
      }
    };
    checkClient();

    $('.testimonials i').click(function(){
      if($(this).hasClass('fa-chevron-right')){
        $('.testimonials .active').fadeOut(100,function(){
          $(this).removeClass('active').next('.client').addClass('active').fadeIn();
          checkClient();
        });
      }else{
        $('.testimonials .active').fadeOut(100,function(){
          $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
          checkClient();
        });
      }
    });


    // Scroll
      $("body").niceScroll({
        cursorcolor: "#f7600e",
        cursorwidth: "10px",
      });
  
      ////////////////////////////////////////
      $('.links').click(function(){
        $('.navbar ul').slideToggle(1000)
      });


      ////////////////////////////////////////

  });