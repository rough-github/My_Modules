let rwdMenu = $('#globalMenu');
let switchPoint = 768;
let slideSpeed = 500;

let menuSouce = rwdMenu.html();

$(window).on("load", function () {

	function menuSet() {
		if (window.innerWidth < switchPoint) {
			if (!($('#rwdMenuWrap').length)) {
				$('body').prepend('<div id="rwdMenuWrap"><div id="switchBtnArea"><a href="javascript:void(0);" id="switchBtn"></a></div></div>');
				$('#rwdMenuWrap').append(menuSouce);

				let menuList = $('#rwdMenuWrap > ul');
				let switchBtn = $('#switchBtn');

				switchBtn.on('click', function () {
					// menuList.slideToggle(slideSpeed);
					if(!$(this).hasClass("btnClose")) {
						menuList.css({
							height: "0",
							display: "block",
							opacity: "0"
						}).stop().animate({
							height: "225px",
							opacity: "1"
						}, 500, "swing")
						$(this).addClass('btnClose');
					} else {
						menuList
							.stop().animate({
								height: "0",
								opacity: "0"
							}, 500, "swing", function() {
								menuList.css({
									display: "none"
								})
							})
						$(this).removeClass('btnClose');

					}
				});
			}
		} else {
			$('#rwdMenuWrap').remove();
		}
	}

	$(window).on('resize', function () {
		menuSet();
	});

	menuSet();
});
