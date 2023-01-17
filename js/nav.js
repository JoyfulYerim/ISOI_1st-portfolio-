$(document).ready(function(){
    //PC 기준 주의
  
    //햄버거 
    $("header button").click(function(){
      $("nav,.nav_back").addClass("nav_on");
    });
    $(".nav_back").click(function(){
      $("nav,.nav_back").removeClass("nav_on");
    });
  
  
  var navChildren = $('.withWrap');
  
  if($(window).width() < 1024){
    mobileNav();
  }else{
    pcNav();
  }
  
  $(window).resize(function(){
    var w=$(this).width();
    if(w<1024){
      navChildren.off();
      $('.wrap').height('auto');
      mobileNav();
    }else{
      navChildren.children('a').off();
      navChildren.children('a').blur();
      $('.wrap').hide();
      $('.wrap').height('auto');
      pcNav();
    }
  });
  
  function mobileNav(){
    navChildren.children('a').on('click',function(e){
      e.preventDefault();
      navChildren.find('.wrap').stop().slideUp();
      $(this).next(".wrap").stop().slideDown();
    });
  }
  
  function pcNav(){
    navChildren.on({
      mouseover: function(){
        $(this).find(".wrap").stop().slideDown();
      },
      mouseout: function(){
        $(this).find(".wrap").stop().slideUp();
      }
    })
  }
 
  
});//전체끝