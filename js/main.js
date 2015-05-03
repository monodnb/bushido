(function ($, window, document) {

	//Variables
	var $document = $(document),
		$window = $(window),
		$body = $("body"),
		$toolbar = $("#toolbar"),
		$dialog = $("#dialog");

	// The $ is now locally scoped
	$(function () {

		// DOM ready!


		// Initial setup
		$("button").ripple();
		$(".tab").ripple();
		$(".lazy").siblings().hide();
		$(".lazy").one("load", function () {
			$(this).addClass("lazy-loaded").siblings().fadeIn();;
		}).each(function () {
			if (this.complete){
				$(this).load();
			}
		});

		// Event delegation
		$dialog.on("click", changeTheme);

	});

	function changeTheme() {
		$body.toggleClass("light-theme dark-theme");
	}

}(window.jQuery, window, document)); // Fully reference jQuery after this point.
