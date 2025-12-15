/**
*	Site-specific configuration settings for flux JS
*/
hs.graphicsDir = 'flux/graphics/';
hs.showCredits = false;
hs.outlineType = 'custom';
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
