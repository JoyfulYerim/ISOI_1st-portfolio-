$(document).ready(function(){

  $(".title span").css({animation:'slideD 1.5s ease'});
  $(".title h3").css({animation:'slideD 1.5s ease'});
  $(".title p").css({animation:'slideR 2s ease'});

/*   $("#bul").addClass("active");
  var t=0;
  $(window).scroll(function(){
    t=$(window).scrollTop();
    if(t<300){
      $("#bul").addClass("active");
    }else if(t<900){
      $("#cica").addClass("active");
    }else if(t<1700){
      $("#tea").addClass("active");
    }else if(t<2300){
      $("#acni").addClass("active");
    }
  }); */

  if($(window).width() < 1024){
    mobilesoiline();
  }else{
    pcsoiline();
  }
  
  function mobilesoiline(){
    $(window).scroll(function(){      
      let t = $(this).scrollTop();
      let bulD = $('#bul').offset().top
      let cicaD = $('#cica').offset().top
      let teaD = $('#tea').offset().top     
      let acniD = $('#acni').offset().top     
  
      if(t>bulD-400){
        $('#bul .pic').css({animation:'slideL 1s ease'})
        $('#bul .bulInner').css({animation:'slideR 2s ease'})
      }
      else{
        $('#bul .pic').css({animation:'slideL_clear 1s ease forwards'})
        $('#bul .bulInner').css({animation:'slideR_clear 2s ease forwards'})
      }
      if(t>cicaD-400){
        $('#cica .pic').css({animation:'slideR 1s ease'})
        $('#cica .cicaInner').css({animation:'slideL 2s ease'})
      }
      else{
        $('#cica .pic').css({animation:'slideR_clear 1s ease forwards'})
        $('#cica .cicaInner').css({animation:'slideL_clear 2s ease forwards'})
      }
      if(t>teaD-400){
        $('#tea .pic').css({animation:'slideL 1s ease'})
        $('#tea .teaInner').css({animation:'slideR 2s ease'})
      }
      else{
        $('#tea .pic').css({animation:'slideL_clear 1s ease forwards'})
        $('#tea .teaInner').css({animation:'slideR_clear 2s ease forwards'})
      }
      if(t>acniD-400){
        $('#acni .pic').css({animation:'slideR 1s ease'})
        $('#acni .acniInner').css({animation:'slideL 2s ease'})
      }
      else{
        $('#acni .pic').css({animation:'slideR_clear 1s ease forwards'})
        $('#acni .acniInner').css({animation:'slideL_clear 2s ease forwards'})
      }
    });
  }
  
  function pcsoiline(){
    $(window).scroll(function(){      
      let t = $(this).scrollTop();
      let bulD = $('#bul').offset().top
      let cicaD = $('#cica').offset().top
      let teaD = $('#tea').offset().top     
      let acniD = $('#acni').offset().top     
  
      if(t>bulD-500){
        $('#bul .pic').css({animation:'slideR 1s ease'})
        $('#bul .bulInner').css({animation:'slideL 2s ease'})
        $('#bul .sub').css({animation:'slideL 1.5s ease'})
      }
      else{
        $('#bul .pic').css({animation:'slideR_clear 1s ease forwards'})
        $('#bul .bulInner').css({animation:'slideL_clear 2s ease forwards'})
        $('#bul .sub').css({animation:'slideL_clear 1.5s ease forwards'})
      }
      
      if(t>cicaD-600){
        $('#cica .pic').css({animation:'slideL 1s ease'})
        $('#cica .cicaInner').css({animation:'slideR 2s ease'})
        $('#cica .sub').css({animation:'slideR 1.5s ease'})
      }
      else{
        $('#cica .pic').css({animation:'slideL_clear 1s ease forwards'})
        $('#cica .cicaInner').css({animation:'slideR_clear 2s ease forwards'})
        $('#cica .sub').css({animation:'slideR_clear 1.5s ease forwards'})
      }
      if(t>teaD-600){
        $('#tea .pic').css({animation:'slideR 1s ease'})
        $('#tea .teaInner').css({animation:'slideL 2s ease'})
        $('#tea .sub').css({animation:'slideL 1.5s ease'})
      }
      else{
        $('#tea .pic').css({animation:'slideR_clear 1s ease forwards'})
        $('#tea .teaInner').css({animation:'slideL_clear 2s ease forwards'})
        $('#tea .sub').css({animation:'slideL_clear 1.5s ease forwards'})
      }
      if(t>acniD-600){
        $('#acni .pic').css({animation:'slideL 1s ease'})
        $('#acni .acniInner').css({animation:'slideR 2s ease'})
        $('#acni .sub').css({animation:'slideR 1.5s ease'})
      }
      else{
        $('#acni .pic').css({animation:'slideL_clear 1s ease forwards'})
        $('#acni .acniInner').css({animation:'slideR_clear 2s ease forwards'})
        $('#acni .sub').css({animation:'slideR_clear 1.5s ease forwards'})
      }
      
    });
  }
 

/*   window.addEventListener('scroll',function(){
    let value = window.scrollY
    console.log(value);
  });  */
});