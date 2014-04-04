var giveMeKittens = function ( selector ) {
    jQuery( selector ).each(function () {
		var image;
        var dimensions = {};
        dimensions.width = $(this).width();
        dimensions.height = $(this).height();

        if ( dimensions.width > 50 &&
             dimensions.height > 50
           ) {

           	this.src = 'http://placekitten.com/'+
                        dimensions.width +'/'+
                        dimensions.height;
        }
    });
};