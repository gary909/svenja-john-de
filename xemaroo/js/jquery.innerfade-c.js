/* =========================================================

// jquery.innerfade-c.js

// Datum: 2013-21-10
// custom-vers.


// ========================================================= */


(function($) {

    $.fn.innerfade = function(options) {
        return this.each(function() {   
            $.innerfade(this, options);
        });
   };

    $.innerfade = function(container, options) {
        var settings = {
        		'animationtype':    'fade',
            'speed':            'slow',
            'type':             'sequence',
            'timeout':          3000,
           // 'containerheight':  'auto',
            'runningclass':     'innerfade',
            'children':         null
        };
        
   // TEST---anfang-1  (globale variable "ohne var"!) funzt :)     
   xoo = 1
   // TEST----ende--1
        


        if (options)
            $.extend(settings, options);
        if (settings.children === null)
            var elements = $(container).children();
        else
            var elements = $(container).children(settings.children);
        if (elements.length > 1) {
            $(container).css('position', 'relative').css('height', settings.containerheight).addClass(settings.runningclass);
            for (var i = 0; i < elements.length; i++) {
                $(elements[i]).css('z-index', String(elements.length-i)).css('position', 'absolute').hide();
                                
            };
            if (settings.type == "sequence") {
                setTimeout(function() {
                    $.innerfade.next(elements, settings, 1, 0);
                }, settings.timeout);
                $(elements[0]).show();
                

                
                
            } else if (settings.type == "random") {
            		var last = Math.floor ( Math.random () * ( elements.length ) );
                setTimeout(function() {
                    do { 
							current = Math.floor ( Math.random ( ) * ( elements.length ) );
						} while (last == current );             
				$.innerfade.next(elements, settings, current, last);
                }, settings.timeout);
                $(elements[last]).show();
						} else if ( settings.type == 'random_start' ) {
								settings.type = 'sequence';
								var current = Math.floor ( Math.random () * ( elements.length ) );
								setTimeout(function(){
									$.innerfade.next(elements, settings, (current + 1) %  elements.length, current);
								}, settings.timeout);
								$(elements[current]).show();
						}	else {
							alert('Innerfade-Type must either be \'sequence\', \'random\' or \'random_start\'');
						}
				}
    };
    

    

    $.innerfade.next = function(elements, settings, current, last) {
        if (settings.animationtype == 'slide') {
            $(elements[last]).slideUp(settings.speed);
            $(elements[current]).slideDown(settings.speed);
        } else if (settings.animationtype == 'fade') {
            $(elements[last]).fadeOut(settings.speed);
            $(elements[current]).fadeIn(settings.speed, function() {
							removeFilter($(this)[0]);
						});
        } else
            alert('Innerfade-animationtype must either be \'slide\' or \'fade\'');
        if (settings.type == "sequence") {
            if ((current + 1) < elements.length) {
                current = current + 1;
                last = current - 1;
            } else {
                current = 0;
                last = elements.length - 1;
            }
        } else if (settings.type == "random") {
            last = current;
            while (current == last)
                current = Math.floor(Math.random() * elements.length);
        } else
            alert('Innerfade-Type must either be \'sequence\', \'random\' or \'random_start\'');
            
        // TEST-neu - zeiten aendern	    	    		    		        	    	    		    		        
	    	    		    		        function erh()
	    	    		    			 {
	    	    		    			 xoo++;
	    	    		    			 //settings.timeout = 8000
	    	    		    			 //alert(xoo); 
	    	    		    			 //Modulo-Operator als % definiert. 							
							 if( xoo%2 == 0 )
							   // zahl gerade
							   settings.timeout = 12000
							 else
                                                         // zahl ungerade							 
							 settings.timeout = 3000
							 //alert(settings.timeout);
	    	    		    		         }	    	    		    		         
	    	    		    		         // --> der Aufruf der function	    	    		    		         
	    	    		    		         erh()
	    	    		    		         
         // TEST-ende
            
        setTimeout((function() {
            $.innerfade.next(elements, settings, current, last);
        }), settings.timeout);
    };

})(jQuery);

// **** remove Opacity-Filter in ie ****
function removeFilter(element) {
	if(element.style.removeAttribute){
		element.style.removeAttribute('filter');
	}
	
	
}
