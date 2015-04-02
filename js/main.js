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
		$("#bottom-sheet").addClass("active");
		$(".bottom-sheet-overlay").addClass("active");
	}

}(window.jQuery, window, document)); // Fully reference jQuery after this point.
