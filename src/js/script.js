/*-----------------------------------------------------------------------------------

 	Script - All Custom frontend jQuery scripts & functions
 
-----------------------------------------------------------------------------------*/
(function(){
'use strict';
if (head.retina) {
	var allimgs = [
		'img/mkbl/mkbl_14-large.gif',
		'img/twc/twc_03-large.gif',
	    'img/profile-large.jpg',
	    'img/akc/akc_01-large.jpg',
	    'img/akc/akc_04-large.jpg',
	    'img/akc/akc_05-large.png',
	    'img/akc/akc_02-large.jpg',
	    'img/akc/akc_09-large.jpg',
	    'img/akc/akc_06-large.jpg',
	    'img/akc/akc_07-large.jpg',
	    'img/artnet/artnet_01-large.jpg',
	    'img/artnet/artnet_02-large.jpg',
	    'img/artnet/artnet_03-large.jpg',
	    'img/mkbl/mkbl_01-large.jpg',
	    'img/mkbl/mkbl_02-large.jpg',
	    'img/mkbl/mkbl_03-large.jpg',
	    'img/mkbl/mkbl_04-large.jpg',
	    'img/mkbl/mkbl_06-large.jpg',
	    'img/mkbl/mkbl_07-large.jpg',
	    'img/mkbl/mkbl_10-large.jpg',
	    'img/mkbl/mkbl_12-large.jpg',
	    'img/clear/clear_05-large.jpg',
	    'img/clear/clear_04-large.jpg',
	    'img/cognizant/cog_01-large.jpg',
	    'img/cognizant/cog_05-large.gif',
	    'img/cognizant/cog_06-large.gif',
	    'img/cognizant/cog_07-large.gif',
	    'img/cognizant/cog_08-large.gif',
	    'img/ct/ct_06-large.jpg',
	    'img/ct/ct_07-large.jpg',
	    'img/ct/ct_08-large.jpg',
	    'img/ct/ct_09-large.jpg',
	    'img/ct/ct_03-large.jpg',
	    'img/ct/ct_03-large.jpg',
	    'img/esquire/esquire_01-large.jpg',
	    'img/esquire/esquire_02-large.jpg',
	    'img/esquire/esquire_03-large.jpg',
	    'img/hwc/hwc_03-large.jpg',
	    'img/hwc/hwc_04-large.jpg',
	    'img/hwc/hwc_05-large.jpg',
	    'img/hwc/hwc_06-large.jpg',
	    'img/hwc/hwc_07-large.jpg',
	    'img/hwc/hwc_08-large.jpg',
	    'img/sa/sa_01-large.jpg',
	    'img/sa/sa_04-large.jpg',
	    'img/sa/sa_05-large.jpg',
	    'img/sa/sa_06-large.jpg',
	    'img/sa/sa_07-large.jpg',
	    'img/twc/rain.gif',
	    'img/twc/hurricane.gif',
	    'img/twc/twc_01-large.png',
	    'img/twc/twc_02-large.png'
	]
} else if ($(window).width() > 640) {
	var allimgs = [
			'img/mkbl/mkbl_14-medium.gif',
			'img/twc/twc_03-large.gif',
		    'img/profile-medium.jpg',
		    'img/akc/akc_01-medium.jpg',
		    'img/akc/akc_04-medium.jpg',
		    'img/akc/akc_05-medium.png',
		    'img/akc/akc_02-medium.jpg',
		    'img/akc/akc_09-medium.jpg',
		    'img/akc/akc_06-medium.jpg',
		    'img/akc/akc_07-medium.jpg',
		    'img/artnet/artnet_01-large.jpg',
		    'img/artnet/artnet_02-large.jpg',
		    'img/artnet/artnet_03-large.jpg',
		    'img/mkbl/mkbl_01-medium.jpg',
		    'img/mkbl/mkbl_02-medium.jpg',
		    'img/mkbl/mkbl_03-medium.jpg',
		    'img/mkbl/mkbl_04-medium.jpg',
		    'img/mkbl/mkbl_06-medium.jpg',
		    'img/mkbl/mkbl_07-medium.jpg',
		    'img/mkbl/mkbl_10-medium.jpg',
		    'img/mkbl/mkbl_12-medium.jpg',
		    'img/clear/clear_05-medium.jpg',
		    'img/clear/clear_04-medium.jpg',
		    'img/cognizant/cog_01-medium.jpg',
		    'img/cognizant/cog_05-large.gif',
		    'img/cognizant/cog_06-medium.gif',
		    'img/cognizant/cog_07-medium.gif',
		    'img/cognizant/cog_08-medium.gif',
		    'img/ct/ct_06-medium.jpg',
		    'img/ct/ct_07-medium.jpg',
		    'img/ct/ct_08-medium.jpg',
		    'img/ct/ct_09-medium.jpg',
		    'img/ct/ct_03-medium.jpg',
		    'img/ct/ct_03-medium.jpg',
		    'img/esquire/esquire_01-medium.jpg',
		    'img/esquire/esquire_02-medium.jpg',
		    'img/esquire/esquire_03-medium.jpg',
		    'img/hwc/hwc_03-medium.jpg',
		    'img/hwc/hwc_04-medium.jpg',
		    'img/hwc/hwc_05-medium.jpg',
		    'img/hwc/hwc_06-medium.jpg',
		    'img/hwc/hwc_07-medium.jpg',
		    'img/hwc/hwc_08-medium.jpg',
		    'img/sa/sa_01-medium.jpg',
		    'img/sa/sa_04-medium.jpg',
		    'img/sa/sa_05-medium.jpg',
		    'img/sa/sa_06-medium.jpg',
		    'img/sa/sa_07-medium.jpg',
		    'img/twc/rain.gif',
		    'img/twc/hurricane.gif',
		    'img/twc/twc_01-medium.png',
		    'img/twc/twc_02-medium.png'
		]
} else {
		'img/mkbl/mkbl_14-small.gif',
		'img/twc/twc_03-small.gif',
	    'img/profile-small.jpg',
	    'img/akc/akc_01-small.jpg',
	    'img/akc/akc_04-small.jpg',
	    'img/akc/akc_05-small.png',
	    'img/akc/akc_02-small.jpg',
	    'img/akc/akc_09-small.jpg',
	    'img/akc/akc_06-small.jpg',
	    'img/akc/akc_07-small.jpg',
	    'img/artnet/artnet_01-small.jpg',
	    'img/artnet/artnet_02-small.jpg',
	    'img/artnet/artnet_03-small.jpg',
	    'img/mkbl/mkbl_01-small.jpg',
	    'img/mkbl/mkbl_02-small.jpg',
	    'img/mkbl/mkbl_03-small.jpg',
	    'img/mkbl/mkbl_04-small.jpg',
	    'img/mkbl/mkbl_06-small.jpg',
	    'img/mkbl/mkbl_07-small.jpg',
	    'img/mkbl/mkbl_10-small.jpg',
	    'img/mkbl/mkbl_12-small.jpg',
	    'img/clear/clear_05-small.jpg',
	    'img/clear/clear_04-small.jpg',
	    'img/cognizant/cog_01-small.jpg',
	    'img/cognizant/cog_05-small.gif',
	    'img/cognizant/cog_06-small.gif',
	    'img/cognizant/cog_07-small.gif',
	    'img/cognizant/cog_08-small.gif',
	    'img/ct/ct_06-small.jpg',
	    'img/ct/ct_07-small.jpg',
	    'img/ct/ct_08-small.jpg',
	    'img/ct/ct_09-small.jpg',
	    'img/ct/ct_03-small.jpg',
	    'img/ct/ct_03-small.jpg',
	    'img/esquire/esquire_01-small.jpg',
	    'img/esquire/esquire_02-small.jpg',
	    'img/esquire/esquire_03-small.jpg',
	    'img/hwc/hwc_03-small.jpg',
	    'img/hwc/hwc_04-small.jpg',
	    'img/hwc/hwc_05-small.jpg',
	    'img/hwc/hwc_06-small.jpg',
	    'img/hwc/hwc_07-small.jpg',
	    'img/hwc/hwc_08-small.jpg',
	    'img/sa/sa_01-small.jpg',
	    'img/sa/sa_04-small.jpg',
	    'img/sa/sa_05-small.jpg',
	    'img/sa/sa_06-small.jpg',
	    'img/sa/sa_07-small.jpg',
	    'img/twc/rain.gif',
	    'img/twc/hurricane.gif',
	    'img/twc/twc_01-small.png',
	    'img/twc/twc_02-small.png'
}

function preCache(){
    $.each(allimgs, function(){
        var img = new Image();
        img.src = this;
    });
};
// REORGANIZE ISOTOPE FUNCTION
function reorganizeIsotope() {
	jQuery('.masonry').each(function(){
		var $container = jQuery(this);
		var maxitemwidth = $container.data('maxitemwidth');
		if (!maxitemwidth) { maxitemwidth = 370; }
		var itemmargin = parseInt($container.children('div').css('marginRight')) + parseInt($container.children('div').css('marginLeft'), 10);
		var containerwidth = Math.ceil(($container.width() - itemmargin));
		var rows = Math.ceil(containerwidth/maxitemwidth);
		var marginperrow = (rows-1)*itemmargin;
		var newitemmargin = marginperrow / rows;
		var itemwidth = Math.floor((containerwidth/rows)-newitemmargin - 1);
		$container.children('div').css({ 'width': itemwidth+'px' });
		if ($container.children('div').hasClass('isotope-item')) { $container.isotope( 'reLayout' ); }
	});
}
// function playVideo() {
// 	if ($('video').length) {
// 		$('video').each(function () {
// 			if ($(this).visible(true)) {
// 				$(this)[0].play();
// 			} 
// 		});
// 	}
// }

// STICKY FOTTER OPTION
function stickyfooter() {
	var footerHeight = jQuery("footer").height();
	jQuery("#page-content").css({'minHeight': jQuery(window).height()+'px'});
	jQuery("footer").css({'position':'absolute','bottom':'0','left':'0'});
	jQuery("#page-content").append('<div id="footer-pseudo"></div>');
	jQuery("#footer-pseudo").css({'height': footerHeight+'px'});
}


// SMOOTH SHOW FUNCION FOR ELEMENTS THAT TAKE ACTION WHEN VISIBLE (animations & skills, etc)
function smoothShow() {

	/* -- A N I M A T I O N S -- */
	jQuery('.has-animation').each(function() {
		var thisItem = jQuery(this);
		if (jQuery(window).width() > 700) {
			var visible = thisItem.visible(true);
			var delay = thisItem.attr("data-delay");
			if (!delay) { delay = 0; }
			if (thisItem.hasClass( "animated" )) {} 
			else if (visible) {
				thisItem.delay(delay).queue(function(){thisItem.addClass('animated');});
			}
		} else {
			thisItem.addClass('animated');	
		}
	});
	
	/* -- S K I L L -- */
	jQuery('.skill').each(function() {
		var thisItem = jQuery(this);
		var visible = thisItem.visible(true);
		var percent = thisItem.find('.skill-bar .skill-active ').attr('data-perc');
		if (thisItem.hasClass( "anim" )) {} 
		else if (visible) {
			var randomval = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
			thisItem.addClass("anim");
			thisItem.find('.skill-bar .skill-active ').animate({'width': percent+'%',}, 2000, 'easeInOutQuart', function(){
				jQuery(this).find('.tooltip').delay(randomval).animate({'opacity':1}, 500);	
			}).css('overflow', 'visible');
		}
	});
		
}

jQuery(window).load(function() {
	// if (head.desktop) {
		if ($('html#index-page').length) {
			preCache();
		}
	// }
	/*---------------------------------------------- 
			H I D E   P A G E   L O A D E R  + S M O O T H   S H O W
	------------------------------------------------*/
	jQuery("#page-loader .page-loader-inner").delay(500).fadeIn(10, function(){
		jQuery(this).fadeOut(500,function() {
			jQuery("#page-loader").fadeOut(500);
		});
	});
		
	
	
	/*---------------------------------------------- 
				   	 P A R A L L A X
	------------------------------------------------*/
	if(jQuery().parallax) { 
		jQuery('.parallax-section').parallax();
	}
	
	
	
	
	if( jQuery().isotope ) {
		
		/*---------------------------------------------- 
					  C A L L   I S O T O P E   
		------------------------------------------------*/	
		jQuery('.masonry').each(function(){
			var $container = jQuery(this);
			
			$container.imagesLoaded( function(){
				$container.isotope({
					itemSelector : '.masonry-item',
					transformsEnabled: true			// Important for videos
				});	
			});
		});
		
		
		/*---------------------------------------------- 
					 I S O T O P E : Filter
		------------------------------------------------*/
		jQuery('.masonry-filter').on("click", "li a", function() { 
			var thisItem = jQuery(this);
			var parentul = thisItem.parents('ul.filter').data('related-grid');
			thisItem.parents('ul.filter').find('li a').removeClass('active');
			thisItem.addClass('active');
			
			var selector = thisItem.attr('data-filter-value');
			jQuery('#'+parentul).isotope({ filter: selector }, function(){ });
			
			return false;
		});
		
		
		reorganizeIsotope();
			
		jQuery(window).resize(function() {
			reorganizeIsotope();
		});
		
		
	} /* END if isotope */
		
	
	
	
	/*---------------------------------------------- 
					 O P E N   N A V 
	------------------------------------------------*/
	jQuery('header').on("click", ".open-nav", function() { 
		jQuery('header').toggleClass('nav-is-open'); 
		return false;
	});
	
	
	
	
	/*---------------------------------------------- 
				 B A C K   T O P   T O P
	------------------------------------------------*/
	jQuery('#backtotop').on("click", function() { 
		jQuery('html, body').animate({scrollTop: 0}, 1000, 'easeInOutQuart');
		return false;						   
	});
	
	
	
	
	/*---------------------------------------------- 
				 S C R O L L   D O W N
	------------------------------------------------*/
	// jQuery('#scroll-down').on("click", function() { 
	// 	jQuery('html,body').animate({ scrollTop: jQuery("#page-body").offset().top}, 1000, 'easeInOutQuart');
	// 	return false;						   
	// });
	


	
	
	/*---------------------------------------------- 
			 O W L   C A R O U S E L
	------------------------------------------------*/
	if(jQuery().owlCarousel) {
		
		jQuery(".owl-slider").owlCarousel({
			items:1,
			stopOnHover : true,
			nav: true,
			navText:false,
			dots: false,
			smartSpeed : 800,			
			singleItem : true,
			autoHeight : true,
			loop: false,
			autoplay: false,
			navRewind: false,
			onTranslated: function () {
				jQuery(".owl-slider .owl-slider-caption").removeClass("active");
				jQuery(".owl-slider .owl-item.active .owl-slider-caption").addClass("active");
				
				if (jQuery(".owl-slider.hero-slider .owl-item.active .slider-item").hasClass("text-light")) {
					jQuery("#logo").addClass("show-light-logo");	
					jQuery("#menu").addClass("menu-light");	
					jQuery(".owl-slider.hero-slider").addClass("nav-light");	
				} else {
					jQuery("#logo").removeClass("show-light-logo");	
					jQuery("#menu").removeClass("menu-light");	
					jQuery(".owl-slider.hero-slider").removeClass("nav-light");	
				}
			},
			onInitialized: function () {
				jQuery(".owl-slider .owl-item.active .owl-slider-caption").addClass("active");
			}
		});
				
	}
	
		

	
	/*---------------------------------------------- 
				W O L F   P A R A L L A X
	------------------------------------------------*/
	if(jQuery().wolf) { 
		
		jQuery('.wolf-grid').wolf();
		
		
		/*---------------------------------------------- 
					 W O L F : Filter
		------------------------------------------------*/
		jQuery('.wolf-filter').on("click", "li a", function() { 
			var thisItem = jQuery(this);

			var parentul = thisItem.parents('ul.wolf-filter').data('related-grid');
			thisItem.parents('ul.filter').find('li a').removeClass('active');
			thisItem.addClass('active');
			
			jQuery('html,body').animate({ scrollTop: jQuery("#"+parentul).offset().top-parseInt(jQuery("#header-filter").height(), 10)-100}, 500, 'easeInOutQuart');
			
			var selector = thisItem.attr('data-filter-value');
			jQuery('#'+parentul).wolf({ filter: selector, filtertype: 'hide' });
			
			return false;
		});
		
	}
	
	
	/*---------------------------------------------- 
				   	 V I D E O   B G
	------------------------------------------------*/
	// if(jQuery().bgVideo) { 
	// 	setTimeout(function() {
	// 		jQuery('.videobg-section').bgVideo();
	// 	}, 1000);
	// }
	
	
	
	/*---------------------------------------------- 
				   	L I G H T C A S E
	------------------------------------------------*/
	if(jQuery().lightcase) { 
		jQuery('a[data-rel^=lightcase]').lightcase({ 
			showSequenceInfo: false, 
			swipe: true, 
			showCaption:false,
			shrinkFactor: 0.95,
			disableShrink: true,
			forceHeight: true,
			video: {
				width : 780,
				height : 420,
				controls: false,
				preload: true,
				loop: true
				}
		});
	}
	
	
	/*---------------------------------------------- 
				H E A D E R   O P T I O N 
				   (hide/show elements)
	------------------------------------------------*/
	/* add class to header if hero-invisible */
	jQuery(window).scroll(function() { 
		if (jQuery( window ).scrollTop() +50 > jQuery("#hero").height()) {
			jQuery('header').addClass("hero-invisible");
		} else {
			jQuery('header').removeClass("hero-invisible");
		}
	});
		
	
	
	/*---------------------------------------------- 
			R E S P O N S I V E   N A V
	------------------------------------------------*/
	jQuery('#main-nav').on("click", "li > a", function() {
		var thisItem = jQuery(this); 
		if (thisItem.siblings('ul.submenu').length > 0 && thisItem.siblings('ul.submenu').css('display') === 'none') {
			thisItem.siblings('ul.submenu').slideDown(400);
			return false;	
		}
	});
	
	
	/*---------------------------------------------- 
			O P E N / C L O S E   Filter & Share
	------------------------------------------------*/
	jQuery('header').on("click", ".open-filter", function(e) { 
		e.preventDefault();
		jQuery('#header-filter').addClass('filter-is-open');
		jQuery('html,body').animate({ scrollTop: jQuery("#"+jQuery(this).data('related-grid')).offset().top-parseInt(jQuery("#header-filter").height(), 10)-100}, 1000, 'easeInOutQuart');
		return false;
	});
	jQuery('header').on("click", ".close-filter", function() {  jQuery('#header-filter').removeClass('filter-is-open'); return false; });
	
	/* share */
	jQuery('header').on("click", ".open-share", function() { jQuery('#header-share').addClass('share-is-open'); return false; });
	jQuery('header').on("click", ".close-share", function() {  jQuery('#header-share').removeClass('share-is-open'); return false; });
	
	
	
	
	/*---------------------------------------------- 
					 P A G I N A T I O N 
	------------------------------------------------*/
	if (jQuery('.single-pagination').length >  0 && jQuery(window).width() > 780) { 
		var pHeight = jQuery('.single-pagination').height();
		var pPrevHeight = jQuery('.single-pagination li.prev a').height();
		var pNextHeight = jQuery('.single-pagination li.next a').height();
		if (pPrevHeight < pHeight-10 && jQuery('.single-pagination li.prev a img').length >  0) { 
			jQuery('.single-pagination li.prev ').css('marginTop',(pHeight-pPrevHeight)/2 + 'px'); }
		if (pNextHeight < pHeight-10 && jQuery('.single-pagination li.next a img').length >  0) { 
			jQuery('.single-pagination li.next ').css('marginTop',(pHeight-pNextHeight)/2 + 'px'); }
	}
	
	
	
	/*---------------------------------------------- 
				 INLINE VIDEO
	------------------------------------------------*/
	// jQuery('body').on("click", ".inline-video", function() { 
	// 	var el = jQuery(this);
	// 	var type = el.data('type');
	// 	var video = el.data('videoid');
				
	// 	if (type === 'youtube') { 
	// 	var iframe='<iframe src="http://www.youtube.com/embed/'+video+'?autoplay=1" width="100%" height="100%" frameborder="0" allowfullscreen ></iframe>';
	// 	} else if (type === 'vimeo') {
	// 	var iframe='<iframe src="https://player.vimeo.com/video/'+video+'?autoplay=1" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>';
	// 	}
		
	// 	el.append('<div class="inline-iframe-container"></div>');
	// 	el.find(".inline-iframe-container").html(iframe+'<div class="close-inline-video"></div>');
		
	// 	setTimeout(function() {
	// 		el.addClass('active');
	// 	}, 1000);
		
	// 	return false;
	// });
	
	// jQuery('body').on("click", ".close-inline-video", function() { 
	// 	var thisItem = jQuery(this); 
	// 	thisItem.parents( ".inline-video" ).removeClass('active');
	// 	thisItem.parent( ".inline-iframe-container" ).remove();
	// 	return false;
	// });
	
	
	
	/*---------------------------------------------- 
				        T A B S 
	------------------------------------------------*/	
	// jQuery(".tabs").each(function() {
	// 	var thisItem = jQuery(this); 
	// 	thisItem.find('.tab-content').removeClass('active');
	// 	var rel = thisItem.find('.active').attr('href');
	// 	thisItem.find('.'+rel).addClass('active');
	// });
	
	// jQuery(".tab-nav").on("click", "a", function() { 
	// 	var thisItem = jQuery(this); 
	// 	var parentdiv = thisItem.parents('li').parent('ul').parent('div');
	// 	var rel = thisItem.attr('href');
		
	// 	jQuery(parentdiv).find(".tab-nav a").removeClass("active");
	// 	thisItem.addClass("active");
		
	// 	jQuery(parentdiv).find(".tab-container .tab-content").hide().removeClass('active');
	// 	jQuery(parentdiv).find(".tab-container ."+rel).fadeIn(500).addClass('active');
		
	// 	return false;
		
	// });
	
	if ($('.waypoint-parent').length != 0) {
		$( '.waypoint-parent' ).each(function( index ) {
		  
		  var topWaypoint = $(this).waypoint({
		  	handler: function(direction) {
		  		if (direction == 'down') {
		  			$(this.element)
		  				.find('.waypoint-child')
		  				.addClass('is-fixed');
		  		} else {
		  			$(this.element)
		  				.find('.waypoint-child')
		  				.removeClass('is-fixed');
		  		}
		  	},
		  	offset: '60px'
		  });
		  var bottomWaypoint = $(this).find('.waypoint-bottom').waypoint({
		    handler: function(direction) {
		    	if (direction == 'down') {
		    		$(this.element)
		    			.closest('.waypoint-parent')
		    			.find('.waypoint-child')
		    			.removeClass('is-fixed')
		    			.addClass('is-bottom');
		    	} else {
		    		$(this.element)
			    		.closest('.waypoint-parent')
		    			.find('.waypoint-child')
		    			.removeClass('is-bottom')
		    			.addClass('is-fixed');
		    	}
		    },
		    offset: ($(this).closest('.waypoint-parent').find('.waypoint-child').height()) * 2
		  });
		});
	}

	
	/*---------------------------------------------- 
			T O G G L E  &  A C C O R D I O N
	------------------------------------------------*/		
	// jQuery(".toggle-item").each(function() {
	// 	jQuery(this).find('.toggle-active').siblings('.toggle-inner').slideDown(300);							
	// });
	
	// jQuery(".toggle-item").on("click", ".toggle-title", function() { 
	// 	var thisItem = jQuery(this); 
	// 	var parentdiv = thisItem.parent('div').parent('div');
	// 	var active = thisItem.parent('div').find('.toggle-inner').css('display');
		
	// 	if (jQuery(parentdiv).attr('class') === 'accordion') {
	// 		if (active !== 'none' ) { 
	// 			jQuery(parentdiv).find('.toggle-item .toggle-inner').slideUp(300);
	// 			thisItem.toggleClass('toggle-active');
	// 		} else {
	// 			jQuery(parentdiv).find('.toggle-item .toggle-inner').slideUp(300);
	// 			jQuery(parentdiv).find('.toggle-item .toggle-title').removeClass('toggle-active');
				
	// 			thisItem.toggleClass('toggle-active');
	// 			thisItem.siblings('.toggle-inner').slideDown(300);
	// 		}
	// 	} else {
	// 		thisItem.toggleClass('toggle-active');
	// 		thisItem.siblings('.toggle-inner').slideToggle(300);
	// 	}
		
	// 	return false;
	// });
	
	
	stickyfooter();	
	$.stellar({
		hideDistantElements: false
	})
		
});

// jQuery(window).resize(function() { 
// 	stickyfooter(); 
// });

$(window).on('scroll', function() {
	window.requestAnimationFrame(smoothShow);
	// smoothShow();
	// playVideo();
});

})(jQuery);
