$(function () {
	let setElm = $('.loopSlider');
	let slideSpeed = 2000;

	setElm.each(function () {
		let self = $(this);
		let selfHeight = self.innerHeight();
		let findUl = self.find('ul');
		let findLi = findUl.find('li')
		let listHeight = findLi.outerHeight();
		let listCount = findLi.length;
		let loopHeight = listHeight * listCount;

		findUl.wrapAll('<div class="loopSliderWrap" />');
		let selfWrap = self.find('.loopSliderWrap');

		if (loopHeight > selfHeight) {
			findUl.css({ height: loopHeight }).clone().appendTo(selfWrap);

			function loopMove() {
				selfWrap.animate({
					top: '-' + (loopHeight) + 'px' },
					slideSpeed * listCount,
					'linear',
					function () {
						selfWrap.css({ top: '0' });
						loopMove();
					});
			}

			selfWrap.css({ height: loopHeight * 2 });
			loopMove();
		}
	});
});
