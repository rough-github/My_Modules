// 全体の最大値ではなく、横一列の最大値にそれぞれ合わせる
$(function () {
	var setElm = $('.listArea ul'),
		setChild = setElm.find('li'),
		chdLength = setChild.length,
		pdTop = parseInt(setChild.css('padding-top')),
		pdBtm = parseInt(setChild.css('padding-bottom')),
		boxSizing = setChild.css('box-sizing');

	function setHeight() {
		h = 0;

		prtWidth = setElm.outerWidth();
		chdWidth = setChild.outerWidth();
		// 横に並ぶ数を算出
		setNum = Math.floor(prtWidth / chdWidth);

		setChild.css({ height: 'auto' }).each(function (i) {
			var self = $(this),
				hSet = self.outerHeight(),
				i = i + 1;

			// 識別用class
			self.addClass('heightReplace');

			if (hSet > h) {
				h = hSet;
			}

			if (boxSizing === 'border-box') {
				setElm.find('.heightReplace').css({ height: h });
			} else {
				setElm.find('.heightReplace').css({ height: (h - (pdTop + pdBtm)) });
			}

			// 次の行に行くため高さを0にリセット
			if (i % setNum == 0 || i == chdLength) {
				h = 0;
				setChild.removeClass('heightReplace');
			}
		});
	}

	$(window).on('load resize', function () {
		setHeight();
	});
});

// 一番高い要素に高さを合わせる
// $(function () {
//   var setElm = $('.listArea ul li'),
//     pdTop = parseInt(setElm.css('padding-top')),
//     pdBtm = parseInt(setElm.css('padding-bottom')),
//     boxSizing = setElm.css('box-sizing');

//   let h = 0;

//   setElm.each(function () {
//     var self = $(this),
//       hSet = self.outerHeight();

//     if (hSet > h) {
//       // 最大値を算出
//       h = hSet;
//     }
//   });

//   // border-boxが指定されているものは
//   if (boxSizing === 'border-box') {
//     setElm.css({ height: h });
//   } else {
//     setElm.css({ height: (h - (pdTop + pdBtm)) });
//   }
// });
