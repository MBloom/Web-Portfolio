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
	$('#nav-list').fadeToggle(600);
	$('.navicon-button').toggleClass('open');
})
$('.navicon-button').click(function(){
	$(this).toggleClass('open');
	$('#nav-list').fadeToggle(600);
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