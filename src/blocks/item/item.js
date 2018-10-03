/* Убираем видимость блока текста описания при общей высоте элементов 
   превышающих высоту контейнера */
/*$(window).resize(function(){
   	let discrHeight = $('.item__content-top').height();
   	let titleHeight = $('.item__date').height();

   	// флаг на превышение высоты внутри item-элемента
   	let isSizeIncorrect = ((discrHeight+titleHeight) > 230) ? true:false; 

   	if (isSizeIncorrect)
   	{
   		$('.item__dscr').css('display', 'none');
   	}
   	else 
   	{
   			$('.item__dscr').css('display', 'block');
   	}
});*/
