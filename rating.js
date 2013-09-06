/**
*
* Rating.js
* Emir Salazar, 2013.
*
* 
**/

(function ($) {
 
    $.fn.eRating = function() {
 
        var eContainer = this;
        var eStar      = eContainer.find('.rating-star');


        eStar.on('click', function(e) {
       		
       		var amount = samElement(e.target)? removeAll(e.target): rate(e.target);
       		printAmount(amount);

        });

        var samElement = function(ele) {
        	if( $(ele).hasClass('rating-star-clicked') ) {
        		return true;
        	} else {
        		return false;
        	}
        }

        var removeAll = function(ele) {
        	$(ele).removeClass('rating-star-clicked');
        	return '';
        }

        var rate = function(ele) {
        	$(ele)
        		.addClass('rating-star-clicked')
        		.siblings('.rating-star')
        	    	.removeClass('rating-star-clicked');
       		
       		//$(ele)
        	//	.addClass('rating-star-clicked');
        	
        	return $(ele).attr('data-value')+' stars';
        }

        var printAmount = function(what) {
        	$('#demo-res').html(what);
        }

        return this;
    };
 
}(jQuery));