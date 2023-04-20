$(function() {
	'use strict';
	//adjust slider height
	var winh	=$(window).height(),
		upperh	=$('.upper_bar').innerHeight(),
		navh	=$('.navbar').innerHeight();
	$('.slider , .carousel-item').height(winh-(upperh+navh));
			  
	//featured work shuffle
	$('.featured-work ul li').on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');
		if($(this).data('class')==='all'){
			$('.shuffle-imgs .col-md').css('opacity',1);
										  }else{
												$('.shuffle-imgs .col-md').css('opacity','.09');
												$($(this).data('class')).parent().css('opacity',1);
											   }
													});
			  });
	


