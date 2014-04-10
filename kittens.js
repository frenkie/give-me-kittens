/**
 * Turns all your selected items into kittens
 * @param {String} selector a document.querySelectorAll valid selector string
 * @param {Object} [dimensionsThreshold] Optional minimal dimensions before
 *                  elements are kittenized, defaults to width and height of 50px
 *      @param {Number} [dimensionsThreshold.width]
 *      @param {Number} [dimensionsThreshold.height]
 */
var giveMeKittens = function ( selector, dimensionsThreshold ) {

    dimensionsThreshold = dimensionsThreshold || {
        width: 50,
        height: 50
    };

    Array.prototype.forEach.call( document.querySelectorAll( selector ), function ( element ) {

        var imageUrl, tagName;

        var dimensions = {
            width: element.clientWidth,
            height: element.clientHeight
        };

        if ( dimensions.width >= dimensionsThreshold.width &&
             dimensions.height >= dimensionsThreshold.height
           ) {

            imageUrl = 'http://placekitten.com/'+
                                    dimensions.width +'/'+
                                    dimensions.height;

            tagName = element.tagName.toLowerCase();

            switch ( tagName ) {

                case 'img':
                case 'object':
                case 'embed':
                case 'iframe':
                    element.src = imageUrl;
                    break;

                case 'hr':
                    throw Error( 'oh noes kittens for your '+ tagName );
                    break;

                default:
                    if ( element.style.display == 'inline' ) {
                        element.style.display = 'inline-block';
                    }
                    element.style.width = dimensions.width +'px';
                    element.style.height = dimensions.height +'px';
                    element.style.backgroundImage = 'url("'+ imageUrl +'")';
                    element.innerHTML = '';
                    break;
            }
        }
    });
};