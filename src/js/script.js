/*-----------------------------------------------------------------------------------

 	Script - All Custom frontend $ scripts & functions
 
-----------------------------------------------------------------------------------*/
(function(){
'use strict';
if (head.retina && $(window).width() > 1140) {
	var allimgs = [
		'img/projects/akc-large.jpg',
		'img/projects/artnet-large.jpg',
		'img/projects/cognizant-large.jpg',
		'img/projects/mkbl-large.jpg',
		'img/projects/hwc-large.jpg',
		'img/projects/cognizant-large.jpg',
	    'img/profile-large.jpg',
	    'img/akc/akc_01-large.jpg',
	    'img/akc/akc_04-large.jpg',
	    'img/akc/akc_05-large.png',
	    'img/akc/akc_02-large.jpg',
	    'img/akc/akc_09-large.jpg',
	    'img/akc/akc_06-large.jpg',
	    'img/akc/akc_07-large.jpg',
	    'img/mkbl/mkbl_01-large.jpg',
	    'img/mkbl/mkbl_02-large.jpg',
	    'img/mkbl/mkbl_03-large.jpg',
	    'img/mkbl/mkbl_04-large.jpg',
	    'img/mkbl/mkbl_06-large.jpg',
	    'img/mkbl/mkbl_07-large.jpg',
	    'img/mkbl/mkbl_10-large.jpg',
	    'img/mkbl/mkbl_12-large.jpg',
	    'img/twc/rain.gif',
	    'img/twc/hurricane.gif',
	    'img/twc/twc_01-large.png',
	    'img/twc/twc_02-large.png',
	    'img/artnet/artnet_01-large.jpg',
	    'img/artnet/artnet_02-large.jpg',
	    'img/artnet/artnet_03-large.jpg',
	    'img/cognizant/cog_01-large.jpg',
	    'img/cognizant/cog_06-large.gif',
	    'img/cognizant/cog_10-large.gif',
	    'img/cognizant/cog_11-large.gif',
	    'img/cognizant/cog_09-large.gif',
	    'img/ct/ct_06-large.jpg',
	    'img/ct/ct_07-large.jpg',
	    'img/ct/ct_08-large.jpg',
	    'img/ct/ct_09-large.jpg',
	    'img/ct/ct_03-large.jpg',
	    'img/ct/ct_03-large.jpg',
	    'img/hwc/hwc_03-large.jpg',
	    'img/hwc/hwc_04-large.jpg',
	    'img/hwc/hwc_05-large.jpg',
	    'img/hwc/hwc_06-large.jpg',
	    'img/hwc/hwc_07-large.jpg',
	    'img/hwc/hwc_08-large.jpg',
	    'img/esquire/esquire_01-large.jpg',
	    'img/esquire/esquire_02-large.jpg',
	    'img/esquire/esquire_03-large.jpg',
	    'img/clear/clear_05-large.jpg',
	    'img/clear/clear_04-large.jpg',
	    'img/sa/sa_01-large.jpg',
	    'img/sa/sa_04-large.jpg',
	    'img/sa/sa_05-large.jpg',
	    'img/sa/sa_06-large.jpg',
	    'img/sa/sa_07-large.jpg',
	    'img/cognizant/cog_07-large.gif'
	]
} else if ($(window).width() > 640) {
	var allimgs = [
		'img/projects/akc-medium.jpg',
		'img/projects/artnet-medium.jpg',
		'img/projects/cognizant-medium.jpg',
		'img/projects/mkbl-medium.jpg',
		'img/projects/hwc-medium.jpg',
		'img/projects/cognizant-medium.jpg',
	    'img/profile-medium.jpg',
	    'img/akc/akc_01-medium.jpg',
	    'img/akc/akc_04-medium.jpg',
	    'img/akc/akc_05-medium.png',
	    'img/akc/akc_02-medium.jpg',
	    'img/akc/akc_09-medium.jpg',
	    'img/akc/akc_06-medium.jpg',
	    'img/akc/akc_07-medium.jpg',
	    'img/mkbl/mkbl_01-medium.jpg',
	    'img/mkbl/mkbl_02-medium.jpg',
	    'img/mkbl/mkbl_03-medium.jpg',
	    'img/mkbl/mkbl_04-medium.jpg',
	    'img/mkbl/mkbl_06-medium.jpg',
	    'img/mkbl/mkbl_07-medium.jpg',
	    'img/mkbl/mkbl_10-medium.jpg',
	    'img/mkbl/mkbl_12-medium.jpg',
	    'img/twc/rain.gif',
	    'img/twc/hurricane.gif',
	    'img/twc/twc_01-medium.png',
	    'img/twc/twc_02-medium.png',
	    'img/ct/ct_06-medium.jpg',
	    'img/ct/ct_07-medium.jpg',
	    'img/ct/ct_08-medium.jpg',
	    'img/ct/ct_09-medium.jpg',
	    'img/ct/ct_03-medium.jpg',
	    'img/ct/ct_03-medium.jpg',
	    'img/hwc/hwc_03-medium.jpg',
	    'img/hwc/hwc_04-medium.jpg',
	    'img/hwc/hwc_05-medium.jpg',
	    'img/hwc/hwc_07-medium.jpg',
	    'img/hwc/hwc_08-medium.jpg',
	    'img/cognizant/cog_01-medium.jpg',
	    'img/cognizant/cog_06-medium.gif',
	    'img/cognizant/cog_10-medium.gif',
	    'img/cognizant/cog_11-medium.gif',
	    'img/cognizant/cog_09-medium.gif',
	    'img/artnet/artnet_01-large.jpg',
	    'img/artnet/artnet_02-large.jpg',
	    'img/artnet/artnet_03-large.jpg',
	    'img/clear/clear_05-medium.jpg',
	    'img/clear/clear_04-medium.jpg',
	    'img/esquire/esquire_01-medium.jpg',
	    'img/esquire/esquire_02-medium.jpg',
	    'img/esquire/esquire_03-medium.jpg',
	    'img/sa/sa_01-medium.jpg',
	    'img/sa/sa_04-medium.jpg',
	    'img/sa/sa_05-medium.jpg',
	    'img/sa/sa_06-medium.jpg',
	    'img/sa/sa_07-medium.jpg'
	]
} else {
	var allimgs = [
		'img/projects/akc-small.jpg',
		'img/projects/artnet-small.jpg',
		'img/projects/cognizant-small.jpg',
		'img/projects/mkbl-small.jpg',
		'img/projects/hwc-small.jpg',
		'img/projects/cognizant-small.jpg',
	    'img/profile-small.jpg',
	    'img/akc/akc_01-small.jpg',
	    'img/akc/akc_04-small.jpg',
	    'img/akc/akc_05-small.png',
	    'img/akc/akc_02-small.jpg',
	    'img/akc/akc_09-small.jpg',
	    'img/akc/akc_06-small.jpg',
	    'img/akc/akc_07-small.jpg',
	    'img/mkbl/mkbl_01-small.jpg',
	    'img/mkbl/mkbl_02-small.jpg',
	    'img/mkbl/mkbl_03-small.jpg',
	    'img/mkbl/mkbl_04-small.jpg',
	    'img/mkbl/mkbl_06-small.jpg',
	    'img/mkbl/mkbl_07-small.jpg',
	    'img/mkbl/mkbl_10-small.jpg',
	    'img/mkbl/mkbl_12-small.jpg',
	    'img/twc/rain.gif',
	    'img/twc/hurricane.gif',
	    'img/twc/twc_01-small.png',
	    'img/twc/twc_02-small.png',
	    'img/clear/clear_05-small.jpg',
	    'img/clear/clear_06.jpg',
	    'img/cognizant/cog_01-small.jpg',
	    'img/cognizant/cog_06-small.gif',
	    'img/cognizant/cog_07-small.gif',
	    'img/cognizant/cog_08-small.gif',
	    'img/hwc/hwc_03-small.jpg',
	    'img/hwc/hwc_04-small.jpg',
	    'img/hwc/hwc_05-small.jpg',
	    'img/hwc/hwc_06-small.jpg',
	    'img/hwc/hwc_07-small.jpg',
	    'img/hwc/hwc_08-small.jpg',
	    'img/artnet/artnet_01-small.jpg',
	    'img/artnet/artnet_02-small.jpg',
	    'img/artnet/artnet_03-small.jpg',
	    'img/ct/ct_06-small.jpg',
	    'img/ct/ct_07-small.jpg',
	    'img/ct/ct_08-small.jpg',
	    'img/ct/ct_09-small.jpg',
	    'img/ct/ct_03-small.jpg',
	    'img/ct/ct_03-small.jpg',
	    'img/esquire/esquire_01-small.jpg',
	    'img/esquire/esquire_02-small.jpg',
	    'img/esquire/esquire_03-small.jpg',
	    'img/sa/sa_01-small.jpg',
	    'img/sa/sa_04-small.jpg',
	    'img/sa/sa_05-small.jpg',
	    'img/sa/sa_06-small.jpg',
	    'img/sa/sa_07-small.jpg',
	    'img/cognizant/cog_07-small.gif'
	]
}

function preCache(){
    $.each(allimgs, function(){
        var img = new Image();
        img.src = this;
    });
};
// REORGANIZE ISOTOPE FUNCTION
function reorganizeIsotope() {
	$('.masonry').each(function(){
		var $container = $(this);
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
	var footerHeight = $("footer").height();
	$("#page-content").css({'minHeight': $(window).height()+'px'});
	$("footer").css({'position':'absolute','bottom':'0','left':'0'});
	$("#page-content").append('<div id="footer-pseudo"></div>');
	$("#footer-pseudo").css({'height': footerHeight+'px'});
}


// SMOOTH SHOW FUNCION FOR ELEMENTS THAT TAKE ACTION WHEN VISIBLE (animations & skills, etc)
function smoothShow() {

	/* -- A N I M A T I O N S -- */
	$('.has-animation').each(function() {
		var thisItem = $(this);
		if ($(window).width() > 700) {
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
	$('.skill').each(function() {
		var thisItem = $(this);
		var visible = thisItem.visible(true);
		var percent = thisItem.find('.skill-bar .skill-active ').attr('data-perc');
		if (thisItem.hasClass( "anim" )) {} 
		else if (visible) {
			var randomval = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
			thisItem.addClass("anim");
			thisItem.find('.skill-bar .skill-active ').animate({'width': percent+'%',}, 2000, 'easeInOutQuart', function(){
				$(this).find('.tooltip').delay(randomval).animate({'opacity':1}, 500);	
			}).css('overflow', 'visible');
		}
	});
		
}

$(window).load(function() {
	// if (head.desktop) {
		// if ($('html#index-page').length) {
			preCache();
		// }
	// }
	var myLoader = html5Preloader('cognizant9.mp4', 'mkbl1.mp4', 'twc1.mp4');
	/*---------------------------------------------- 
			H I D E   P A G E   L O A D E R  + S M O O T H   S H O W
	------------------------------------------------*/
	$("#page-loader .page-loader-inner").delay(500).fadeIn(10, function(){
		$(this).fadeOut(500,function() {
			$("#page-loader").fadeOut(500);
		});
	});
		
	
	
	/*---------------------------------------------- 
				   	 P A R A L L A X
	------------------------------------------------*/
	if($().parallax) { 
		$('.parallax-section').parallax();
	}
	
	
	
	
	if( $().isotope ) {
		
		/*---------------------------------------------- 
					  C A L L   I S O T O P E   
		------------------------------------------------*/	
		$('.masonry').each(function(){
			var $container = $(this);
			
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
		$('.masonry-filter').on("click", "li a", function() { 
			var thisItem = $(this);
			var parentul = thisItem.parents('ul.filter').data('related-grid');
			thisItem.parents('ul.filter').find('li a').removeClass('active');
			thisItem.addClass('active');
			
			var selector = thisItem.attr('data-filter-value');
			$('#'+parentul).isotope({ filter: selector }, function(){ });
			
			return false;
		});
		
		
		reorganizeIsotope();
			
		$(window).resize(function() {
			reorganizeIsotope();
		});
		
		
	} /* END if isotope */
		
	
	
	
	/*---------------------------------------------- 
					 O P E N   N A V 
	------------------------------------------------*/
	$('header').on("click", ".open-nav", function() { 
		$('header').toggleClass('nav-is-open'); 
		return false;
	});
	
	
	
	
	/*---------------------------------------------- 
				 B A C K   T O P   T O P
	------------------------------------------------*/
	$('#backtotop').on("click", function() { 
		$('html, body').animate({scrollTop: 0}, 1000, 'easeInOutQuart');
		return false;						   
	});
	
	
	
	
	/*---------------------------------------------- 
				 S C R O L L   D O W N
	------------------------------------------------*/
	// $('#scroll-down').on("click", function() { 
	// 	$('html,body').animate({ scrollTop: $("#page-body").offset().top}, 1000, 'easeInOutQuart');
	// 	return false;						   
	// });
	


	
	
	/*---------------------------------------------- 
			 O W L   C A R O U S E L
	------------------------------------------------*/
	if($().owlCarousel) {
		
		$(".owl-slider").owlCarousel({
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
				$(".owl-slider .owl-slider-caption").removeClass("active");
				$(".owl-slider .owl-item.active .owl-slider-caption").addClass("active");
				
				if ($(".owl-slider.hero-slider .owl-item.active .slider-item").hasClass("text-light")) {
					$("#logo").addClass("show-light-logo");	
					$("#menu").addClass("menu-light");	
					$(".owl-slider.hero-slider").addClass("nav-light");	
				} else {
					$("#logo").removeClass("show-light-logo");	
					$("#menu").removeClass("menu-light");	
					$(".owl-slider.hero-slider").removeClass("nav-light");	
				}
			},
			onInitialized: function () {
				$(".owl-slider .owl-item.active .owl-slider-caption").addClass("active");
			}
		});
				
	}
	
		

	
	/*---------------------------------------------- 
				W O L F   P A R A L L A X
	------------------------------------------------*/
	if($().wolf) { 
		
		$('.wolf-grid').wolf();
		
		
		/*---------------------------------------------- 
					 W O L F : Filter
		------------------------------------------------*/
		$('.wolf-filter').on("click", "li a", function() { 
			var thisItem = $(this);

			var parentul = thisItem.parents('ul.wolf-filter').data('related-grid');
			thisItem.parents('ul.filter').find('li a').removeClass('active');
			thisItem.addClass('active');
			
			$('html,body').animate({ scrollTop: $("#"+parentul).offset().top-parseInt($("#header-filter").height(), 10)-100}, 500, 'easeInOutQuart');
			
			var selector = thisItem.attr('data-filter-value');
			$('#'+parentul).wolf({ filter: selector, filtertype: 'hide' });
			
			return false;
		});
		
	}
	
	
	/*---------------------------------------------- 
				   	 V I D E O   B G
	------------------------------------------------*/
	// if($().bgVideo) { 
	// 	setTimeout(function() {
	// 		$('.videobg-section').bgVideo();
	// 	}, 1000);
	// }
	
	
	
	/*---------------------------------------------- 
				   	L I G H T C A S E
	------------------------------------------------*/
	if($().lightcase) { 
		$('a[data-rel^=lightcase]').lightcase({ 
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
	$(window).scroll(function() { 
		if ($( window ).scrollTop() +50 > $("#hero").height()) {
			$('header').addClass("hero-invisible");
		} else {
			$('header').removeClass("hero-invisible");
		}
	});
		
	
	
	/*---------------------------------------------- 
			R E S P O N S I V E   N A V
	------------------------------------------------*/
	$('#main-nav').on("click", "li > a", function() {
		var thisItem = $(this); 
		if (thisItem.siblings('ul.submenu').length > 0 && thisItem.siblings('ul.submenu').css('display') === 'none') {
			thisItem.siblings('ul.submenu').slideDown(400);
			return false;	
		}
	});
	
	
	/*---------------------------------------------- 
			O P E N / C L O S E   Filter & Share
	------------------------------------------------*/
	$('header').on("click", ".open-filter", function(e) { 
		e.preventDefault();
		$('#header-filter').addClass('filter-is-open');
		$('html,body').animate({ scrollTop: $("#"+$(this).data('related-grid')).offset().top-parseInt($("#header-filter").height(), 10)-100}, 1000, 'easeInOutQuart');
		return false;
	});
	$('header').on("click", ".close-filter", function() {  $('#header-filter').removeClass('filter-is-open'); return false; });
	
	/* share */
	$('header').on("click", ".open-share", function() { $('#header-share').addClass('share-is-open'); return false; });
	$('header').on("click", ".close-share", function() {  $('#header-share').removeClass('share-is-open'); return false; });
	
	
	
	
	/*---------------------------------------------- 
					 P A G I N A T I O N 
	------------------------------------------------*/
	if ($('.single-pagination').length >  0 && $(window).width() > 780) { 
		var pHeight = $('.single-pagination').height();
		var pPrevHeight = $('.single-pagination li.prev a').height();
		var pNextHeight = $('.single-pagination li.next a').height();
		if (pPrevHeight < pHeight-10 && $('.single-pagination li.prev a img').length >  0) { 
			$('.single-pagination li.prev ').css('marginTop',(pHeight-pPrevHeight)/2 + 'px'); }
		if (pNextHeight < pHeight-10 && $('.single-pagination li.next a img').length >  0) { 
			$('.single-pagination li.next ').css('marginTop',(pHeight-pNextHeight)/2 + 'px'); }
	}
	
	
	
	/*---------------------------------------------- 
				 INLINE VIDEO
	------------------------------------------------*/
	// $('body').on("click", ".inline-video", function() { 
	// 	var el = $(this);
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
	
	// $('body').on("click", ".close-inline-video", function() { 
	// 	var thisItem = $(this); 
	// 	thisItem.parents( ".inline-video" ).removeClass('active');
	// 	thisItem.parent( ".inline-iframe-container" ).remove();
	// 	return false;
	// });
	
	
	
	/*---------------------------------------------- 
				        T A B S 
	------------------------------------------------*/	
	// $(".tabs").each(function() {
	// 	var thisItem = $(this); 
	// 	thisItem.find('.tab-content').removeClass('active');
	// 	var rel = thisItem.find('.active').attr('href');
	// 	thisItem.find('.'+rel).addClass('active');
	// });
	
	// $(".tab-nav").on("click", "a", function() { 
	// 	var thisItem = $(this); 
	// 	var parentdiv = thisItem.parents('li').parent('ul').parent('div');
	// 	var rel = thisItem.attr('href');
		
	// 	$(parentdiv).find(".tab-nav a").removeClass("active");
	// 	thisItem.addClass("active");
		
	// 	$(parentdiv).find(".tab-container .tab-content").hide().removeClass('active');
	// 	$(parentdiv).find(".tab-container ."+rel).fadeIn(500).addClass('active');
		
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
		  	offset: '90px'
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
	// $(".toggle-item").each(function() {
	// 	$(this).find('.toggle-active').siblings('.toggle-inner').slideDown(300);							
	// });
	
	// $(".toggle-item").on("click", ".toggle-title", function() { 
	// 	var thisItem = $(this); 
	// 	var parentdiv = thisItem.parent('div').parent('div');
	// 	var active = thisItem.parent('div').find('.toggle-inner').css('display');
		
	// 	if ($(parentdiv).attr('class') === 'accordion') {
	// 		if (active !== 'none' ) { 
	// 			$(parentdiv).find('.toggle-item .toggle-inner').slideUp(300);
	// 			thisItem.toggleClass('toggle-active');
	// 		} else {
	// 			$(parentdiv).find('.toggle-item .toggle-inner').slideUp(300);
	// 			$(parentdiv).find('.toggle-item .toggle-title').removeClass('toggle-active');
				
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
$(document).on('ready', function() {
	if ($('#hero').length && $('#hero').hasClass('text-light')) {
		$('#logo').addClass('show-light-logo');
		$('.menu').addClass('menu-light');
	}
	if (!$('html#index-page').length && !$('html#about-page').length) {
		$('#main-nav ul > li').removeClass('current-menu-item')
		$('#main-nav .submenu li').removeClass('current-menu-item')
		$('#main-nav ul > li.projects').addClass('current-menu-item')
		var elmentID = $('html').attr('id')
		switch (elmentID) {
		  case 'artnet-page':
		    $('#main-nav .submenu li.artnet').addClass('current-menu-item')
		    break;
		  case 'akc-page':
		    $('#main-nav .submenu li.akc').addClass('current-menu-item')
		    break;
		  case 'weather-channel-page':
		    $('#main-nav .submenu li.twc').addClass('current-menu-item')
		    break;
		  case 'cognizant-page':
		    $('#main-nav .submenu li.cognizant').addClass('current-menu-item')
		    break;
		  case 'hard-workers-club-page':
		    $('#main-nav .submenu li.hwc').addClass('current-menu-item')
		    break;
		  case 'mkbl-page':
		    $('#main-nav .submenu li.mkbl').addClass('current-menu-item')
		    break;
		  case 'esquire-page':
		    $('#main-nav .submenu li.esquire').addClass('current-menu-item')
		    break;
		  case 'creative-time-page':
		    $('#main-nav .submenu li.ct').addClass('current-menu-item')
		    break;
		  case 'success-academy-page':
		    $('#main-nav .submenu li.sa').addClass('current-menu-item')
		    break;
		  case 'clear-page':
		    $('#main-nav .submenu li.clear-li').addClass('current-menu-item')
		    break;
		  default:
		    break;
		}
	} else if (!$('html#index-page').length) {
		$('#main-nav ul > li').removeClass('current-menu-item')
		$('#main-nav ul > li.about').addClass('current-menu-item')
	}
});
// $(window).resize(function() { 
// 	stickyfooter(); 
// });

$(window).on('scroll', function() {
	window.requestAnimationFrame(smoothShow);
	// smoothShow();
	// playVideo();
});

})($);
