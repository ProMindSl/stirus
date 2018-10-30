// int-picture Вставка текста в title при наведении на область квартиры в плане
var homes = ['.home-point-1',
			 '.home-point-2',
			 '.home-point-3',
			 '.home-point-4',
			 '.home-point-5',
			 '.home-point-6'];

for(let i_h=0; i_h<homes.length; i_h++)
{
	console.log('elem '+i_h);
	$(homes[i_h]).on('mouseover', function(){
		$('.int-picture__label').html(getApartamentDiscr(homes[i_h]))
		/*TweenMax.from($('.int-picture__label'), 0.5, { opacity:0});*/
	});
	$(homes[i_h]).on('mouseout', function(){
		$('.int-picture__label').html(' ');
	});
}

function getApartamentDiscr(pointName) //принимает название поля квартиры (класс для point-hover евента) 
{ //Возвращает html-значение для отображения параметров квартиры
	let strVal;

	switch(pointName)
	{
		case '.home-point-1':
		case '.home-point-6':
			strVal = '3-комнатная квартира (62,7/104,1/106,2)';
			break;

		case '.home-point-2':
		case '.home-point-5':
			strVal = '2-комнатная квартира (38,2/69,2/70,4)';
			break;
		case '.home-point-3':
		case '.home-point-4':
			strVal = '2-комнатная квартира (44,1/72,5/74,65)';
			break;
	}

	return strVal;
}

/*$('.home-point-1').on('mouseover', function(){
	$('.int-picture__label').html('3-комнатная квартира (62,7/104,1/106,2)')
	TweenMax.from($('.int-picture__label'), 0.5, { opacity:0});
});
$('.home-point-1').on('mouseout', function(){
	$('.int-picture__label').html(' ');
});*/