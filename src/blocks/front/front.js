TweenMax.from('h1.text-center', 1, {x:100});
TweenMax.from('h1.text-center', 1.5, {opacity:0});
TweenMax.from('.front__comment', 3, {opacity:0});

window.onload = function() 
{
	window.onscroll = bgMove;
};


/* Скроллинг bg*/
function bgMove() /* start position of bg is -80px*/
{
	let scrolled = window.pageYOffset || document.documentElement.scrollTop;
	let bg = document.getElementById("bg_front");
	/*bg.style.backgroundPositionY = (-70+(scrolled/2))+'px';*/
	let posY = (scrolled/10)-70+'px';
	TweenMax.to(bg, 1, {backgroundPositionY:posY});
};