$(function () {
	let setElm = $('.loopSlider');
	let slideSpeed = 2000;

	setElm.each(function () {
		let self = $(this);
		let selfWidth = self.innerWidth();
		let findUl = self.find('ul');
		let findLi = findUl.find('li');
		let listWidth = findLi.outerWidth();
		let listCount = findLi.length;
		let loopWidth = listWidth * listCount;

		findUl.wrapAll('<div class="loopSliderWrap" />');
		let selfWrap = self.find('.loopSliderWrap');

		if (loopWidth > selfWidth) {
			findUl.css({ width: loopWidth }).clone().appendTo(selfWrap);

			selfWrap.css({ width: loopWidth * 2 });

			function loopMove() {
				selfWrap.animate({ left: '-' + (loopWidth) + 'px' }, slideSpeed * listCount, 'linear', function () {
					selfWrap.css({ left: '0' });
					loopMove();
				});
			}
			loopMove();
		}
	});
});
