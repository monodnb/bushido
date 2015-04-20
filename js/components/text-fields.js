(function ($, window, document) {

	//Variables
	var $document = $(document),
		$window = $(window),
		$body = $("body"),
		$input = $("input"),
		$focusedInput = $("input.focused"),
		$labeledInput = $("input[label]");

	// The $ is now locally scoped
	$(function () {

		// DOM ready!


		// Initial setup
		$input.on("focus", function () {
			$input.removeClass("focus pressed");
			$(this).addClass("focus pressed");
			$labeledInput.closest(".labeled-input").removeClass("focus pressed");
			$(this).closest(".labeled-input").addClass("focus pressed");
		});
		$labeledInput.each(addLabel);
		$input.on("blur change", setFill);
		$input.updateStyle();

		// Event delegation


	});


	// Functions

	$.fn.updateStyle = function() {
		return this.each(function() {
			var $this = $(this);
			var $labeledParent = $this.closest(".labeled-input");
			var isFilled = $this.val();
			if (isFilled) {
				$this.addClass("filled");
				$labeledParent.addClass("filled");
			} else {
				$this.removeClass("filled");
				$labeledParent.removeClass("filled");
			}
    });

};

	function addLabel() {
		var $this = $(this),
			labelText = $this.attr("label"),
			label = '<div class="label">' + labelText + '</div>';
		console.log(labelText);
		$this.wrap('<div class="labeled-input"></div>');
		$this.removeAttr("placeholder");
		$this.after(label);
		$input.updateStyle();
	}

	function setFill() {
		var $this = $(this),
			$labeledParent = $this.closest(".labeled-input");
		if ($this.val()) {
			$this.addClass("filled");
			$labeledParent.addClass("filled");
		} else {
			$this.removeClass("filled");
			$labeledParent.removeClass("filled");
		}
	}

}(window.jQuery, window, document)); // Fully reference jQuery after this point.
