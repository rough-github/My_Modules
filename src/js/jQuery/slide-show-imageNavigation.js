$(function () {
	let setElm = $('.slideShow');
	let fadeSpeed = 1000;
	let switchDelay = 5000;

	$(window).on("load", function () {
		setElm.each(function () {
			let self = $(this);
			let findUl = self.find('ul');
			let findLi = findUl.find('li');
			let findLiFirst = findUl.find('li:first');
			let findLiCount = findLi.length;
			let findImg = findLi.find('img');
			let fadeTimer;

			findLi.css({
				display: 'block',
				opacity: '0',
				zIndex: '99'
			});

			function areaHeight() {
				let imgHeight = findImg.height();

				self.css({ height: imgHeight });
				findUl.css({ height: imgHeight });
				findLi.css({ height: imgHeight });
			}
			$(window).on('resize', function () { areaHeight(); });
			areaHeight();

			findLiFirst
				.addClass('mainActive')
				.css({ zIndex: '100' })
				.stop()
				.animate({ opacity: '1' }, fadeSpeed);

			findLi.each(function (i) {
				$(this).attr('class', 'viewList' + (i + 1));
			});

			if (findLiCount > 1) {
				// ページネーション
				let pagination = $('<div class="pagiNation"></div>');
				self.append(pagination);

				findLi.each(function (i) {
					pagination.append('<a href="javascript:void(0);" class="pn' + (i + 1) + '"></a>');
				});

				let pnPoint = pagination.find('a');
				let pnFirst = pagination.find('a:first');
				let pnLast = pagination.find('a:last');
				let pnCount = pagination.find('a').length;

				pnFirst.addClass('pnActive');

				pnPoint.click(function () {
					let setNum = pnPoint.index(this);
					let showCont = setNum + 1;

					findUl
						.find('.viewList' + (showCont))
						.addClass('mainActive')
						.stop()
						.animate({ opacity: '1' }, fadeSpeed, function () {
							$(this).css({ zIndex: '100' });
						});
					findUl
						.find('.viewList' + (showCont))
						.siblings()
						.removeClass('mainActive')
						.stop()
						.animate({ opacity: '0' }, fadeSpeed, function () {
							$(this).css({ zIndex: '99' });
						});
					pnPoint.removeClass('pnActive');
					$(this).addClass('pnActive');
				});

				// サイドナビボタン
				self.append('<a href="javascript:void(0);" class="btnPrev"></a><a href="javascript:void(0);" class="btnNext"></a>');
				let btnNext = self.find('.btnNext');
				let btnPrev = self.find('.btnPrev');

				function switchNext() {
					let setActive = pagination.find('.pnActive');
					let pnIndex = pnPoint.index(setActive);
					let pnNum = pnIndex + 1;

					if (pnCount == pnNum) {
						pnFirst.click();
					} else {
						setActive.next('a').click();
					}
				}

				function switchPrev() {
					let setActive = pagination.find('.pnActive');
					let pnIndex = pnPoint.index(setActive);
					let pnNum = pnIndex + 1;

					if (1 == pnNum) {
						pnLast.click();
					} else {
						setActive.prev('a').click();
					}
				}

				btnNext.click(function () { switchNext(); });
				btnPrev.click(function () { switchPrev(); });

				function timerStart() {
					fadeTimer = setInterval(function () {
						switchNext();
					}, switchDelay);
				}
				timerStart();

				function timerStop() {
					clearInterval(fadeTimer);
				}

				self.hover(function () {
					timerStop();
				}, function () {
					timerStart();
				});
			}
		});
	});
});
