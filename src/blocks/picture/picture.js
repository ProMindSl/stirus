$('.picture').fancybox({
  protect: true,
  buttons : [
    'zoom',
    'thumbs',
    'close'
  ]
});

/* Запуск анимации картинок галереи */
var tl = new TimelineMax();
var picCount = 6; /* Кол-во картинок в галерее */ 

for(let i=0; i<picCount; i++)
{
	tl.from('#g_pic'+(i+1), 0.5, { y:400, 
								    opacity:0, 
								    ease: Power4.easeOut,
								    delay: -0.25
									})
}

