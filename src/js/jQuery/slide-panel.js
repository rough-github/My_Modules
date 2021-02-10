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

		selfUl.css({ width: slideWidth });

		if (selfWidth < slideWidth) {
			self
				.append('<a href="javascript:void(0);" class="btnPrev"></a><a href="javascript:void(0);" class="btnNext"></a>')
				.find('ul')
				.wrapAll('<div class="slideWrap" />');

			let btnNext = self.find('.btnNext');
			let btnPrev = self.find('.btnPrev');

			btnNext.click(function () {
				selfUl
					.not(':animated')
					.animate({ left: '-=' + (listWidth) }, slideSpeed, function () {
						btnSet();
					});
			});

			btnPrev.click(function () {
				selfUl
					.not(':animated')
					.animate({ left: '+=' + (listWidth) }, slideSpeed, function () {
						btnSet();
					});
			});

			function btnSet() {
				let ulLeft = parseInt(selfUl.css('left'));
				let maskWidth = selfWidth - slideWidth;

				if (ulLeft == 0) {
					btnNext.css({ display: 'block' });
					btnPrev.css({ display: 'none' });
				} else if (ulLeft <= maskWidth) {
					btnNext.css({ display: 'none' });
					btnPrev.css({ display: 'block' });
				} else {
					btnNext.css({ display: 'block' });
					btnPrev.css({ display: 'block' });
				}
			}
			btnSet();
		}
	});
});
