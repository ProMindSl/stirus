/* ----------- front.js ------------ */
/* опредение переменных */
var tl_front = new TimelineMax();
var bg_1 = document.getElementById("bg_front_l1");
var bg_2 = document.getElementById("bg_front_l2");
var bg_3 = document.getElementById("bg_front_l3");
var bg_4 = document.getElementById("bg_front_l4");
var bg_5 = document.getElementById("bg_front_l5");
var bgs = [bg_1, bg_2, bg_3, bg_4, bg_5];

/* делаем невидимыми слои bg и title */
/*$('h1.text-center').x = 100;*/
/*$('h1.text-center').css('opacity', '0');
$('.front__comment').css('opacity', '0');*/

TweenMax.from('h1.text-center', 1, {x:100});
TweenMax.from('h1.text-center', 1.5, {opacity:0});
TweenMax.from('.front__comment', 3, {opacity:0});

/*tl_front.from(bg_1, 0.5, {y:400, onComplete:frontTitileStart});*/

function frontTitileStart()
{
	
}

window.onload = function() 
{
	window.onscroll = onScrollHandler;
	
};


function onScrollHandler()
{
	/* Если текущая страница - главная, двигаем элементы заднего фона front-блока*/
	if(window.location.href == PAGE_INDEX) bgMove();

}

/* Скроллинг bg*/
function bgMove()
{
	let scrolled = window.pageYOffset || document.documentElement.scrollTop;
	
	let posY_bg1 = 317+(scrolled/10)+'px';
	TweenMax.to(bg_1, 1, {backgroundPositionY:posY_bg1});

	let posY_bg2 = 171+(scrolled/10)+'px';
	TweenMax.to(bg_2, 1, {backgroundPositionY:posY_bg2});

	let posY_bg3 = (scrolled/10)-70+'px';
	TweenMax.to(bg_3, 1, {backgroundPositionY:posY_bg3});

	let posY_bg4 = 25+(scrolled/15)+'px';
	TweenMax.to(bg_4, 1, {backgroundPositionY:posY_bg4});

	let posY_bg5 = (scrolled/10)-70+'px';
	TweenMax.to(bg_5, 1, {backgroundPositionY:posY_bg5});

};