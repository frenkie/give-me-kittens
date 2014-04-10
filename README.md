# give me kittens

Show kittens on any website. Copy paste the `kittens.js` script in your developer tools,
call the `giveMeKittens` function with your DOM selector string and
tada, instant kittens! Or easier, use <a href="javascript:(function () { var giveMeKittens = function ( selector, dimensionsThreshold ) {dimensionsThreshold = dimensionsThreshold || {width: 50, height: 50 }; Array.prototype.forEach.call( document.querySelectorAll( selector ), function ( element ) {var imageUrl, tagName; var dimensions = {width: element.clientWidth, height: element.clientHeight }; if ( dimensions.width >= dimensionsThreshold.width && dimensions.height >= dimensionsThreshold.height ) {imageUrl = 'http://placekitten.com/'+ dimensions.width +'/'+ dimensions.height; tagName = element.tagName.toLowerCase(); switch ( tagName ) {case 'img': case 'object': case 'embed': case 'iframe': element.src = imageUrl; break; case 'hr': throw Error( 'oh noes kittens for your '+ tagName ); break; default: if ( element.style.display == 'inline' ) {element.style.display = 'inline-block'; } element.style.width = dimensions.width +'px'; element.style.height = dimensions.height +'px'; element.style.backgroundImage = 'url(\''+ imageUrl +'\')'; element.innerHTML = ''; break; } } }); };  giveMeKittens( prompt('Which elements do you want to kittenize? Enter a valid querySelector string, or just press ENTER for \'img\'') ); })();">this bookmark</a>

## api

### giveMeKittens
    /**
     * Turns all your selected items into kittens
     * @param {String} selector a document.querySelectorAll valid selector string
     * @param {Object} [dimensionsThreshold] Optional minimal dimensions before
     *                  elements are kittenized, defaults to width and height of 50px
     *      @param {Number} [dimensionsThreshold.width] in pixels
     *      @param {Number} [dimensionsThreshold.height] in pixels
     */
    function giveMeKittens( selector, dimensionsThreshold )

Check out the [document.querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document.querySelectorAll) docs for more info

## examples

### [facebook](https://www.facebook.com/)
Just a simple
`giveMeKittens('img');`
will do the trick

### [nu.nl](http://nu.nl)
A Dutch news website
`giveMeKittens('img[xtclib], .image img, .trackevent img, iframe[id^=scr_]');`

## acknowledgements
This script uses the ever so clever service offered by Mark James, [placekitten.com](http://placekitten.com). Thanks!