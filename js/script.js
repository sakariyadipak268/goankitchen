if(window.devicePixelRatio >= 1.2){
  var elems = document.getElementsByTagName('*');
  for(var i=0;i < elems.length;i++){
  var attr = elems[i].getAttribute('data-2x');
    if(attr){
      elems[i].style.cssText += 'background-image: url('+attr+')';
    }
  }
}
/*=============================================================================================*/
/* Ready Function START Here*/
jQuery(document).ready(function() {
	'use strict';
	 
	jQuery(window).scroll(function(){
	  var sticky = jQuery('#header'),
		  scroll = jQuery(window).scrollTop();
	
	  if (scroll >= 30) sticky.addClass('fixed');
	  else sticky.removeClass('fixed');
	});
	
	if($('.select').length > 1){
		$('.select').niceSelect();
	}
	
	jQuery('body').on('click','.toggle--menu',function(){
		jQuery(this).toggleClass('change');
		jQuery('.main-menu').slideToggle('change');		
	});
	
	jQuery('.home-slider-slick').slick({
	 
	  infinite: true,
	  speed:1500,
	  centerPadding: '30',
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			 
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow:1,
			slidesToScroll:1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
	}); 
	
	
	jQuery('.products-slider').slick({
	 
	  infinite: true,
	  speed:1500,
	  
	  centerPadding: '30',
	  slidesToShow:4,
	  slidesToScroll: 1,
	  responsive: [
	  	{
		  breakpoint: 1500,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			 
		  }
		},
		{
		  breakpoint: 1230,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			 
		  }
		},
		{
		  breakpoint: 1080,
		  settings: {
			slidesToShow:1,
			slidesToScroll:1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
	});
	
	
	jQuery('.testimonials-slider').slick({
	 
	  infinite: true,
	  speed:1500,
	  centerPadding: '30',
	  slidesToShow:2,
	   dots: true,
	    arrows: false,
	  slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 1230,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			 
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow:1,
			slidesToScroll:1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
	});
	
	 
	 jQuery('.media--slider').slick({
	 
	  infinite: true,
	  speed:1500,
	  centerPadding: '30',
	  slidesToShow:5,
	  slidesToScroll: 1,
	  dots: true,
	  arrows: false,
	  responsive: [
		
		{
		  breakpoint: 1230,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: true,
			 
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow:3,
			slidesToScroll:1
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow:2,
			slidesToScroll:1
		  }
		},
		{
		  breakpoint: 575,
		  settings: {
			slidesToShow:1,
			slidesToScroll: 1
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
	});
	
	jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"></div><div class="quantity-button quantity-down"></div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
});
/* Ready Function END Here*/
/*=============================================================================================*/


 
 



