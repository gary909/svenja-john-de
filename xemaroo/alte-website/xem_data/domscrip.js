$('div.ssReferenzen').cycle({ 
    fx:    'scrollVert', 
    sync:   0,
	timeout: 20000,
	speed: 1000,
	next:   '#ssReferenzenNext', 
    prev:   '#ssReferenzenPrev'
});

// Launch Facebook!
FB.init({xfbml: true});
