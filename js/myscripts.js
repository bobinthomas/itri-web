
// dropdown on hover
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});



// slider
(function( $ ) {

    //Function to animate slider captions 
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $myCarousel = $('#carousel-example-generic'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		
	//Initialize carousel 
	$myCarousel.carousel();
	
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
	//Pause carousel  
	$myCarousel.carousel('pause');
	
	
	//Other slides to be animated on carousel slide event 
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});  
    $('#carousel-example-generic').carousel({
        interval:23000,
        pause: "false"
    });
	
})(jQuery);	

// tiles animation
$("#tile1").hover(function () {
			$(".box .i1").css("visibility","hidden");
			$(".box .t1").css("visibility","hidden");
  },
  function () {
			$(".box .i1").css("visibility","visible");   
			$(".box .t1").css("visibility","visible");
  });
$("#tile2").hover(function () {
			$(".box  .i2").css("visibility","hidden");
			$(".box  .t2").css("visibility","hidden");
  },
  function () {
			$(".box .i2").css("visibility","visible");   
			$(".box  .t2").css("visibility","visible");	
  });
$("#tile3").hover(function () {
			$(".box .i3").css("visibility","hidden");
			$(".box .t3").css("visibility","hidden");
  },
  function () {
			$(".box  .i3").css("visibility","visible");   
			$(".box  .t3").css("visibility","visible");
  });
$("#tile4").hover(function () {
			$(".box  .i4").css("visibility","hidden");
			$(".box  .t4").css("visibility","hidden");
  },
  function () {
			$(".box .i4").css("visibility","visible");   
			$(".box  .t4").css("visibility","visible");	
  });

// character left
$(document).ready(function(){ 
    $('#characterLeft').text('250 characters left');
    $('#message').keydown(function () {
        var max = 250;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('You have reached the limit');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');            
        } 
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');            
        }
    });    
});

// animation
$('.launch').click(function(){
  $('#rocket_launch').css("margin-bottom", "1000px");
   $('.cloud_fill').css("animation","smoke_size .35s infinite");
  $('.rocket_shadow').css("animation","shadow_flare .35s infinite");
});

$('.reset').click(function(){
     $('#rocket_launch').css("margin-bottom", "0px");
    $('.cloud_fill').css("animation","none");
  $('.cloud_fill').css("transform","scale(0)");
  $('.rocket_shadow').css("animation","none");
});
