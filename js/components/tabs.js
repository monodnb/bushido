(function ($, window, document) {

	//Variables
	var $document = $(document),
		$window = $(window),
		$body = $("body"),
		$tabGroup = $(".tab-group"),
		$tabBar = $tabGroup.find(".tab-bar"),
		$tabDisplay = $tabGroup.find(".tab-display"),
		$indicator = $tabBar.find(".indicator"),
		$tab = $tabBar.find(".tab"),
		$allActiveTabs = $tabBar.find(".tab.active"),
		$tabContent = $(".tab-content");

	// The $ is now locally scoped
	$(function () {

		// DOM ready!


		// Initial setup
		update();
		// Event delegation
		$tab.on("click", selectTab);
		$window.on("resize", update);
	});


	// Functions

	function update() {
		$indicator.each(function () {
			var $parent = $(this).closest(".tab-bar"),
				$siblings = $(this).siblings(".tab"),
				$activeSibling = $(this).siblings(".active"),
				perc = 100 / $siblings.length;
			if ($activeSibling.length > 0) {
				var index = $activeSibling.index() - 1;
				$(this).css({
					left: index * perc + "%"
				});
			} else {
				$(this).css({
					left: 0
				});
			}
			$(this).css("width", perc + "%");
		});


		$tabDisplay.each(function () {
			var $theseTabs = $(this).find(".tab-content"),
				tabsNumber = $theseTabs.length;
			$theseTabs.css({
				width: $(this).closest(".tab-group").outerWidth()
			});
			$(this).css({
				width: $(this).outerWidth() * tabsNumber
			});
		});
	}

	function selectTab() {
		var $this = $(this),
			$thisTabGroup = $this.closest(".tab-group"),
			$thisTabBar = $thisTabGroup.find(".tab-bar"),
			$thisTabDisplay = $thisTabGroup.find(".tab-display"),
			$thisIndicator = $thisTabBar.find(".indicator"),
			$thisTabs = $this.siblings(".tab"),
			$activeTab = $tabBar.find(".tab.active"),
			$thisTabContent = $(".tab-content");

		$thisTabs.removeClass("active");
		$this.addClass("active");
		$thisIndicator.css({
			left: ($this.index() - 1) * (100 / $thisIndicator.siblings(".tab").length) + "%"
		});
		viewContent($thisTabGroup, $activeTab, $this);
	}

	function viewContent($thisTabGroup, $activeTab, $this) {
		var activeTabRel = $activeTab.attr("tab-rel"),
			selectedTabRel = $this.attr("tab-rel"),
			$activeView = $thisTabGroup.find(".tab-content[tab-rel='" + activeTabRel + "']"),
			$activeViewId = $activeView.index() + 1,
			$selectedView = $thisTabGroup.find(".tab-content[tab-rel='" + selectedTabRel + "']"),
			$selectedViewId = $selectedView.index() + 1,
			$thisTabDisplay = $selectedView.closest(".tab-display"),
			$theseTabContents = $thisTabDisplay.find(".tab-content"),
			//tabDisplayOffset = $activeView.outerWidth() * ($selectedViewId - 1);
			tabDisplayOffset = $selectedView.position().left;
		$theseTabContents.removeClass("active");
		$selectedView.addClass("active");
		console.log(tabDisplayOffset);
		$thisTabDisplay.css({
			left: -tabDisplayOffset
		});
	}

}(window.jQuery, window, document)); // Fully reference jQuery after this point.
