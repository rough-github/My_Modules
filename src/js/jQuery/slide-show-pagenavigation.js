$(function () {
	let setElm = $('.slideShow');
	let fadeInSpeed = 1000;
	let fadeOutSpeed = 500;

	$(window).on("load", function () {
		setElm.each(function () {
			let self = $(this);
			let findUl = self.find('.slideShow__lists');
			let findLi = findUl.find('.slideShow__item');
			let findLiFirst = findUl.find('.slideShow__item:first');
			let findLiCount = findLi.length;
			let findImg = findLi.find('img');

			findLi.css({
				display: 'none',
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
				.css({
					zIndex: '100',
					display: "block"
				})
				.stop()
				.animate({
					opacity: '1'
				}, fadeInSpeed);

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

					setTimeout(function() {
						// 出現
						findUl
							.find('.viewList' + (showCont))
							.addClass('mainActive')
							.css({
								zIndex: '100',
								display: "block",
							})
							.stop()
							.animate({
								opacity: '1',
							}, fadeInSpeed);
					}, fadeOutSpeed - 50);

					// 消える
					findUl
						.find('.viewList' + (showCont))
						.siblings()
						.removeClass('mainActive')
						.stop()
						.animate({
							opacity: '0',
						}, fadeOutSpeed, function() {
							$(this).css({
								zIndex: '99',
								display: "none"
							});
						});
					pnPoint.removeClass('pnActive');
					$(this).addClass('pnActive');
				});

				// サイドナビボタン
				self
					.append('<a href="javascript:void(0);" class="btnPrev"></a><a href="javascript:void(0);" class="btnNext"></a>');
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
						// click再利用
						setActive.prev('a').click();
					}
				}

				btnNext.click(function () { switchNext(); });
				btnPrev.click(function () { switchPrev(); });
			}
		});
	});
});
