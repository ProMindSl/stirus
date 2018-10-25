// Footer btns (like socials, but not exactly has that functions)

$(function() /* Возврат экрана в top */
{
	$(window).scroll(function() 
	{
 		if($(this).scrollTop() != 0) $('#btn_toTop').fadeIn();
 		else $('#btn_toTop').fadeOut();
  	});
 
	$('#btn_toTop').click(function() 
	{
 		$('body,html').animate({scrollTop:0},800);
 	});
});

/*$(function () {
  $('[data-toggle="popover"]').popover()
})
// Инициалищация popup-кнопки в
$(function () {
  $('.socials__item.socials__item--phone').popover({
    container: 'body'
  })
})*/