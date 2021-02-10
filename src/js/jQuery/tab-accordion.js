$(function () {
	let rwdTab = $('#tabAccordion');
	let switchPoint = 768;
	let fadeSpeed = 500;
	let slideSpeed = 500;

	let btnElm = rwdTab.children('.tabAccordion__list').children('.tabAccordion__header');
	let contentsArea = rwdTab.children('.tabAccordion__list').children('.tabAccordion__body');

	btnElm.on('click', function () {
		if (!$(this).hasClass('btnAcv')) {
			btnElm.removeClass('btnAcv');
			$(this).addClass('btnAcv');

			if (window.innerWidth > switchPoint) {
				contentsArea.fadeOut(fadeSpeed);
				$(this).next().fadeIn(fadeSpeed);
			} else {
				contentsArea.slideUp(slideSpeed);
				$(this).next().slideDown(slideSpeed);
			}
		}
	});

	btnElm.first().click();
});
