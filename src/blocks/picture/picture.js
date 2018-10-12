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

/*for(let i=0; i<picCount; i++)
{
	let dely = (i==0)? 0 : -0.17;
	tl.from('#g_pic'+(i+1), 0.44, { y:400, 
								    opacity:0, 
								    ease: Power4.easeOut,
								    delay: (i==0)? 0 : -0.25
									})
}*/

tl.from('#g_pic1', 0.44, { y:400, 
								    opacity:0, 
								    ease: Power4.easeOut,
								    delay: 0
									})
   .from('#g_pic2', 0.44, { y:400, 
								    opacity:0, 
								    ease: Power4.easeOut,
								    delay: -0.25
									})
   .from('#g_pic3', 0.44, { y:400, 
								    opacity:0, 
								    ease: Power4.easeOut,
								    delay: -0.25
									})
   .from('#g_pic4', 0.44, { y:400, 
								    opacity:0, 
								    ease: Power4.easeOut,
								    delay: -0.25
									})
   .from('#g_pic5', 0.44, { y:400, 
								    opacity:0, 
								    ease: Power4.easeOut,
								    delay: -0.25
									})
   .from('#g_pic6', 0.44, { y:400, 
								    opacity:0, 
								    ease: Power4.easeOut,
								    delay: -0.25
									});

