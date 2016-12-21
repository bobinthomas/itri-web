//color change on scroll
jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
        navbar = $('.x-navbar');

    if (scrollPos > 550) {
      navbar.addClass('alt-color');
    } else {
      navbar.removeClass('alt-color');
    }
  });
});

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
       interval:8000,
		//interval: false,
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

//aboutus page tabs

( function( window ) {
    
	'use strict';

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function CBPFWTabs( el, options ) {
		this.el = el;
		this.options = extend( {}, this.options );
  		extend( this.options, options );
  		this._init();
	}

	CBPFWTabs.prototype.options = {
		start : 0
	};

	CBPFWTabs.prototype._init = function() {
		// tabs elemes
		this.tabs = [].slice.call( this.el.querySelectorAll( 'nav > ul > li' ) );
		// content items
		this.items = [].slice.call( this.el.querySelectorAll( '.content > section, content-pro > section' ) );
		// current index
		this.current = -1;
		// show current content item
		this._show();
		// init events
		this._initEvents();
	};

	CBPFWTabs.prototype._initEvents = function() {
		var self = this;
		this.tabs.forEach( function( tab, idx ) {
			tab.addEventListener( 'click', function( ev ) {
				ev.preventDefault();
				self._show( idx );
			} );
		} );
	};

	CBPFWTabs.prototype._show = function( idx ) {
		if( this.current >= 0 ) {
			this.tabs[ this.current ].className = '';
			this.items[ this.current ].className = '';
		}
		// change current
		this.current = idx != undefined ? idx : this.options.start >= 0 && this.options.start < this.items.length ? this.options.start : 0;
		this.tabs[ this.current ].className = 'tab-current';
		this.items[ this.current ].className = 'content-current';
	};

	// add to global namespace
	window.CBPFWTabs = CBPFWTabs;

})( window );

// secondary navigation

$(document).ready(function() {
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 330) {
      $('.secondary').addClass('navbar-fixed-abt');
    }
    if ($(window).scrollTop() < 331) {
      $('.secondary').removeClass('navbar-fixed-abt');
    }
  });
});

$(document).ready(function() {
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 1000) {
      $('.third').addClass('navbar-fixed-pro');
    }
    if ($(window).scrollTop() < 1001) {
      $('.third').removeClass('navbar-fixed-pro');
    }
  });
});



	//  contact form

//(function() {
//  'use strict';
//  window.setTimeout(function() {
//    var formName = document.querySelector('#formName');
//
//    formName.focus();
//    
//    /*window.setTimeout(function() {
//      (function timer() {
//        var name = ['A', 'L', 'E', 'X'],
//            counter = 0,
//            maxLoops = name.length;
//
//        counter += 1;
//        
//        console.log(counter);
//
//        if (counter < maxLoops) {
//          setTimeout(function() {
//            formName.value += name[counter];
//
//            timer();
//          }, 300);
//        }
//      })();
//
//      formName.style.background = '#fff';
//    }, 700);*/
//  }, 500);
//  
//  window.setTimeout(function() {
//    document.querySelector('#formName').blur();
//  }, 1500);
//  
//  /*window.setTimeout(function() {
//    document.querySelector('#formEmail').focus();
//  }, 2500);
//  
//  window.setTimeout(function() {
//    document.querySelector('#formEmail').blur();
//  }, 3500);
//  
//  window.setTimeout(function() {
//    document.querySelector('#formSubject').focus();
//  }, 4500);
//  
//  window.setTimeout(function() {
//    document.querySelector('#formSubject').blur();
//  }, 5500);
//  
//  window.setTimeout(function() {
//    document.querySelector('#formMessage').focus();
//  }, 6500);
//  
//  window.setTimeout(function() {
//    document.querySelector('#formMessage').blur();
//  }, 7500);
//  
//  window.setTimeout(function() {
//    document.querySelector('#formCopy').click();
//  }, 8500);
//  
//  window.setTimeout(function() {
//    //document.querySelector('#formMessage').blur();
//  }, 9500);*/
//  
//  window.setTimeout(function() {
//    document.querySelector('#formButton').focus();
//  }, 8500);
//  
//  window.setTimeout(function() {
//    document.querySelector('#formMessage').blur();
//  }, 9500);
//
//  return false;
//}).call(this);

// scroll to top
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});