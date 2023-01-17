$(document).ready(function(){

  $(".title span").css({animation:'slideD 1.5s ease'});
  $(".title h3").css({animation:'slideD 1.5s ease'});
  $(".title p").css({animation:'slideR 2s ease'});


  $(window).scroll(function(){      
    let t = $(this).scrollTop();
    let testD = $('#test').offset().top
    let samD = $('#sam').offset().top
    let memD = $('#mem').offset().top     


    if(t>testD-500){
      $('#test .sub').css({animation:'slideL 1s ease'})
    }
    else{
      $('#test .sub').css({animation:'slideL_clear 1s ease forwards'})
    }


    if(t>samD-600){
      $('#sam .sub').css({animation:'slideL 1s ease'})
    }
    else{
      $('#sam .sub').css({animation:'slideL_clear 1s ease forwards'})
    }
    if(t>samD+200){
      $('#sam .dia span').eq(0).css({animation:'slideL 1s ease'})
      $('#sam .dia span').eq(1).css({animation:'slideR 1.2s ease'})
      $('#sam .dia span').eq(2).css({animation:'slideL 1.4s ease'})
    }
    else{
      $('#sam .dia span').eq(0).css({animation:'slideL_clear 1s ease forwards'})
      $('#sam .dia span').eq(1).css({animation:'slideR_clear 1.2s ease forwards'})
      $('#sam .dia span').eq(2).css({animation:'slideL_clear 1.4s ease forwards'})
    }


    if(t>memD-600){
      $('#mem .sub').css({animation:'slideL 1s ease'})
    }
    else{
      $('#mem .sub').css({animation:'slideL_clear 1s ease forwards'})
    }
  });
  if($(window).width() > 768){
    pcbenefit();
  }

  //멤버십 모바일 슬라이드 
  var slidemem = $('.memInner');     
  var timer;    
  
   $(window).on('load resize',function(){         
      clearTimeout( timer );          
      timer = setTimeout( sliderResponsive(), 1000 ); 
    })       
    function sliderResponsive(){         
      if($(window).width() < 768){           
        slidemem.not('.slick-initialized').slick({  
          infinite : true,      
          autoplay : true,               
          slidesToShow: 1,                 
          slidesToScroll: 1            
      });        
      }else{             
        slidemem.filter('.slick-initialized').slick('unslick');          
      }       
    }//소이라인 슬라이드 
  function pcbenefit(){
    $(window).scroll(function(){      
      let t = $(this).scrollTop();
      let testD = $('#test').offset().top
      let samD = $('#sam').offset().top
      let memD = $('#mem').offset().top     
 
      if(t>memD-400){
        $('#mem .memInner b').eq(0).css({animation:'slideL 1s ease'})
        $('#mem .memInner .des').eq(0).css({animation:'slideR 1s ease'})
        $('#mem .memInner b').eq(1).css({animation:'slideR 1s ease'})
        $('#mem .memInner .des').eq(1).css({animation:'slideL 1s ease'})
      }
      else{
        $('#mem .memInner b').eq(0).css({animation:'slideL_clear 1s ease forwards'})
        $('#mem .memInner .des').eq(0).css({animation:'slideR_clear 1s ease forwards'})
        $('#mem .memInner b').eq(1).css({animation:'slideR_clear 1s ease forwards'})
        $('#mem .memInner .des').eq(1).css({animation:'slideL_clear 1s ease forwards'})
      }
      if(t>memD-300){
        $('#mem .memInner b').eq(2).css({animation:'slideL 2s ease'})
        $('#mem .memInner .des').eq(2).css({animation:'slideR 2s ease'})
        $('#mem .memInner b').eq(3).css({animation:'slideR 2s ease'})
        $('#mem .memInner .des').eq(3).css({animation:'slideL 2s ease'})
      }
      else{
        $('#mem .memInner b').eq(2).css({animation:'slideL_clear 1s ease forwards'})
        $('#mem .memInner .des').eq(2).css({animation:'slideR_clear 1s ease forwards'})
        $('#mem .memInner b').eq(3).css({animation:'slideR_clear 1s ease forwards'})
        $('#mem .memInner .des').eq(3).css({animation:'slideL_clear 1s ease forwards'})
      }
      if(t>memD-100){
        $('#mem .memInner b').eq(4).css({animation:'slideL 3s ease'})
        $('#mem .memInner .des').eq(4).css({animation:'slideR 3s ease'})
        $('#mem .memInner b').eq(5).css({animation:'slideR 3s ease'})
        $('#mem .memInner .des').eq(5).css({animation:'slideL 3s ease'})
      }
      else{
        $('#mem .memInner b').eq(4).css({animation:'slideL_clear 1s ease forwards'})
        $('#mem .memInner .des').eq(4).css({animation:'slideR_clear 1s ease forwards'})
        $('#mem .memInner b').eq(5).css({animation:'slideR_clear 1s ease forwards'})
        $('#mem .memInner .des').eq(5).css({animation:'slideL_clear 1s ease forwards'})
      }
    });
  }
});