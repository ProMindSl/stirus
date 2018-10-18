/* header */
/* global vars */
const PAGE_INDEX = 'http://localhost:3000/index.html';
const PAGE_DOCUMENTS = 'http://localhost:3000/documents.html';
const PAGE_GALERY = 'http://localhost:3000/galery.html';
const PAGE_CONTACT = 'http://localhost:3000/contact.html';

var currPage = PAGE_INDEX;

setCurrPage(getNameByURL(window.location.href));

function setCurrPage(name)
{
	switch(name)
	{
		case 'main':
			currPage = PAGE_INDEX;
			break;

		case 'documents':
			currPage = PAGE_DOCUMENTS;
			break;

		case 'galery':
			currPage = PAGE_GALERY;
			break;

		case 'contact':
			currPage = PAGE_CONTACT;
			break;
	}
	/* Меняем цвет кнопки текущей страницы в хэдере*/
	$('.header__link[name='+name+']').css({'color':'#bb1620'});
}

function getNameByURL(url)
{
	switch (url)
	{
		case PAGE_INDEX:
			return 'main';
			break;

		case PAGE_DOCUMENTS:
			return 'documents';
			break;

		case PAGE_GALERY:
			return 'galery';
			break;

		case PAGE_CONTACT:
			return 'contact';
			break;
	}

}