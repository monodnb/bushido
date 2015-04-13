(function ($, window, document) {

	//Variables
	var $document = $(document),
		$window = $(window),
		$body = $("body"),
		$checkbox = $(".checkbox");

		// The $ is now locally scoped
		$(function () {

			// DOM ready!


			// Initial setup


			// Event delegation
			$(".checkbox").on("click", doneCheckBox);
			$(".switch").on("click", turnOnSwitch);
			$(".slider-button").on("mousedown", expandSliderPin);

		});


	// Functions
	function doneCheckBox() {
		$(this).toggleClass("checked");
	}
	function turnOnSwitch() {
		$(this).toggleClass("on");
	}
	
	function expandSliderPin(startEvent) {
		$(this).toggleClass("pin");
		var startPos = startEvent.originalEvent.x,
			offset = $(this).position().left,
			translatePos;
		$window.on("mousemove", function(evt){
				console.log(evt.originalEvent.x - startPos);
				translatePos = "translateX(" + (evt.originalEvent.x - startPos + offset) + "px)";
				$(".pin").css({
					transform: translatePos,
					msTransform: translatePos,
					webkitTransform: translatePos
				});
			});
		$window.one("mouseup", function(){
			$(".pin").toggleClass("pin");
			$window.off("mousemove");
		});
	}

}(window.jQuery, window, document)); // Fully reference jQuery after this point.
