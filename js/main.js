(function ($, window, document) {

	// The $ is now locally scoped
	$(function () {

		// DOM ready!
		//Variables
		$document = $(document),
			$window = $(window),
			$body = $("body"),
			$content = $("#content"),
			$worksPagination = $("#works-pagination");



		// Initial setup


		// Event delegation
		$(".bs-trigger").on("click", showBottomSheet);


	});

	// Functions
	function showBottomSheet() {
		$body.addClass("no-scroll");
		$("#bottom-sheet").css({
			transform: "translateY(0)",
			webkitTransform: "translateY(0)",
			msTransform: "translateY(0)"
		});
		$(".bottom-sheet-overlay").css({
			backgroundColor: "rgba(0, 0, 0, .5)"
		});
	}

}(window.jQuery, window, document)); // Fully reference jQuery after this point.
