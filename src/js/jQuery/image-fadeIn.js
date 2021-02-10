// ランダムにフェードイン
$(function () {
	let setElm = $('.delayLoad > ul > li');
	let delayTime = 100;

	function randomShow() {
		let elmLength = setElm.length;
		let randomSet = Math.floor(Math.random() * elmLength);

		$(setElm[randomSet]).css({
			visibility: 'visible',
			opacity: '0'
		}).animate({ opacity: '1' }, 1000);
		setElm.splice(randomSet, 1);

		if(elmLength > 0) {
			setTimeout(function() {
				randomShow();
			}, delayTime)
		} else {
			return false
		}
	}

	randomShow();
})

// 順番にフェードイン
// $(function () {
//   let setElm = $('.delayLoad > ul > li');
//   let delayTime = 100;

//   setElm.each(function (i) {
//     $(this).delay(i * delayTime).css({ visibility: 'visible', opacity: '0' }).animate({ opacity: '1' }, 1000);
//   });
// });
