$(function () {
	let setElm = $('.slidePanel');
	let slideSpeed = 500;

	setElm.each(function () {
		let self = $(this);
		let selfWidth = self.innerWidth();
		let selfUl = self.find('ul');
		let selfLi = selfUl.find('li');
		let listWidth = selfLi.outerWidth();
		let listCount = selfLi.length;
		let slideWidth = listWidth * listCount;
		let moveCount = Math.round(selfWidth / listWidth);
		let wrapSplit = Math.ceil(listCount / moveCount);

		selfUl.css({ width: slideWidth });

		if (selfWidth < slideWidth) {
			self
				.append('<a href="javascript:void(0);" class="btnPrev"></a><a href="javascript:void(0);" class="btnNext"></a><div class="pagiNation"></div>')
				.find('ul')
				.wrapAll('<div class="slideWrap" />');

			let pagination = self.find('.pagiNation');

			$.each(new Array(wrapSplit), function (i) {
				pagination
					.append('<a href="javascript:void(0);" class="pn' + (i + 1) + '"></a>');
			});

			let pnPoint = pagination.find('a');
			let pnFirst = pagination.find('a:first');
			let pnLast = pagination.find('a:last');
			let pnCount = pagination.find('a').length;

			pnFirst.addClass('pnActive');

			pnPoint.click(function () {
				if (!(selfUl.is(':animated'))) {
					let showCont = pnPoint.index(this);

					selfUl
						.animate({ left: '-' + ((listWidth * moveCount) * showCont) }, slideSpeed);

					pnPoint.removeClass('pnActive');
					$(this).addClass('pnActive');
				}
			});

			let btnNext = self.find('.btnNext');
			let btnPrev = self.find('.btnPrev');

			btnNext.click(function () {
				if (!(selfUl.is(':animated'))) {
					let setActive = pagination.find('.pnActive');
					let pnIndex = pnPoint.index(setActive);
					let pnNum = pnIndex + 1;

					if (pnCount == pnNum) {
						pnFirst.click();
					} else {
						setActive.next('a').click();
					}
				}
			});

			btnPrev.click(function () {
				if (!(selfUl.is(':animated'))) {
					let setActive = pagination.find('.pnActive');
					let pnIndex = pnPoint.index(setActive);
					let pnNum = pnIndex + 1;

					if (1 == pnNum) {
						pnLast.click();
					} else {
						setActive.prev('a').click();
					}
				}
			});
		}
	});
});
