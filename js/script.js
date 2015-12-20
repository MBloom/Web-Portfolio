$(document).on('click', '.grid-item img', function(){
	var c = $(this).attr('src').replace('sm_','');
	//document.getElementById('image-holder').style.visibility = 'visible';
	$('body').addClass('stop-scrolling');
	$('#image-holder').html('<img src="'+ c +'" />');
	$('#image-holder').fadeIn(500);         
}) 
$('#navbar ul a').on('click', function(e){
	e.preventDefault();
	$(this).closest('li').addClass('current').siblings().removeClass('current');
	$('#nav-list').fadeToggle(300);
	$('.navicon-button').toggleClass('open');
})
$('.navicon-button').click(function(){
	toggleMenu();
	// $('#nav-list span').toggleClass('show');
});
$(window).scroll(function(){
	if($(window).scrollTop() > 50)
		$('#select').css('opacity', '0');
	else
		$('#select').css('opacity', '1');
})
window.onload = masonryInit;
function masonryInit() { 
	var $container = $('#image-grid');
	$container.masonry({
		columnWidth: 195,
		itemSelector : '.grid-item',
		gutter: 0
	});
}
function closeImage(obj) {
	$('#image-holder').fadeOut(500);    
	$('body').removeClass('stop-scrolling');
}
function toggleMenu(){
	if($('.navicon-button').hasClass('open')){
		$('.navicon-button').removeClass('open');
		$('.bkgd').fadeOut(300);
		$('#content').removeClass('blur');
		hideMenu();
	}
	else{
		$('.navicon-button').addClass('open');
		$('.bkgd').fadeIn(300);
		$('#content').addClass('blur');
		showMenu();
	}
}
function showMenu(){
    $('#nav-list span').each( function(i, el) {
    	setTimeout(function() {
			$(el).animate({
				'opacity': 1.0,
				'top': '0px'
			}, 100);
		}, (i * 25));
    });
}
function hideMenu(){
    $('#nav-list span').each( function(i, el) {
    	setTimeout(function() {
			$(el).animate({
				'opacity': 0,
				'top': '40px'
			}, 100);
		}, (i * 25));
    });
}