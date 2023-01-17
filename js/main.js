$(document).ready(function(){
  //PC 기준 주의

  /* header_slide */
   new Swiper(".swiper", {
    direction: 'horizontal',   
    autoplay: {
      delay: 1000,
    },
    loop: true, 
    slidesPerView: 1, 
    spaceBetween: 0, 
    centeredSlides: true,   
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },     
  }); 

  /* bestseller */

   $('.bestInner').slick({
    dots : true,
    arrows : true,
    variableWidth : false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
     responsive: [
      { breakpoint: 1670, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows : true
      }},
      { breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows : false
      }},
      { breakpoint: 779, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false
      }}, 
    ]
  });  

 
  //소이라인 슬라이드 
  var slider = $('.slider');     
  var timer;    
  
   $(window).on('load resize',function(){         
      clearTimeout( timer );          
      timer = setTimeout( sliderResponsive(), 1000 ); 
  })       
  function sliderResponsive(){         
      if($(window).width() > 1023){             
          slider.filter('.slick-initialized').slick('unslick');         
      }else{             
          slider.not('.slick-initialized').slick({  
              infinite : true,
              dots : true,              
              autoplay : true,               
              slidesToShow: 1,                 
              slidesToScroll: 1            
          });                         
      }       
  }//소이라인 슬라이드 

  //소이라인 .pic 
   if (window.matchMedia("(min-width: 768px)").matches) {
     $('.pic').slick({
       infinite : false,
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 2000,
      });
    }//소이라인 .pic 
    
    //타이틀 패럴렉스
    $(window).scroll(function(){      
      let t = $(this).scrollTop();
      let lineD = $('#soiline').offset().top
      let beneD = $('#benefit').offset().top
      let reviewD = $('#review').offset().top     

      // soiline

      if(t>lineD-500){
        $('#soiline h3').css({animation:'slideL 1s ease'})
        $('#soiline .title>a').css({animation:'slideL 1s ease'})
      }
      else{
        $('#soiline h3').css({animation:'slideL_clear 1s ease forwards'})
        $('#soiline .title>a').css({animation:'slideL_clear 1s ease forwards'})
      }

      /*       if(t>lineD-400){
        $('.soilineInner .banner h4').css({animation:'slideL 1s ease'})
      }
      else{
        $('.soilineInner .banner h4').css({animation:'slideL_clear 1s ease forwards'})
      } */

      // benefit

      if(t>beneD-500){
        $('#benefit h3').css({animation:'slideL 1s ease'})
        $('#benefit .title>a').css({animation:'slideL 1s ease'})
      }
      else{
        $('#benefit h3').css({animation:'slideL_clear 1s ease forwards'})
        $('#benefit .title>a').css({animation:'slideL_clear 1s ease forwards'})
      } 
      /*     if(t>beneD-400){
        $('.benefitInner div h4').css({animation:'slideL 1s ease'})
      }
      else{
        $(".benefitInner div h4").css({animation:'slideL_clear 1s ease forwards'})
      }         */ 

      // review

      if(t>reviewD-500){
        $('#review h3').css({animation:'slideL 1s ease'})
        $('#review .title p').css({animation:'slideL 1s ease'})
        $('#review .sns').css({animation:'slideL 1s ease'})
      }
      else{
        $('#review h3').css({animation:'slideL_clear 1s ease forwards'})
        $('#review .title p').css({animation:'slideL_clear 1s ease forwards'})
        $('#review .sns').css({animation:'slideL_clear 1s ease forwards'})
      }         
    });//타이틀 패럴렉스







  window.addEventListener('scroll',function(){
    let value = window.scrollY
    console.log(value);
  }); //스크롤테스트


});//전체끝

  


     













