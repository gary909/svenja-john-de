/**
*	Site-specific configuration settings for flux JS
*/
hs.graphicsDir = 'flux/graphics/';
hs.showCredits = false;
hs.outlineType = 'rounded-white';
hs.transitions = ['expand', 'crossfade'];
hs.fadeInOut = true;
hs.captionEval = 'this.thumb.title';
hs.headingOverlay.position = 'below';
// wo das fenster nicht hinfliegt soll
hs.marginTop = 120;
hs.marginLeft = 25;
hs.marginBottom = 80;


// Add the slideshow controller
hs.addSlideshow({

	interval: 5000,
	repeat: false,
	useControls: false,
	// TEST
		overlayOptions: {
			className: 'controls-in-heading',
			opacity: '0.75',
			position: 'bottom center',
			offsetX: '0',
			offsetY: '-10',
			hideOnMouseOut: true
	},
	// TEST ende
//	thumbstrip: {
//		mode: 'horizontal',
//		position: 'bottom left',
//		relativeTo: 'viewport',
//	}

});


// Add the slideshow controller for bracelets (multi-view: side/colour/top views)
hs.addSlideshow({
	slideshowGroup: ['brace-rokasho', 'brace-laramie', 'brace-minoo', 'brace-marconi', 'brace-murano', 'brace-zamist', 'brace-pawlowo', 'brace-babadag', 'brace-sibiu'],
	interval: 5000,
	repeat: true,
	useControls: true,
	fixedControls: true,
	overlayOptions: {
		className: 'controls-in-heading',
		opacity: '0.75',
		position: 'bottom right',
		offsetX: '95',
		offsetY: '42',
		hideOnMouseOut: false,
	},
});

// gallery config object
var config1 = {
   slideshowGroup: 'group1',
   thumbnailId: 'thumb1',
   transitions: ['expand', 'crossfade']
};
var config2 = {
   slideshowGroup: 'group2',
   thumbnailId: 'thumb2',
   transitions: ['expand', 'crossfade']
};

// Preload the multi-view (hidden) bracelet images so the first crossfade is instant
hs.addEventListener(window, 'load', function () {
	var hidden = document.getElementsByClassName('hidden-container');
	for (var i = 0; i < hidden.length; i++) {
		var a = hidden[i].getElementsByTagName('a')[0];
		if (a && a.href) { var img = new Image(); img.src = a.href; }
	}
});
