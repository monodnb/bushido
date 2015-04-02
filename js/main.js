(function ($, window, document) {

	// The $ is now locally scoped
	$(function () {

		// DOM ready!
		//Variables
		$document = $(document),
			$window = $(window),
			$body = $("body"),
			$toolbar = $("#toolbar"),
			$content = $("#content"),
			$bottomSheet = $("#bottom-sheet"),
			$bsContainer = $bottomSheet.find(".bs-container"),
			$bsMedia = $bottomSheet.find(".bs-media"),
			$bsContent = $bottomSheet.find(".bs-content"),
			$worksPagination = $("#works-pagination");



		// Initial setup


		// Event delegation
		$(".bs-trigger").on("click", showBottomSheet);
		$bsContainer.on("scroll", scrollBottomSheet);
		$window.on("scroll", getScrollPosition);


	});

	// Functions
	function showBottomSheet() {
		$body.addClass("no-scroll");
		$bottomSheet.addClass("active");
		$bottomSheet.css({
			//top: $window.scrollTop()
		});
		$(".bottom-sheet-overlay").addClass("active");
		$bsMedia.css({
			height: $bsMedia.height()
		});
		bsMediaInitHeight = $bsMedia.height();
		bsMediaMinHeight = $toolbar.height();
	}

	function getScrollPosition(){
		//console.log($window.scrollTop());
	}

	function scrollBottomSheet(){
		var scrollAmnt = $bsContent.offset().top -$bottomSheet.offset().top,
			newOpct = (scrollAmnt-bsMediaMinHeight)/(bsMediaInitHeight-bsMediaMinHeight),
			newFntsz = (1.71 - 1.43)*newOpct +1.43;
		$bsMedia.css({
			height: scrollAmnt
		});
		$bsMedia.find("img").css({
			marginTop: (scrollAmnt - bsMediaInitHeight)/2,
			opacity: newOpct*2 - 0.25
		});
		$bsMedia.find(".bs-scrim").css({
			opacity: newOpct*2 - 0.25
		});
		/*if(newFntsz >=1.43){  // not to smooth on mobile
			$bsMedia.find(".bs-title").css({
				fontSize: newFntsz+"rem"
			});
		}*/
	}

}(window.jQuery, window, document)); // Fully reference jQuery after this point.
